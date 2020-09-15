import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import CartIcon from '../../components/CartIcon/CartIcon';
import LinkButton from '../../components/LinkButton/LinkButton';
import PromoItems from '../../components/PromoItems/PromoItems';

import classes from './MainPageHeader.module.css'

export default (props) => {
  return (
    <div className={classes.header}>
      <div className={`container`}>
        <Navigation/>
        <HeaderSlider/>
        <div className={classes.header__group}>
          <CartIcon/>
          <LinkButton/>
          <PromoItems/>
        </div>
      </div>
    </div>
  );
};
