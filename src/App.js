import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import {firstPageMediaUrl, cataloguePageMediaUrl, catalogueUrl} from "./api/urls";
import PagesContext from "./pages/PagesContext"

class App extends Component {

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

  componentDidUpdate = (prevState) => {
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

                toggleNavigation: this.toggleNavigation,
                rotateHeaderCircle: this.rotateHeaderCircle,
                getMainPageMedia: this.getMainPageMedia,
                toggleScrollTop: this.toggleScrollTop,
                getCatalogue: this.getCatalogue,
                selectCataloguePage: this.selectCataloguePage,
              }}
            >
              <Route path="/" exact component={MainPage} />
              <Route path="/catalogue" component={CataloguePage} />
            </PagesContext.Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
