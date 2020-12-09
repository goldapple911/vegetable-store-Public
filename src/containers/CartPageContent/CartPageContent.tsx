import React, {useContext} from 'react';
import classes from './CartPageContent.module.css';
import {Navigation, CartIcon} from "../../components"
import PagesContext from '../../pages/PagesContext';
import CartItemCard from "../../components/CartItemCard/CartItemCard";


export default () => {

  const cartContext = useContext(PagesContext)

  const cartItems = cartContext?.cartItems;
  const totalCost = cartContext?.totalCost;

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
            <span>Собрать, как подарок +300р</span>
            <input type="checkbox"
                   onChange={() => {cartContext?.togglePackAsPresent()}}
                   disabled={!cartItems?.length}
            />
            <ul>
              {cartItems?.map((cartItem, index) => {
                return (
                  <CartItemCard cartItem={cartItem} key={index}/>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
};