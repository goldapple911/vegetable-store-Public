import React, {useContext} from 'react';
import classes from "./Navigation.css";
import MainPageContext from '../../pages/MainPage/MainPageContext'


export default (props) => {
  const navContext = useContext(MainPageContext);
  console.log(navContext.navigationClosed)
  return (
      <div className={classes.navigation}>{navContext.navigationClosed}</div>
  )
};