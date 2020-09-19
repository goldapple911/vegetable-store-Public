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
      <div className={'container'}>
        <div className={classes.header__holder}>
          <div className={classes.header__group}>
            <Navigation/>
            <HeaderSlider/>
          </div>
          <div className={classes.header__column}>
            <CartIcon/>
            <LinkButton background={'#F7C3D5'} text={'Каталог'}/>
            <PromoItems/>
          </div>
        </div>
      </div>
    </div>
  );
};
