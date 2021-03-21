import React, { useContext } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { mainPageStore } from '../../store';
import PagesContext from '../../pages/PagesContext';
import {TeamMember} from "../../interfaces";

import classes from './TeamInfo.module.css';

const TeamInfo = observer(() => {

  const teamContext = useContext(PagesContext);

  const teamList = toJS(mainPageStore).teamList;

  return (
    <div className={classes.TeamInfo}>
      <div className="container">
        <h2 className={classes.title}>Команда</h2>
        <ul className={classes.list}>
          {
            teamList?.map((item: TeamMember, index: number) =>
              <li
                key={index}
                className={classes.item}
              >
                <div className={classes.container}>
                  <img
                    src={item.photo}
                    alt=""
                  />
                </div>
                <h4 className={classes.name}>{item.name}</h4>
              </li>
            )
          }
          <img
            className={classes.circle_right}
            style={{ transform: `rotate(${teamContext?.headerCircleRotation}deg)` }}
            src={require('../../images/backgrounds/eco_product_circle_white.png')}
            alt=""
          />
          <img
            className={classes.circle_left}
            style={{ transform: `rotate(${teamContext?.headerCircleRotation}deg)` }}
            src={require('../../images/backgrounds/eco_product_circle_white.png')}
            alt=""
          />
        </ul>
      </div>
    </div>
  );
});

export { TeamInfo };