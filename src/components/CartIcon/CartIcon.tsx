import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { cartStore } from '../../store';

import classes from './CartIcon.module.css';

const CartIcon = observer((props: any) => {
  const {
    customMargin
  } = props;

  const cartItems = toJS(cartStore).cartItems;

  let numberOfItems = 0;
  cartItems?.map((item) => {
    numberOfItems += item.count;
  })

  return (
    <div
      style={{ margin: customMargin }}
      className={classes.CartIcon}
    >
      <Link
        to="/cart"
        className={classes.cart}
      >
        <img
          src={require('../../images/icons/bag.svg')}
          alt=""
        />
      </Link>
      {numberOfItems > 0 && <div className={classes.count}>{numberOfItems}</div>}
    </div>
  );
});

export { CartIcon };