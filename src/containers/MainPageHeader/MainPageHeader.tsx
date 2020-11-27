import React, {useContext, useEffect, useRef} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import CartIcon from '../../components/CartIcon/CartIcon';
import LinkButton from '../../components/LinkButton/LinkButton';
import PromoItems from '../../components/HeaderPromoItems/HeaderPromoItems';
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
            <Navigation/>
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
            <CartIcon/>
            <LinkButton className={classes.header__link} text={'Каталог'}/>
            <PromoItems/>
          </div>
        </div>
      </div>
    </div>
  );
};
