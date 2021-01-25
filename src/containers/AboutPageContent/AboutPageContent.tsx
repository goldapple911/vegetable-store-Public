import React from 'react';
import classes from './AboutPageContent.module.css';
import {
  Navigation,
  CartIcon,
} from "../../components"

export default () => {

  return (
    <main className={classes.AboutPageContent}>
      <div className={"container"}>
        <div className={classes.header}>
          <Navigation/>
          <CartIcon/>
        </div>
        <h1 className={classes.title}>О нас</h1>
        <p>Всем привет! Мы - уральский бренд веганской уходовой косметики&nbsp; и экологичных товаров</p>
        <p>Дом Солнце - кооператив. Мы изготавливаем свою продукцию с любовью, без продуктов животного происхождения, тестов продукции на животных и критичных компонентов в составах, оказывающих воздействие на окружающую среду, животных и людей.</p>
        <p>Наша команда занимается образованием в сфере веганства и экологии:</p>
        <p>- мы читаем лекции,</p>
        <p>- ведем образовательные рубрики в соц.сетях,</p>
        <p>- записываем подкаст</p>
      </div>
    </main>
  )
};