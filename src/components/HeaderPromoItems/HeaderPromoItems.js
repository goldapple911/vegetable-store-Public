import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import classes from "./HeaderPromoItems.module.css";
import MainPageContext from '../../pages/MainPage/MainPageContext';

export default (props) => {
  const promoContext = useContext(MainPageContext);

  const items = promoContext.currentPromo;
  const listItems = items.map((item) =>
      <li key={item.name} className={classes.promo__item}>
        <Link to='/' className={classes.promo__link}>
          <img className={classes.promo__cover} src={require(`../../images/items/${item.cover}`)} alt=""/>
          <div className={classes.promo__buy}>
            <div className={classes.promo__icon}>
              <img src={require('../../images/icons/cart.png')} alt=""/>
            </div>
            Купить
          </div>
        </Link>
        <div className={classes.promo__description}>
          <h3 className={classes.promo__name}>{item.name}</h3>
          <span className={classes.promo__price}>{item.price} руб</span>
        </div>
        <span className={classes.promo__volume}>{item.volume}</span>
      </li>
  );

  return (
    <ul className={classes.promo}>
      {listItems}
    </ul>
  );
};