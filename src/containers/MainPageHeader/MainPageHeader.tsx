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
    <div className={classes.MainPageHeader}>
      <div className={'container'}>
        <div className={classes.holder}>
          <div className={classes.group}>
            <Navigation customMargin='30px 21px 0'/>
            <HeaderSlider/>
          </div>
          <div className={classes.column}>
            <div className={classes.title}>
              <img className={classes.circle}
                   style={{transform: `rotate(${headerContext?.headerCircleRotation}deg)`}}
                   src={require('../../images/backgrounds/eco-product-circle.png')}
                   alt=""
              />
              <span className={classes.vegan}>Vegan</span>
            </div>
            <CartIcon customMargin='29px 12px 33px 0'/>
            <LinkButton class="link_header"
                        text="Каталог"
                        href="/catalogue"
            />
            <HeaderPromoItems/>
          </div>
        </div>
      </div>
    </div>
  );
};
