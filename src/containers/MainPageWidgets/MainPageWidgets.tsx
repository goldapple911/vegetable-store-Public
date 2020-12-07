import React from 'react';
import classes from './MainPageWidgets.module.css'
import { WidgetSearch } from "../../components";

export default () => {
  return (
    <section className={classes.MainPageWidgets}>
      <div className="container">
        <div className={classes.container}>
          <div className={classes.holder}>
            <h2 className={classes.title}>О проекте</h2>
            <p className={classes.text}>
              Рассказываем об экологии и веганстве и как правильно сортировать мусор.
              Мы создаем экопродукцикцию для жизни, помогаем подобрать альтернативные средства гигиены.
            </p>
          </div>
          <img className={classes.logo} src={require('../../images/widgets/logo.png')} alt=""/>
        </div>
        <div className={classes.container}>
          <div className={classes.holder}>
            <h2 className={classes.title}>Наши подкасты </h2>
            <p className={classes.text}>
              Первый в России подкаст о веганстве.
              Мы обсуждаем вопросы экологии, делимся опытом в практиах йоги, рассказываем о наших веганских секретах
            </p>
          </div>
          <div className={classes.podcasts}/>
        </div>
        <WidgetSearch/>
      </div>
    </section>
  )
}