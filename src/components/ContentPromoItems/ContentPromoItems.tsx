import React, { useContext } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { mainPageStore } from '../../store';
import PagesContext from '../../pages/PagesContext';
import { Link } from 'react-router-dom';
import {PromoItem} from "../../interfaces";

import classes from './ContentPromoItems.module.css';

const ContentPromoItems = observer(() => {
  const contentPromo: PromoItem[] = toJS(mainPageStore).contentPromo;

  const listItems = contentPromo?.map((item) =>
    <li
      key={item.name}
      className={classes.promo__item}
    >
      <div className={classes.promo__container}>
        <Link to="/catalogue">
          <div
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
          </div>
        </Link>
      </div>
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
});

export { ContentPromoItems };