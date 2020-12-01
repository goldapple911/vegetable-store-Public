import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import classes from "./CatalogueItems.module.css";
import PagesContext from '../../pages/PagesContext';

export default (props: any) => {

  const {
    currentItems
  } = props

  const productItems = currentItems.map((item: any, id: number) => {
    return (
      <li key={id} className={classes.item} >
        {item.name}
      </li>
    )
  });

  return (
    <ul className={classes.CatalogueItems}>
      {productItems}
    </ul>
  );
};