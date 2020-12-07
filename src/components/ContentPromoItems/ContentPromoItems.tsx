import React, { useContext } from 'react';
import classes from './ContentPromoItems.module.css';
import PagesContext from '../../pages/PagesContext';
import { Link } from 'react-router-dom';

export default () => {
  const promoContext = useContext(PagesContext);

  const items = promoContext?.contentPromo;
  const listItems = items?.map((item) =>
      <li key={item.name} className={classes.promo__item}>
        <Link to='/' className={classes.promo__link}>
          <img className={classes.promo__cover} src={item.cover} alt=""/>
          <div className={classes.promo__buy}>
            <div className={classes.promo__icon}>
              <img src={require('../../images/icons/cart.svg')} alt=""/>
            </div>
            Купить
          </div>
        </Link>
        <div className={classes.promo__description}>
          <h3 className={classes.promo__name}>{item.name}</h3>
          <span className={classes.promo__price}>{item.price}</span>
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