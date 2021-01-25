import React from 'react';
import classes from './MainPageContent.module.css';
import {
  PromoCarusel,
  LinkButton,
  TeamInfo,
} from "../../components"

export default () => {

  return (
    <main className={classes.MainPageContent}>
      <div className={'container'}>
        <p className={classes.text}>Мы поможем вам собрать эко-подарок для самых разных людей! С помощью нескольких фильтров мы вместе составим идеальный набор для конкретного человека</p>

        <div className={classes.generator_container}>
          {/*<LinkButton*/}
          {/*  className={`${classes.link_button} ${classes.link_button__generator}`}*/}
          {/*  title="Собрать подарок"*/}
          {/*  text={'Собрать подарок'}*/}
          {/*/>*/}
        </div>

        <div className={classes.promocarusel_container}>
          <PromoCarusel />
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
  )
};