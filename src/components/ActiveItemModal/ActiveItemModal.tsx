import React from 'react';
import {Link} from "react-router-dom";
import classes from './ActiveItemModal.module.css'

export default (props: any) => {
  return (
    <Link to='/' className={classes.cart} >
      <img src={require('../../images/icons/bag.svg')} alt=""/>
    </Link>
  );
};