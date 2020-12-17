import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";
import PagesContext from '../../pages/PagesContext';
import cn from 'classnames';


export default (props: any) => {

  const {
    customMargin
  } = props;

  const navContext = useContext(PagesContext);

  const currentPages = navContext?.currentPages;

  let navigationWindowClass;

  if (navContext?.navigationClosed) {
    navigationWindowClass = cn(classes.window, classes.close);
  } else {
    navigationWindowClass = cn(classes.window, classes.open);
  }

  return (
    <nav
         style={{margin: customMargin}}
         className={classes.Navigation}
    >
      <img className={classes.hamburger}
           src={require('../../images/icons/hamburger.svg')}
           alt=""
           onClick={navContext?.toggleNavigation}
      />
      <div className={navigationWindowClass}>
        <img className={classes.cross}
             src={require('../../images/icons/cross.svg')}
             alt=""
             onClick={navContext?.toggleNavigation}/>
        <ul className={classes.list}>
          {currentPages?.map((page, index) => {
            return (
              <Link to={page.href}
                    className={classes.link}
                    key={index}
              >
                <li className={classes.text}
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