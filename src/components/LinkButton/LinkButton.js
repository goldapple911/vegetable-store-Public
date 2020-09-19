import React from 'react';
import {Link} from "react-router-dom";
import classes from './LinkButton.module.css';


export default (props) => {

  const styles = {
    background: props.background,
  };

  return (
    <Link to='/' style={styles} className={classes.link} >
      {props.text}
    </Link>
  );
};