import React, {useContext, useEffect, useState} from 'react';
import classes from './CartPageContent.module.css';
import {Navigation, CartIcon} from "../../components"
import PagesContext from '../../pages/PagesContext';

export default () => {

  const cartContext = useContext(PagesContext)

  const cartItems = cartContext?.cartItems;

  let totalCost = 0;
  cartItems?.map((item) => {
    if (item.count < 3) {
      totalCost += item.item.selectedVolume.price1 * item.count;
    }
  })

  return (
    <main className={classes.CataloguePageContent}>
      <div className={"container"}>
        <div className={classes.holder}>
          <Navigation/>
          <CartIcon/>
        </div>
        <div className={classes.holder}>
          <div className={classes.column}>
            <h1 className={classes.title}>Проверь свой заказ</h1>
            <span className={classes.cost}>{totalCost}</span>
            <ul>
              {cartItems?.map((cartItem) => {
                return (
                  <li>{cartItem.item.item.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
};