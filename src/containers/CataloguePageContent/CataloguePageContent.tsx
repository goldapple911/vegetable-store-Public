import React, {useContext, useEffect, useState} from 'react';

import classes from './CataloguePageContent.module.css';
import Navigation from "../../components/Navigation/Navigation";
import CartIcon from "../../components/CartIcon/CartIcon";
import CatalogueOptions from "../../components/CatalogueOptions/CatalogueOptions";
import LinkButton from "../../components/LinkButton/LinkButton";
import PagesContext from '../../pages/PagesContext';
import CatalogueItems from "../../components/CatalogueItems/CatalogueItems";
import CatalogueMenu from "../../components/CatalogueMenu/CatalogueMenu";
import ActiveItemModal from "../../components/ActiveItemModal/ActiveItemModal";

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
        activeItem?.name && <ActiveItemModal/>
      }
    </main>
  )
};