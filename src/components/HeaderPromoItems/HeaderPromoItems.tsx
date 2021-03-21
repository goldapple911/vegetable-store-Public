import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { mainPageStore } from '../../store';
import { PromoItem } from '../../interfaces';
import { Link } from 'react-router-dom'

import classes from './HeaderPromoItems.module.css';

const HeaderPromoItems = observer(() => {
  const currentPromo: PromoItem[] = toJS(mainPageStore).currentPromo;

  const listItems = currentPromo?.map((item: PromoItem, id: number) => {
    return (
      <li
        key={id}
        className={classes.promo__item}
      >
        <div className={classes.promo__container}>
          <Link
            to="/catalogue"
            className={classes.promo__link}
            style={{ backgroundImage: 'url(' + item?.cover + ')' }}
          >
            <div className={classes.promo__buy}>
              <div className={classes.promo__icon}>
                <img
                  src={require('../../images/icons/cart.svg')}
                  alt=""
                />
              </div>
              Купить
            </div>
          </Link>
        </div>
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
});

export { HeaderPromoItems };