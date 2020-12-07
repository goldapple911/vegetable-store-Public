import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import classes from "./HeaderPromoItems.module.css";
import PagesContext from '../../pages/PagesContext';

export default (props: any) => {
  const promoContext = useContext(PagesContext);
  const items = promoContext?.currentPromo;

  const listItems = items?.map((item, id) => {
    return (
      <li key={id} className={classes.promo__item} >
        <Link to='/' className={classes.promo__link} style={{backgroundImage: 'url(' + item?.cover + ')'}}>
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
    )
  });

  return (
    <ul className={classes.promo}>
      {listItems}
    </ul>
  );
};