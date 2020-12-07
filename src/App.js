import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import CartPage from './pages/CartPage/CartPage';
import {firstPageMediaUrl, cataloguePageMediaUrl, catalogueUrl} from "./api/urls";
import PagesContext from "./pages/PagesContext";
import { find, isEqual, indexOf } from "lodash";

class App extends Component {

  pagesList = [
    {name: "Каталог", href: "/catalogue"},
    {name: "О нас", href: "/about"},
    {name: "Карзина", href: "/cart"},
    {name: "Главная", href: "/"},
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
  }

  appRootRef = React.createRef();

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

  componentDidUpdate = () => {
    if (this.state.scrollTop) {
      this.appRootRef.current.scrollIntoView({block: "start", behavior: "smooth"});
      this.setState({
        ...this.state,
        scrollTop: false,
      })
    }
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

  removeItemFromCart = (item) => {
    let newCartItems;
    const currentCartItem = find(this.state.cartItems, (cartItem) => {
      return isEqual(cartItem.item, item)
    })
    if (currentCartItem?.count > 1) {
      newCartItems = [...this.state.cartItems]
      const index = indexOf(this.state.cartItems, currentCartItem);
      const newItem = {
        item: currentCartItem.item,
        count: currentCartItem.count - 1,
      };
      newCartItems.splice(index, 1, newItem);
    }
    else if (currentCartItem?.count === 1) {
      newCartItems = [...this.state.cartItems]
      const index = indexOf(this.state.cartItems, currentCartItem);
      newCartItems.splice(index, 1);
    }
    this.setState({
      ...this.state,
      cartItems: newCartItems ? newCartItems : [],
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
              }}
            >
              <Route path="/" exact component={MainPage} />
              <Route path="/catalogue" component={CataloguePage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/about" component={CartPage} />
            </PagesContext.Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
