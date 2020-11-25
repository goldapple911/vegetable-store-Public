import React, {useContext} from 'react';
import classes from './ScrollButton.module.css'
import PagesContext from "../../pages/PagesContext";

export default (props: any) => {
  const scrollButtonContext = useContext(PagesContext);

  return (
    <button className={classes.ScrollButton} onClick={scrollButtonContext.toggleScrollTop}>
      <img src={require('../../images/icons/arrow.svg')} alt=""/>
    </button>
  );
}
