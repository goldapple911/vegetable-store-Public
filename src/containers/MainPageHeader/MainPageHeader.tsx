import React, { useContext, useEffect } from 'react';
import PagesContext from '../../pages/PagesContext';
import {
  HeaderSlider,
  LinkButton,
  HeaderPromoItems,
  Header,
} from '../../components'

import classes from './MainPageHeader.module.css'

export default () => {

  const headerContext = useContext(PagesContext);

  useEffect(() => {
    if (headerContext) {
      window.addEventListener('scroll', headerContext.rotateHeaderCircle);
    }
  });

  return (
    <div className={classes.MainPageHeader}>
      <div className="container">
        <Header/>
        <div className={classes.holder}>
          <HeaderSlider/>
          <div className={classes.column}>
            <div className={classes.title}>
              <img
                className={classes.circle}
                style={{ transform: `rotate(${headerContext?.headerCircleRotation}deg)` }}
                src={require('../../images/backgrounds/eco-product-circle.png')}
                alt=""
              />
              <span className={classes.vegan}>Vegan</span>
            </div>
            <LinkButton
              class="link_header"
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
