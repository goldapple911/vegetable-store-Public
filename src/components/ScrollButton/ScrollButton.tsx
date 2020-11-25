import React, {useContext} from 'react';
import classes from './ScrollButton.module.css'
import MainPageContext from "../../pages/MainPage/MainPageContext";

export default (props: any) => {
  const scrollButtonContext = useContext(MainPageContext);

  return (
    <button className={classes.ScrollButton} onClick={scrollButtonContext.toggleScrollTop}>
      <img src={require('../../images/icons/arrow.svg')} alt=""/>
    </button>
  );
}
