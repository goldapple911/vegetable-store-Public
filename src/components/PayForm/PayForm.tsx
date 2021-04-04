import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import classes from './PayForm.module.css';
import { cartStore } from '../../store';
import {CartItem} from "../../interfaces";

const PayForm = observer(() => {

  const orderInfo = toJS(cartStore).orderInfo;
  let orderFullAddress: string = '';
  if (toJS(cartStore.sendToPVZ)) {
    orderFullAddress =  toJS(cartStore).addressPVZ
  } else {
    orderFullAddress = `${orderInfo?.country?.value} ${orderInfo?.cityName?.value} 
    ${orderInfo?.streetName?.value} ${orderInfo?.homeNumber?.value} ${orderInfo?.flatNumber?.value} 
    ${orderInfo?.sectionId?.value} ${orderInfo?.postalCode?.value}`;
  }

  return (
    <div className={classes.PayForm}>
      <h2 className={classes.title}>Оплата</h2>
      <p className={classes.text}>
        Чтобы завершить заказ, нажмите кнопку "Оплатить". Вас автоматически перенаправит на страницу оплаты
        YooKassa.
      </p>
      <link
        rel="stylesheet"
        href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
      />
      <form
        className="yoomoney-payment-form"
        action="https://yookassa.ru/integration/simplepay/payment"
        method="post"
        accept-charset="utf-8"
      >
        {
          toJS(cartStore).cartItems.map((item: CartItem) => {
            return (
              <div className={classes.product}>
                <input type="hidden" name="text" value={item.item.item.name}/>
                <input type="hidden" name="price" value={item.item.selectedVolume.price1}/>
                <input type="hidden" name="quantity" value={item.count}/>
                <input type="hidden" name="paymentSubjectType" value="commodity"/>
                <input type="hidden" name="paymentMethodType" value="full_prepayment"/>
              </div>
            )
          })
        }
        <div className={classes.info}>
          <input name="cps_email" type="hidden" value={orderInfo?.email?.value}/>
          <input name="cps_phone" type="hidden" value={orderInfo?.phoneNumber?.value}/>
          <input name="custName" type="hidden" value={orderInfo?.fullName?.value}/>
          <input name="custAddr" type="hidden" value={orderFullAddress}/>
        </div>
        <div className="ym-payment-btn-block">
          <div className="ym-input-icon-rub ym-display-none">
            <input
              name="sum"
              placeholder="0.00"
              className="ym-input ym-sum-input ym-required-input"
              type="number"
              step="any"
              value={toJS(cartStore).totalCost}
            />
          </div>
          <button
            data-text="Заплатить"
            className={classes.button}
          >
            Оплатить {toJS(cartStore).totalCost} ₽
          </button>
        </div>
        <input
          name="shopId"
          type="hidden"
          value="775671"
        />
      </form>
      <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js"></script>
    </div>
  )
});

export { PayForm };