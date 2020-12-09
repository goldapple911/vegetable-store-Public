import React from 'react';
import { CatalogueItemCard } from "../../components"
import classes from "./CatalogueItems.module.css";

export default (props: any) => {

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