import React from 'react';
import classes from './MainPageContent.module.css';
import {
  PromoCarusel,
  LinkButton,
  TeamInfo,
} from '../../components';

export default () => (
  <main className={classes.MainPageContent}>
    <div className="container">
      <h2 className={classes.title}>
        Покупать больше — выгоднее!
      </h2>
      <p className={classes.text}>
        При покупке трёх одинаковых товаров — скидка 10%
      </p>
      <div className={classes.generator_container}>
        {/* <LinkButton */}
        {/*  className={`${classes.link_button} ${classes.link_button__generator}`} */}
        {/*  title="Собрать подарок" */}
        {/*  text={'Собрать подарок'} */}
        {/* /> */}
      </div>
      <div className={classes.promocarusel_container}>
        <PromoCarusel/>
      </div>
      <div className={classes.holder}>
        <LinkButton
          class="link_content"
          text="Показать больше товаров"
          href="/catalogue"
        />
      </div>
    </div>
    <TeamInfo/>
  </main>
);
