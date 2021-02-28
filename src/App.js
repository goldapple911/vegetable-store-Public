import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MainPage,
  CataloguePage,
  CartPage,
  PolicyPage,
  ContactPage,
  AboutPage,
  DeliveryPage
} from "./pages"
import {firstPageMediaUrl, cataloguePageMediaUrl, catalogueUrl} from "./api/urls";
import PagesContext from "./pages/PagesContext";
import { find, isEqual, indexOf, compact } from "lodash";

class App extends Component {

  pagesList = [
    {name: "Главная", href: "/"},
    {name: "Каталог", href: "/catalogue"},
    {name: "Корзина", href: "/cart"},
    {name: "О нас", href: "/about"},
    {name: "Оплата и доставка", href: "/delivery"},
    {name: "Публичная оферта", href: "/policy"},
    {name: "Контакты", href: "/contacts"},
  ]

  state = {
    navigationClosed: true,
    headerCircleRotation: 0,
    mainPageCurrentPromo: [{}],
    mainPageCurrentSlides: [],
    mainPageMediaLoading: true,
    mainPageContentPromo: [{}],
    mainPageTeam: [{}],
    currentShops: [],
    scrollTop: false,
    catalogueCategories: [{}],
    selectedCataloguePage: '',
    catalogueLoading: true,
    catalogue: {},
    activeItem: {},
    cartItems: [],
    currentPages: this.pagesList,
    totalCost: 0,
    packAsPresent: false,
    filteredCatalogueItems: [],
  }

  appRootRef = React.createRef();

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.scrollTop) {
      this.appRootRef.current.scrollIntoView({block: "start", behavior: "smooth"});
      this.setState({
        ...this.state,
        scrollTop: false,
      })
    }
    (!isEqual(prevState?.cartItems, this.state.cartItems) || prevState?.packAsPresent !== this.state.packAsPresent)
      && this.calculateTotalCost();
  }

  calculateTotalCost = () => {
    let totalCost = 0;
    this.state.cartItems.map((item) => {
      let item3Count = 0;
      for (let i = item.count; i/3 >= 1; i -= 3) {
        item3Count += 1;
      }
      const item1Count = item.count - item3Count * 3;
      totalCost += item3Count * item.item.selectedVolume.price3 + item1Count * item.item.selectedVolume.price1
    })
    if (this.state.packAsPresent) totalCost += 300;
    this.setState({
      ...this.state,
      totalCost: totalCost,
    })
  }

  toggleNavigation = () => {
    this.setState({
      navigationClosed: !this.state.navigationClosed,
    })
  }

  rotateHeaderCircle = () => {
    const rotationValue = window.scrollY;
    const rotationReducer = 30;
    const currentRotation = rotationValue/rotationReducer;
    this.setState({
      headerCircleRotation: currentRotation,
    })
  }

  getMainPageMedia = () => {
    fetch(firstPageMediaUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          mainPageCurrentPromo: data?.promo,
          mainPageCurrentSlides: data?.slider,
          mainPageContentPromo: data?.content,
          mainPageTeam: data?.team,
          currentShops: data?.shops,
          mainPageMediaLoading: false,
        })
      })
  }

  getCataloguePageMedia = () => {
    fetch(cataloguePageMediaUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
        })
      })
  }

  getCatalogue = () => {
    fetch(catalogueUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          catalogueCategories: data.categories,
          catalogue: data.catalogue,
          catalogueLoading: false,
        })
      })
  }

  toggleScrollTop = () => {
    this.setState({
      ...this.state,
      scrollTop: true,
    })
  }

  selectCataloguePage = (page) => {
    this.setState({
      ...this.state,
      selectedCataloguePage: page,
    })
  }

  selectActiveItem = (item) => {
    if (item) {
      const newActiveItem = {
        item: item,
        selectedVolume: item?.volumes[0],
      }
      this.setState({
        ...this.state,
        activeItem: newActiveItem,
      })
    } else {
      this.setState({
        ...this.state,
        activeItem: {},
      })
    }
  }

  changeActiveVolume = (volume) => {
    const newActiveItem = {
      item: this.state.activeItem?.item,
      selectedVolume: volume,
    }
    this.setState({
      ...this.state,
      activeItem: newActiveItem,
    })
  }

  addItemToCart = (item) => {
    let newCartItems;
    const currentCartItem = find(this.state.cartItems, (cartItem) => {
      return isEqual(cartItem.item, item)
    })
    if (currentCartItem) {
      newCartItems = [...this.state.cartItems]
      const index = indexOf(this.state.cartItems, currentCartItem);
      const newItem = {
        item: currentCartItem.item,
        count: currentCartItem.count + 1,
      };
      newCartItems.splice(index, 1, newItem);
    } else {
      const newCartItem = {
        item: item,
        count: 1,
      }
      newCartItems = [...this.state.cartItems, newCartItem];
    }
    this.setState({
      ...this.state,
      cartItems: newCartItems,
    })
  }

  removeItemFromCart = (item, sub) => {
    let newCartItems;
    const currentCartItem = find(this.state.cartItems, (cartItem) => {
      return isEqual(cartItem.item, item)
    })
    if (currentCartItem?.count > 1 && sub === 1) {
      newCartItems = [...this.state.cartItems]
      const index = indexOf(this.state.cartItems, currentCartItem);
      const newItem = {
        item: currentCartItem.item,
        count: currentCartItem.count - 1,
      };
      newCartItems.splice(index, 1, newItem);
    }
    else if (currentCartItem?.count === 1 || sub > 1) {
      newCartItems = [...this.state.cartItems]
      const index = indexOf(this.state.cartItems, currentCartItem);
      newCartItems.splice(index, 1);
    }
    this.setState({
      ...this.state,
      cartItems: newCartItems ? newCartItems : [],
    })
  }

  togglePackAsPresent = () => {
    this.setState({
      ...this.state,
      packAsPresent: !this.state.packAsPresent,
    })
  }

  findMatchingItems = (currentFilters) => {
    let searchingCategories;
    compact(currentFilters.filters).length
      ? searchingCategories = currentFilters.filters
      : searchingCategories = this.state.catalogueCategories.map((category) => category.id)
    const itemName = currentFilters.name;
    let newFilteredItems = [];

    for (let category of searchingCategories) {
      this.state.catalogue[category].map((item) => {

        const itemPrices = item.volumes.map((volume) => volume.price1);

        const minPrice = Math.min.apply(null, itemPrices)
        const maxPrice = Math.max.apply(null, itemPrices)

        if (item.name.includes(itemName)
            && currentFilters.minPrice <= minPrice
            && currentFilters.maxPrice >= maxPrice) {
          newFilteredItems.push(item);
        }
      })
    }
    this.setState({
      ...this.state,
      filteredCatalogueItems: newFilteredItems,
    })
  }

  render() {

    return (
      <Router>
        <div className="App" ref={this.appRootRef}>
          <Switch>
            <PagesContext.Provider
              value={{
                navigationClosed: this.state.navigationClosed,
                currentPromo: this.state.mainPageCurrentPromo,
                currentSlides: this.state.mainPageCurrentSlides,
                headerCircleRotation: this.state.headerCircleRotation,
                contentPromo: this.state.mainPageContentPromo,
                mediaLoading: this.state.mainPageMediaLoading,
                teamList: this.state.mainPageTeam,
                currentShops: this.state.currentShops,
                selectedCataloguePage: this.state.selectedCataloguePage,
                catalogueCategories: this.state.catalogueCategories,
                catalogueLoading: this.state.catalogueLoading,
                catalogue: this.state.catalogue,
                activeItem: this.state.activeItem,
                cartItems: this.state.cartItems,
                currentPages: this.state.currentPages,
                totalCost: this.state.totalCost,
                filteredCatalogueItems: this.state.filteredCatalogueItems,
                toggleNavigation: this.toggleNavigation,
                rotateHeaderCircle: this.rotateHeaderCircle,
                getMainPageMedia: this.getMainPageMedia,
                toggleScrollTop: this.toggleScrollTop,
                getCatalogue: this.getCatalogue,
                selectCataloguePage: this.selectCataloguePage,
                selectActiveItem: this.selectActiveItem,
                changeActiveVolume: this.changeActiveVolume,
                addItemToCart: this.addItemToCart,
                removeItemFromCart: this.removeItemFromCart,
                togglePackAsPresent: this.togglePackAsPresent,
                findMatchingItems: this.findMatchingItems,
              }}
            >
              <Route path="/" exact component={MainPage} />
              <Route path="/catalogue" component={CataloguePage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/policy" component={PolicyPage} />
              <Route path="/contacts" component={ContactPage} />
              <Route path="/delivery" component={DeliveryPage} />
            </PagesContext.Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
