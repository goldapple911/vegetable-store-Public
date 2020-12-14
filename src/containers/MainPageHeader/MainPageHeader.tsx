import React, {useContext, useEffect} from 'react';
import {
  Navigation,
  HeaderSlider,
  CartIcon,
  LinkButton,
  HeaderPromoItems,
} from "../../components"
import PagesContext from "../../pages/PagesContext";
import classes from './MainPageHeader.module.css'

export default (props: any) => {

  const headerContext = useContext(PagesContext);

  useEffect(() => {
    if (headerContext) {
      window.addEventListener('scroll', headerContext.rotateHeaderCircle);
    }
  });

  return (
    <div className={classes.header}>
      <div className={'container'}>
        <div className={classes.header__holder}>
          <div className={classes.header__group}>
            <Navigation customMargin='30px 21px 0'/>
            <HeaderSlider/>
          </div>
          <div className={classes.header__column}>
            <div className={classes.header__title}>
              <img className={classes.header__circle}
                   style={{transform: `rotate(${headerContext?.headerCircleRotation}deg)`}}
                   src={require('../../images/backgrounds/eco-product-circle.png')}
                   alt=""
              />
              <span className={classes.header__vegan}>Vegan</span>
            </div>
            <CartIcon customMargin='29px 12px 33px 0'/>
            <LinkButton className={classes.header__link} text={'Каталог'}/>
            <HeaderPromoItems/>
          </div>
        </div>
      </div>
    </div>
  );
};
