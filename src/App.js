import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainPageContext from './pages/MainPage/MainPageContext';

class App extends Component {

  state = {
    navigationClosed: true,
    headerCircleRotation: 0,
    currentPromo: [
      {name: 'Чистящая паста для посуды и сантехники', price: 250, volume: '250 мл', cover: 'plumbing_paste.jpg'},
      {name: 'Твердый бальзам', price: 230, volume: '18 гр', cover: 'hard_balm.jpg'},
      {name: 'Твердый шампунь', price: 320, volume: '40 гр', cover: 'hard_shampoo.jpg'},
    ],
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

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <MainPageContext.Provider
              value={{
                navigationClosed: this.state.navigationClosed,
                currentPromo: this.state.currentPromo,
                headerCircleRotation: this.state.headerCircleRotation,
                toggleNavigation: this.toggleNavigation,
                rotateHeaderCircle: this.rotateHeaderCircle,
                contentPromo: this.state.contentPromo,
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
