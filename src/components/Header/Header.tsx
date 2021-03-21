import React from 'react';
import {
  Navigation,
  CartIcon,
} from '../../components';
import classes from './Header.module.css';
import {Link} from "react-router-dom";

export default () => (
  <div className={classes.Header}>
    <div className="container">
      <div className={classes.holder}>
        <Navigation />
        <Link
          to="/"
          className={classes.cart}
        >
          <img
            src={require('../../images/logo.svg')}
            alt=""
          />
        </Link>
        <CartIcon />
      </div>
    </div>
  </div>
);
