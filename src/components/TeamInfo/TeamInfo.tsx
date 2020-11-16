import React, {useContext} from 'react';
import classes from './TeamInfo.module.css';
import MainPageContext from "../../pages/MainPage/MainPageContext";

export default () => {

  const teamContext = useContext(MainPageContext);
  const teamList = teamContext?.teamList;

  return (
    <div className={classes.TeamInfo}>
      <div className={'container'}>
        <h2 className={classes.title}>Команда</h2>
        <ul className={classes.list}>
          {
            teamList?.map((item, index) =>
              <li key={index} className={classes.item}>
                <img src={item.photo} alt=""/>
                <h4 className={classes.name}>{item.name}</h4>
              </li>
            )
          }
          <img className={classes.circle_right}
               style={{transform: `rotate(${teamContext.headerCircleRotation}deg)`}}
               src={require('../../images/backgrounds/eco_product_circle_white.png')}
               alt=""
          />
          <img className={classes.circle_left}
               style={{transform: `rotate(${teamContext.headerCircleRotation}deg)`}}
               src={require('../../images/backgrounds/eco_product_circle_white.png')}
               alt=""
          />
        </ul>
      </div>
    </div>
  );
}