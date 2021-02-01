import React from 'react';
import classes from './DeliveryPageContent.module.css';
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
        <h1 className={classes.title}>Оплата и доставка</h1>
        <p>1) Оплата осуществляется банковской картой (Мир, MasterCard, Visa)</p>
        <p>2) Доставка</p>
        <p>Доставка по России:</p>
        <ol>
          <li>Транспортной компанией СДЭК:</li>
        </ol>
        <p>&nbsp;- курьером СДЭК до указанного вами адреса;</p>
        <p>- до пункта выдачи СДЭК.</p>
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
          <li>Курьерская - 350 p.</li>
          <li>Бесплатно от 3000 р.</li>
        </ul>
        <p>&nbsp;</p>
        <ol start={2}>
          <li>По России:</li>
        </ol>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp; До пункта выдачи и курьерская. Стоимость доставки рассчитывается автоматически и зависит от города получателя.</p>
        <p>-&nbsp;&nbsp;&nbsp;&nbsp; Бесплатно от 3000 р.</p>
        <p>&nbsp;</p>
        <ol start={3}>
          <li>В страны СНГ - 650 р.</li>
        </ol>
        <p>Бесплатно от 6000 р.</p>
        <p>&nbsp;</p>
        <ol start={4}>
          <li>По миру - 850 p.</li>
        </ol>
        <p>Бесплатно от 8000 р.</p>
      </div>
    </main>
  )
};