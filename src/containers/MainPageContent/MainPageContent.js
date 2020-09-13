import React from 'react';
import classes from './MainPageContent.module.css';

import ScrollButton from '../../components/ScrollButton/ScrollButton';
import PromoCarusel from '../../components/PromoCarusel/PromoCarusel';
import LinkButton from '../../components/LinkButton/LinkButton';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import { Link } from 'react-router-dom';

const mainPageContent = () => {
  return (
    <main className={`container ${classes.MainPageContent}`}>
      <div className={classes.generator__container}>
        Заглушка для генератора подарков
      </div>
      
      <LinkButton title='Перейти в каталог' />


    </main>
  );
};

export default mainPageContent;