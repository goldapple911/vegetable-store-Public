import React from 'react';
import { Link } from "react-router-dom";
import classes from './LinkButton.module.css';


export default (props) => {
  return (
    <Link to='/' className={`${classes.link} ${props.className}`} >
      {props.text}
    </Link>
  );
};