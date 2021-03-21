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
} from './pages'
import PagesContext from './pages/PagesContext';

class App extends Component {

  pagesList = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalogue' },
    { name: 'Корзина', href: '/cart' },
    { name: 'О нас', href: '/about' },
    { name: 'Оплата и доставка', href: '/delivery' },
    { name: 'Публичная оферта', href: '/policy' },
    { name: 'Контакты', href: '/contacts' },
  ]

  state = {
    navigationClosed: true,
    headerCircleRotation: 0,
    scrollTop: false,
    currentPages: this.pagesList,
  }

  appRootRef = React.createRef();

  componentDidUpdate = () => {
    if (this.state.scrollTop) {
      // @ts-ignore
      this.appRootRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      this.setState({
        ...this.state,
        scrollTop: false,
      })
    }
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

  toggleScrollTop = () => {
    this.setState({
      ...this.state,
      scrollTop: true,
    })
  }

  render() {
    return (
      <Router>
        <div
          className="App"
          // @ts-ignore
          ref={this.appRootRef}
        >
          <Switch>
            <PagesContext.Provider
              // @ts-ignore
              value={{
                navigationClosed: this.state.navigationClosed,
                headerCircleRotation: this.state.headerCircleRotation,
                currentPages: this.state.currentPages,
                toggleNavigation: this.toggleNavigation,
                rotateHeaderCircle: this.rotateHeaderCircle,
                toggleScrollTop: this.toggleScrollTop,
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
    );
  }
}

export { App };
