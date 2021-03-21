import React, { useContext } from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import PagesContext from '../../pages/PagesContext';

export default () => {

  const footerContext = useContext(PagesContext);

  const currentPages = footerContext?.currentPages;

  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={classes.holder}>
          <nav className={classes.navigation}>
            <h4 className={classes.subtitle}>Дом солнца</h4>
            <ul className={classes.list}>
              {currentPages?.map((page, index) => {
                return (
                  <Link
                    to={page.href}
                    className={classes.link}
                    key={index}
                  >
                    <li
                      className={classes.text}
                    >
                      {page.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
          <div className={classes.social}>
            <a
              href="https://vk.com/domsolnce"
              className={classes.social_link}
            >
              <img
                src={require('../../images/icons/vk.png')}
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/dom_solnce/?igshid=131xtkarj7d1d"
              className={classes.social_link}
            >
              <img
                src={require('../../images/icons/instagram.png')}
                alt=""
              />
            </a>
          </div>
          <div className={classes.text}>
            Остались вопросы?
            <br/>
            Пишите нам на почту
            <br/>
            <br/>
            solncedom86@gmail.com
          </div>
        </div>
      </div>
    </footer>
  )
}