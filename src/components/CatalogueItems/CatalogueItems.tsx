import React, {useContext, useEffect, useState} from 'react';
import { CatalogueItemCard } from "../../components"
import classes from "./CatalogueItems.module.css";
import PagesContext from '../../pages/PagesContext';

export default (props: any) => {

  const catalogueContext = useContext(PagesContext);

  const {
    currentItems
  } = props

  const productItems = currentItems.map((item: any, id: number) => {
    return (
      <CatalogueItemCard item={item} key={id}/>
    )
  });

  return (
    <ul className={classes.CatalogueItems}>
      {productItems}
    </ul>
  );
};