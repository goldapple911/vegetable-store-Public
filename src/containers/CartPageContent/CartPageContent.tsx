import React, { useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import {
  OrderForm,
  CartItemCard,
  PayForm,
  Header,
} from '../../components';
import { cartStore } from '../../store';

import classes from './CartPageContent.module.css';
import {Link} from "react-router-dom";

const CartPageContent = observer(() => {
  const [orderSend, setOrderSend] = useState<boolean>(false);

  const cartItems = toJS(cartStore).cartItems;
  const totalCost = toJS(cartStore).totalCost;

  const onOrderSend = () => setOrderSend(true);

  return (
    <main className={classes.CataloguePageContent}>
      <div className="container">
        <Header/>
        {
          cartItems?.length
          ? <div className={classes.holder}>
            <div className={classes.column}>
              <h1 className={classes.title}>Проверь свой заказ</h1>
              <div className={classes.cost}>
                Итого: <span className={classes.cost_value}>{totalCost} р</span>
              </div>
              <span>Доставка оплачивается при получении курьеру либо в пункте выдачи заказа</span>
              <Link
                to="/delivery"
                className={classes.link}
              >
                Стоимость доставки
              </Link>
              <div className={classes.present}>
                <input
                  type="checkbox"
                  id="present-checkbox"
                  className={classes.present_checkbox}
                  onChange={() => {cartStore.togglePackAsPresent()}}
                  disabled={!cartItems?.length}
                />
                <label
                  htmlFor="present-checkbox"
                  className={classes.present_description}
                >
                  Собрать, как подарок &nbsp;
                </label>
                +300 р
              </div>
              <ul className={classes.list}>
                {cartItems?.map((cartItem, index) => {
                    return (
                      <CartItemCard
                        cartItem={cartItem}
                        key={index}
                      />
                    )
                  })}
              </ul>
            </div>
            {
                orderSend ? (
                  <PayForm totalCost={totalCost}/>
                ) : (
                  <OrderForm onOrderSend={onOrderSend}/>
                )
              }
          </div>
          : <h2 className={classes.instruction}>Добавьте что-нибудь в корзину</h2>
        }
      </div>
    </main>
  )
});

export { CartPageContent };