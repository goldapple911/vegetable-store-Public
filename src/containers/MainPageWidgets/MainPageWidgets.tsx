import React from 'react';
import classes from './MainPageWidgets.module.css';
import { WidgetSearch } from '../../components';

export default () => (
  <section className={classes.MainPageWidgets}>
    <div className="container">
      <div className={classes.container}>
        <div className={classes.holder}>
          <h2 className={classes.title}>О проекте</h2>
          <p className={classes.text}>
            Дом Солнце - Уральский бренд веганской уходовой косметики. Все компоненты нашей косметики - безопасны для природы.
            Мы не тестируем продукцию на животных. В наших составах вы не найдете продукты эксплуатации животных.
            Зато найдете нежность, любовь и вдохновение! Мы с радостью расскажем вам о том, что такое веганство,
            почему важно заботится о здоровье планеты и как жить экологично.
          </p>
        </div>
        <img
          className={classes.logo}
          src={require('../../images/widgets/logo.png')}
          alt=""
        />
      </div>
      <div className={classes.container}>
        <div className={classes.holder}>
          <h2 className={classes.title}>Наши подкасты </h2>
          <p className={classes.text}>
            Первый в России подкаст о веганстве. Мы рассуждаем о вопросах экологии, социальной справедливости,
            рассказываем о правах животных. Мы говорим о серьезных вещах, но не забываем шутить.
            К нам часто приходят гости, среди которых можете быть и вы! Услышимся)
          </p>
        </div>
        <a
          href="https://podcasts.apple.com/ru/podcast/%D0%B4%D0%BE%D0%BC-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5/id1507391265"
          className={classes.podcasts}
        />
      </div>
      <WidgetSearch />
    </div>
  </section>
);
