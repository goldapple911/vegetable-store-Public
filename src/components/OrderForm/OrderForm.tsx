import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import classes from './OrderForm.module.css';
import PagesContext from "../../pages/PagesContext";
import {compact} from "lodash"

export default (props: any) => {

  const cartContext = useContext(PagesContext);

  interface dataField {
    value: string,
    placeholder: string,
  }

  const initialOrderInfo: { [char: string]: dataField } = {
    fullName: {
      value: '',
      placeholder: 'Ф.И.О'
    },
    cityName: {
      value: '',
      placeholder: 'Город'
    },
    streetName: {
      value: '',
      placeholder: 'Улица'
    },
    homeNumber: {
      value: '',
      placeholder: 'Дом',
    },
    sectionId: {
      value: '',
      placeholder: 'Cт'
    },
    flatNumber: {
      value: '',
      placeholder: 'Кв',
    },
    postalCode: {
      value: '',
      placeholder: 'Индекс'
    },
    phoneNumber: {
      value: '',
      placeholder: 'Телефон',
    },
    email: {
      value: '',
      placeholder: 'Email'
    },
  }

  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);
  const [submitIsDisabled, setSubmitIsDisabled] = useState(true);

  const changeOrderInfo = (e: any) => {
    const newOrderInfo = {...orderInfo};
    newOrderInfo[e?.target?.dataset?.name].value = e?.target?.value;
    setOrderInfo(newOrderInfo);
  }

  useEffect(() => {
    checkDataFilling()
  })

  const checkDataFilling = () => {
    const fields = Object.values(orderInfo);
    setSubmitIsDisabled(false)
    fields.map((field) => {
      !field.value && setSubmitIsDisabled(true);
    })
  }

  //TEMPORARY FUNCTION
  const checkData = (e: any) => {
    e.preventDefault();
    console.log(orderInfo)
  }

  return (
    <form className={classes.OrderForm}
          onSubmit={(e: any) => checkData(e)}
    >
      <h2 className={classes.title}>Куда отправлять?</h2>
      <button className={classes.remove}
              onClick={() => setOrderInfo(initialOrderInfo)}
      >
        х
      </button>
      <div className={classes.holder}>
        {Object.keys(orderInfo).map((field: string, index: number) => {
          return (
            <input className={classes.input}
                   key={index}
                   data-name={field}
                   value={orderInfo[field].value}
                   placeholder={orderInfo[field].placeholder}
                   onChange={(e: any) => changeOrderInfo(e)}
            />
          )
        })}
      </div>
      <button type="submit"
              className={classes.submit}
              disabled={submitIsDisabled}
      >
        Продолжить
      </button>
    </form>
  );
};