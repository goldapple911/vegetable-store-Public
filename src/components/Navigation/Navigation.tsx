import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";
import PagesContext from '../../pages/PagesContext';
import cn from 'classnames';


export default (props: any) => {
  const navContext = useContext(PagesContext);

  const currentPages = navContext?.currentPages;

  let navigationWindowClass;

  if (navContext?.navigationClosed) {
    navigationWindowClass = cn(classes.navigation__window, classes.navigation__close);
  } else {
    navigationWindowClass = cn(classes.navigation__window, classes.navigation__open);
  }

  return (
    <nav className={classes.navigation}>
      <img className={classes.navigation__hamburger}
           src={require('../../images/icons/hamburger.svg')}
           alt=""
           onClick={navContext?.toggleNavigation}
      />
      <div className={navigationWindowClass}>
        <img className={classes.navigation__cross}
             src={require('../../images/icons/cross.svg')}
             alt=""
             onClick={navContext?.toggleNavigation}/>
        <ul className={classes.navigation__list}>
          {currentPages?.map((page, index) => {
            return (
              <Link to={page.href}
                    className={classes.navigation__link}
                    key={index}
              >
                <li className={classes.navigation__text}
                    onClick={navContext?.toggleNavigation}
                >
                  {page.name}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
};