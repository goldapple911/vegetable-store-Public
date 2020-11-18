import React from 'react';
import classes from "./Footer.module.css";
import {Link} from "react-router-dom";

export default () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={classes.holder}>
          <nav className={classes.navigation}>
            <h4 className={classes.subtitle}>Дом солнца</h4>
            <ul className={classes.list}>
              <Link to='/' className={classes.link}>
                <li className={classes.text}>Каталог</li>
              </Link>
              <Link to='/' className={classes.link}>
                <li className={classes.text}>О проекте</li>
              </Link>
              <Link to='/' className={classes.link}>
                <li className={classes.text}>Карзина</li>
              </Link>
              <Link to='/' className={classes.link}>
                <li className={classes.text}>Главная</li>
              </Link>
            </ul>

          </nav>
          <div className={classes.social}>
            <a href="#" className={classes.social_link}>
              <img src={require('../../images/icons/vk.png')} alt=""/>
            </a>
            <a href="#" className={classes.social_link}>
              <img src={require('../../images/icons/instagram.png')} alt=""/>
            </a>
          </div>
          <div className={classes.text}>
            Остались вопросы?
            <br/>
            Пишите нам на почту
            <br/>
            <br/>
            domsolnca@yandex.ru
          </div>
        </div>
      </div>
    </footer>
  )
}