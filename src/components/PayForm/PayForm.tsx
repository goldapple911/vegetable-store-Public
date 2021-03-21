import React from 'react';
import classes from './PayForm.module.css';

const PayForm = (props: any) => {
  const {
    totalCost
  } = props;

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
        <div className="ym-payment-btn-block">
          <div className="ym-input-icon-rub ym-display-none">
            <input
              name="sum"
              placeholder="0.00"
              className="ym-input ym-sum-input ym-required-input"
              type="number"
              step="any"
              value={totalCost}
            />
          </div>
          <button
            data-text="Заплатить"
            className={classes.button}
          >
            Оплатить {totalCost} ₽
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
}

export default PayForm;