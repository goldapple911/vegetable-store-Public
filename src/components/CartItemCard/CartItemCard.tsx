import React, {useContext, useState} from 'react';
import classes from "./CartItemCard.module.css";
import PagesContext from '../../pages/PagesContext';


export default (props: any) => {

  const {
    cartItem
  } = props

  const cartContext = useContext(PagesContext);

  const item = cartItem.item;

  let itemCost = 0;
  let item3Count = 0;

  for (let i = cartItem.count; i/3 >= 1; i -= 3) {
    item3Count += 1;
  }

  const item1Count = cartItem.count - item3Count * 3;
  itemCost = item3Count * item.selectedVolume.price3 + item1Count * item.selectedVolume.price1

  return (
    <li className={classes.CatalogueItemCard}
    >
      {item.item.name}
      <button onClick={() => cartContext?.addItemToCart(item)}>+</button>
      {cartItem.count}
      <button onClick={() => cartContext?.removeItemFromCart(item, 1)}>-</button>
      {itemCost}
      <button onClick={() => cartContext?.removeItemFromCart(item, cartItem.count)}>Х</button>
    </li>
  );
};