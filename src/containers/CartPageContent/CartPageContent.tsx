import React, {useContext} from 'react';
import classes from './CartPageContent.module.css';
import {
  Navigation,
  CartIcon,
  OrderForm,
  CartItemCard
} from "../../components"
import PagesContext from '../../pages/PagesContext';

export default () => {

  const cartContext = useContext(PagesContext)

  const cartItems = cartContext?.cartItems;
  const totalCost = cartContext?.totalCost;

  return (
    <main className={classes.CataloguePageContent}>
      <div className={"container"}>
        <div className={classes.header}>
          <Navigation/>
          <CartIcon/>
        </div>
        {
          cartItems?.length
          ? <div className={classes.holder}>
              <div className={classes.column}>
                <h1 className={classes.title}>Проверь свой заказ</h1>
                <div className={classes.cost}>
                  Итого: <span className={classes.cost_value}>{totalCost} р</span>
                </div>
                <div className={classes.present}>
                  <input type="checkbox"
                         id="present-checkbox"
                         className={classes.present_checkbox}
                         onChange={() => {cartContext?.togglePackAsPresent()}}
                         disabled={!cartItems?.length}
                  />
                  <label htmlFor="present-checkbox"
                         className={classes.present_description}
                  >
                    Собрать, как подарок &nbsp;
                  </label>
                  +300 р
                </div>
                <ul className={classes.list}>
                  {cartItems?.map((cartItem, index) => {
                    return (
                      <CartItemCard cartItem={cartItem} key={index}/>
                    )
                  })}
                </ul>
              </div>
              <OrderForm/>
            </div>
          : <h2 className={classes.instruction}>Добавьте что-нибудь в корзину</h2>
        }
      </div>
    </main>
  )
};