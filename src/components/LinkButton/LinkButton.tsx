import React from 'react';
import { Link } from "react-router-dom";
import classes from './LinkButton.module.css';


export default (props: any) => {
  return (
    <Link to={props.href} className={`${classes.link} ${classes[props.class]}`} >
      {props.text}
    </Link>
  );
};