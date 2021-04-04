import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { cartStore } from '../../store';
import { OrderInfoProperty } from '../../interfaces';
import {
  initialOrderInfoWithAddress,
  initialOrderInfoCDEK,
} from "./helpers/mockData";
import { set } from 'lodash';

import classes from './OrderForm.module.css';

const OrderForm = observer((props: any) => {
  const {
    onOrderSend
  } = props;

  const cartItems = toJS(cartStore).cartItems;
  const totalCost = toJS(cartStore).totalCost;

  const [orderInfo, setOrderInfo] = useState(initialOrderInfoWithAddress);
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);

  useEffect(() => {
    if (toJS(cartStore).sendToPVZ) {
      setOrderInfo(initialOrderInfoCDEK)
    } else {
      setOrderInfo(initialOrderInfoWithAddress)
    }
  }, [toJS(cartStore).sendToPVZ]);

  useEffect(() => {
    checkDataFilling()
  });

  const checkDataFilling = () => {
    const fields = Object.values(orderInfo);
    setSubmitIsDisabled(false)
    fields.map((field) => {
      !field?.value && field?.required && setSubmitIsDisabled(true);
    })
    if (toJS(cartStore).sendToPVZ && !toJS(cartStore).addressPVZ) {
      setSubmitIsDisabled(true);
    }
  };

  const changeOrderInfo = (e: React.ChangeEvent<HTMLInputElement>, property: OrderInfoProperty) => {
    const newOrderInfo = { ...orderInfo };
    set(newOrderInfo, `${property}.value`, e?.target?.value);
    setOrderInfo(newOrderInfo);
  };

  const saveOrderInfo = (e: any) => {
    e.preventDefault();
    cartStore.saveOrderInfo(orderInfo);
    onOrderSend();
  };

  return (
    <form
      className={classes.OrderForm}
      onSubmit={(e: any) => saveOrderInfo(e)}
      action="https://formspree.io/f/xaylkanp"
      method="POST"
    >
      <h2 className={classes.title}>Куда отправлять?</h2>
      <div className={classes.cdek}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            onChange={(event) =>
              cartStore.selectSendToPVZ(event.target.checked)
            }
          />
          <span className={classes.slider}></span>
        </label>
        Заберу в пункте СДЭК
      </div>
      <div className={classes.holder}>
        {
          // @ts-ignore
          Object.keys(orderInfo).map((field: OrderInfoProperty, index: number) => {
            return (
              <input
                className={cn({
                  [classes.input]: true,
                  [classes.input_filled]: orderInfo[field]?.value,
                  [classes.input_fullsize]: toJS(cartStore).sendToPVZ,
                })}
                key={index}
                value={orderInfo[field]?.value}
                placeholder={orderInfo[field]?.placeholder}
                onChange={(e: any) => changeOrderInfo(e, field)}
                name={orderInfo[field]?.placeholder}
              />
            )
          })
        }
      </div>
      {cartItems?.map((item, index) => {
        const cartItem = item.item;
        return (
          <input
            type="hidden"
            key={index}
            name={`Поз№ ${index + 1}`}
            value={`${cartItem.item.name} ${cartItem.selectedVolume.volume} ${item.count} шт.`}
          />
        )
      })}
      <input
        type="hidden"
        name="Стоимость заказа"
        value={`${totalCost} руб.`}
      />
      <button
        type="submit"
        className={classes.submit}
        disabled={submitIsDisabled}
      >
        Продолжить
      </button>
    </form>
  );
});

export { OrderForm };