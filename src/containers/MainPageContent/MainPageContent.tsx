import React, {useContext} from 'react';

import classes from './MainPageContent.module.css';
import PromoCarusel from '../../components/PromoCarusel/PromoCarusel';
import LinkButton from '../../components/LinkButton/LinkButton';
import TeamInfo from "../../components/TeamInfo/TeamInfo";

export default () => {

  return (
    <main className={classes.MainPageContent}>
      <div className={'container'}>
        <p className={classes.text}>Мы поможем вам собрать эко-подарок для самых разных людей! С помощью нескольких фильтров мы вместе составим идеальный набор для конкретного человека</p>

        <div className={classes.generator__container}>
          <LinkButton
            className={`${classes.link_button} ${classes.link_button__generator}`}
            title="Собрать подарок"
            text={'Собрать подарок'}
          />
        </div>

        <div className={classes.promocarusel_container}>
          <PromoCarusel />
        </div>
        <LinkButton
          className={classes.link_button}
          title="Перейти в каталог"
          text={'Перейти в каталог'}
        />
      </div>
      <TeamInfo/>
    </main>
  )
};