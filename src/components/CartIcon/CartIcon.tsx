import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './CartIcon.module.css';
import PagesContext from "../../pages/PagesContext";

export default (props: any) => {

  const cartContext = useContext(PagesContext);

  const cartItems = cartContext?.cartItems;

  let numberOfItems = 0;
  cartItems?.map((item) => {
    numberOfItems += item.count;
  })

  return (
    <div className={classes.CartIcon}>
      <Link to='/cart' className={classes.cart} >
        <img src={require('../../images/icons/bag.svg')} alt=""/>
      </Link>
      <span className={classes.counter}>{numberOfItems}</span>
    </div>
  );
};