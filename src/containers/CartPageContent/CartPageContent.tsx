import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import {
  OrderForm,
  CartItemCard,
  PayForm,
  Header,
} from '../../components';
import { cartStore } from '../../store';
import cn from 'classnames';

import classes from './CartPageContent.module.css';

const CartPageContent = observer(() => {
  const [orderSend, setOrderSend] = useState<boolean>(false);

  const cartItems = toJS(cartStore).cartItems;
  const totalCost = toJS(cartStore).totalCost;

  const onSelectPVZ = (data: any) => {
    const newAddressPVZ = `Пункт выдачи СДЭК ${data.cityName} ${data.PVZ.Address}`;
    cartStore.updateAddressPVZ(newAddressPVZ);
  };

  let widgetCDEK: any;

  useEffect(() => {
    //@ts-ignore
    widgetCDEK = new ISDEKWidjet ({
      defaultCity: 'Екатеринбург',
      cityFrom: 'Екатеринбург',
      country: 'Россия',
      link: 'sdek_widget',
      path: 'https://widget.cdek.ru/widget/scripts/',
    });
    widgetCDEK.binders.add(onSelectPVZ, 'onChoose');
  })

  const onOrderSend = () => setOrderSend(true);

  return (
    <main className={classes.CataloguePageContent}>
      <div className="container">
        <Header/>
        {
          cartItems?.length
          ? <div className={classes.column}>
              <div className={classes.holder}>
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
                    <PayForm/>
                  ) : (
                    <OrderForm onOrderSend={onOrderSend}/>
                  )
                }
              </div>
            </div>
          : <h2 className={classes.instruction}>Добавьте что-нибудь в корзину</h2>
        }
        <div
          className={cn({
            [classes.hidden]: !toJS(cartStore).sendToPVZ || toJS(cartStore).addressPVZ.length,
          })}
        >
          <h3>Выберите пункт самовывоза СДЭК</h3>
          <div
            id="sdek_widget"
            className={classes.widget}
            style={{height: '500px'}}
          />
        </div>
        <h3 className={
          cn({
            [classes.instruction]: true,
            [classes.hidden]: !toJS(cartStore).addressPVZ}
          )}
        >
          Пункт самовывоза СДЭК успешно выбран!
          ({toJS(cartStore).addressPVZ})
        </h3>
      </div>
    </main>
  )
});

export { CartPageContent };