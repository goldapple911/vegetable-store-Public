import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainPageContext from './pages/MainPage/MainPageContext';
import {firstPageMediaUrl} from "./api/urls";

class App extends Component {

  state = {
    navigationClosed: true,
    headerCircleRotation: 0,
    mainPageCurrentPromo: [{}],
    mainPageCurrentSlides: [],
    mainPageMediaLoading: true,
    contentPromo: [
      { name: 'Экомешочек для хлеба', price: 150, volume: '30х40', cover: 'bread_bag.png' },
      { name: 'Фруктовка', price: 110, volume: '20х20', cover: 'fruit_bag.png' },
      { name: 'Джут для посуды', price: 100, volume: '', cover: 'dishes_jute.png' },
      { name: 'Многоразовые бахилы с чехлом', price: 250, volume: '', cover: 'reuseable_shoecovers.png' },
    ],
  }

  toggleNavigation = () => {
    this.setState({
      navigationClosed: !this.state.navigationClosed,
    })
  }

  rotateHeaderCircle = () => {
    const rotationValue = window.scrollY;
    const rotationReducer = 10;
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
          mainPageMediaLoading: false,
        })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <MainPageContext.Provider
              value={{
                navigationClosed: this.state.navigationClosed,
                currentPromo: this.state.mainPageCurrentPromo,
                currentSlides: this.state.mainPageCurrentSlides,
                headerCircleRotation: this.state.headerCircleRotation,
                toggleNavigation: this.toggleNavigation,
                rotateHeaderCircle: this.rotateHeaderCircle,
                getMainPageMedia: this.getMainPageMedia,
                contentPromo: this.state.contentPromo,
                mediaLoading: this.state.mainPageMediaLoading,
              }}
            >
              <Route path="/" exact component={MainPage} />
            </MainPageContext.Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
