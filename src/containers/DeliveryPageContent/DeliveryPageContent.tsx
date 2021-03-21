import React from 'react';
import classes from './DeliveryPageContent.module.css';
import { Header } from '../../components';

export default () => (
  <main className={classes.CataloguePageContent}>
    <div className="container">
      <Header />
      <h1 className={classes.title}>Оплата и доставка</h1>
      <p>1) Оплата осуществляется банковской картой (Мир, MasterCard, Visa)</p>
      <p>2) Доставка</p>
      <p>Доставка по России:</p>
      <ol>
        <li>Транспортной компанией СДЭК:</li>
      </ol>
      <ul>
        <li>Курьером СДЭК до указанного вами адреса;</li>
        <li>До пункта выдачи СДЭК</li>
      </ul>
      <ol start={2}>
        <li>Почтой России.</li>
      </ol>
      <p>В страны СНГ и по миру мы отправляем Почтой России.</p>
      <p>Стоимость доставки:</p>
      <ol>
        <li>По Екатеринбургу:</li>
      </ol>
      <ul>
        <li>До пункта выдачи &ndash; бесплатно (Адрес - Тургенева,15 кофейня &laquo;May be cup&raquo;) ;</li>
        <li>Курьерская - рассчитывается индивидуально по тарифам компании СДЭК.</li>
        <li>Бесплатно от 3000 р.</li>
      </ul>
      <ol start={2}>
        <li>По России:</li>
      </ol>
      <ul>
        <li>До пункта выдачи - 300 р.;</li>
        <li>Курьерская - 350 p.</li>
        <li>Бесплатно от 3000 р.</li>
      </ul>
      <ol start={3}>
        <li>В страны СНГ - 650 р. Бесплатно от 6000 р.</li>
      </ol>
      <ol start={4}>
        <li>По миру - 850 p. Бесплатно от 8000 р.</li>
      </ol>
    </div>
  </main>
);
