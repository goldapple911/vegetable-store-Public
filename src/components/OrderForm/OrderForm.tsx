import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { cartStore } from '../../store';
import { OrderInfoProperty } from '../../interfaces';
import { set } from 'lodash';
import Select from 'react-select';
import {
  initialOrderInfoWithAddress,
  initialOrderInfoCDEK,
  ekbAddressOptions,
} from "./helpers/mockData";

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
    if (toJS(cartStore).sendToPVZ || toJS(cartStore).pickUpEkb) {
      setOrderInfo(initialOrderInfoCDEK)
    } else {
      setOrderInfo(initialOrderInfoWithAddress)
    }
  }, [toJS(cartStore).sendToPVZ, toJS(cartStore).pickUpEkb]);

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
      <div className={classes.toggle}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            checked={toJS(cartStore).pickUpEkb}
            onChange={(event) => {
              cartStore.selectPickUpEkb(event.target.checked);
              cartStore.selectSendToPVZ(false);
            }}
          />
          <span className={classes.slider}></span>
        </label>
        Заберу в пункте выдачи Екатеринбург
      </div>
      <div className={classes.toggle}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            checked={toJS(cartStore).sendToPVZ}
            onChange={(event) => {
              cartStore.selectSendToPVZ(event.target.checked);
              cartStore.selectPickUpEkb(false);
            }}
          />
          <span className={classes.slider}></span>
        </label>
        Заберу в пункте СДЭК
      </div>
      <div className={classes.holder}>
        {
          toJS(cartStore).pickUpEkb &&
          <Select
            className={classes.select}
            placeholder="Выберите пункт самовывоза"
            options={ekbAddressOptions}
            onChange={(options) =>
              cartStore.updateAddressEkb(options?.label || '')
            }
          />
        }
        {
          // @ts-ignore
          Object.keys(orderInfo).map((field: OrderInfoProperty, index: number) => {
            return (
              <input
                className={cn({
                  [classes.input]: true,
                  [classes.input_filled]: orderInfo[field]?.value,
                  [classes.input_fullsize]: toJS(cartStore).sendToPVZ || toJS(cartStore).pickUpEkb,
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