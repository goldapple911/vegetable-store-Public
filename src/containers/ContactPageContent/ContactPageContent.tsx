import React, {useContext} from 'react';
import classes from './ContactPageContent.module.css';
import {
  Navigation,
  CartIcon,
} from "../../components"

export default () => {

  return (
    <main className={classes.CataloguePageContent}>
      <div className={"container"}>
        <div className={classes.header}>
          <Navigation/>
          <CartIcon/>
        </div>
        <h1 className={classes.title}>Контакты</h1>
        <p>ИП Широносова Елизавета Вячеславовна</p>
        <p>Тел.: +7 912 689 13 79</p>
        <p>Email: solncedom86@gmail.com</p>
        <p>ИНН:&nbsp;450126958595</p>
        <p>Счет:&nbsp;40802810513500007371</p>
        <p>Банк: Филиал ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</p>
        <p>БИК: 044525999</p>
        <p>Корр. счёт: 30101810845250000999</p>
      </div>
    </main>
  )
};