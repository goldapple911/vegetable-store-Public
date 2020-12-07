import React, {useContext, useEffect, useState} from 'react';
import classes from './CataloguePageContent.module.css';
import {
  Navigation,
  CartIcon,
  CatalogueOptions,
  LinkButton,
  CatalogueItems,
  CatalogueMenu,
  ActiveItemModal,
} from "../../components"

import PagesContext from '../../pages/PagesContext';

export default () => {

  const catalogueContext = useContext(PagesContext);

  const selectedPage = catalogueContext?.selectedCataloguePage;
  const catalogue = catalogueContext?.catalogue;
  const activeItem = catalogueContext?.activeItem;

  let currentItems;

  if (catalogue && selectedPage) {
    // @ts-ignore
    currentItems = catalogue[selectedPage]
  }

  return (
    <main className={classes.CataloguePageContent}>
      <div className={"container"}>
        <div className={classes.holder}>
          <Navigation/>
          <CartIcon/>
        </div>
        <div className={classes.holder}>
          <div className={classes.options}>
            <CatalogueOptions
              currentItems={catalogueContext?.catalogueCategories}
            />
            <LinkButton/>
          </div>
          {
            currentItems
              ? <CatalogueItems currentItems={currentItems}/>
              : <CatalogueMenu/>
          }
        </div>
      </div>
      {
        activeItem?.item?.name && <ActiveItemModal/>
      }
    </main>
  )
};