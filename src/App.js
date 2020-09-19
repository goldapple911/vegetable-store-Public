import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainPageContext from "./pages/MainPage/MainPageContext";

class App extends Component {

  state = {
    navigationClosed: true,
    currentPromo: [
      {name: 'Чистящая паста для посуды и сантехники', price: 250, volume: '250 мл', cover: 'plumbing_paste.jpg'},
      {name: 'Твердый бальзам', price: 230, volume: '18 гр', cover: 'hard_balm.jpg'},
      {name: 'Твердый шампунь', price: 320, volume: '40 гр', cover: 'hard_shampoo.jpg'},
    ]
  }

  toggleNavigation = () => {
    this.setState({
      navigationClosed: !this.state.navigationClosed,
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
                toggleNavigation: this.toggleNavigation,
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
