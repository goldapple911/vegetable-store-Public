import React, {useContext, useEffect, useState} from 'react';

import classes from './CataloguePageContent.module.css';
import Navigation from "../../components/Navigation/Navigation";
import CartIcon from "../../components/CartIcon/CartIcon";
import CatalogueOptions from "../../components/CatalogueOptions/CatalogueOptions";
import LinkButton from "../../components/LinkButton/LinkButton";
import PagesContext from '../../pages/PagesContext';
import CatalogueItems from "../../components/CatalogueItems/CatalogueItems";
import CatalogueMenu from "../../components/CatalogueMenu/CatalogueMenu";

export default () => {

  const catalogueContext = useContext(PagesContext);

  const selectedPage = catalogueContext?.selectedCataloguePage;

  const catalogue = catalogueContext?.catalogue;

  // let currentItems: any;

  // switch (selectedPage) {
  //   case "forHair":
  //     currentItems = [{}];
  //     break;
  //   case "forBody":
  //     currentItems = [{}];
  //     break;
  //   case "forFace":
  //     currentItems = [{}];
  //     break;
  //   case "relatedProducts":
  //     currentItems = [{}];
  //     break;
  //   case "zeroWaste":
  //     currentItems = [{}];
  //     break;
  //   case "forHome":
  //     currentItems = [{}];
  //     break;
  //   default:
  //     currentItems = catalogueContext.catalogueCategories;
  //     break;
  // }

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
            selectedPage
              ? <CatalogueItems/>
              : <CatalogueMenu/>
          }
        </div>
      </div>
    </main>
  )
};