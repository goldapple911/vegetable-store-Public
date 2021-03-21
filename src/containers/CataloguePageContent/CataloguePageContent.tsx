import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { catalogueStore } from '../../store';
import {
  CatalogueOptions,
  LinkButton,
  CatalogueItems,
  CatalogueMenu,
  ActiveItemModal,
  Header,
} from '../../components'

import classes from './CataloguePageContent.module.css';

const CataloguePageContent = observer(() => {

  const selectedPage = toJS(catalogueStore).selectedCataloguePage;
  const catalogue: any = toJS(catalogueStore).catalogue;
  const activeItem = toJS(catalogueStore).activeItem;
  const filteredCatalogueItems = toJS(catalogueStore).filteredCatalogueItems;

  let currentItems;

  if (catalogue && selectedPage) {
    currentItems = catalogue[selectedPage];
  }
  if (filteredCatalogueItems.length) {
    currentItems = filteredCatalogueItems;
  }

  return (
    <main className={classes.CataloguePageContent}>
      <div className="container">
        <Header/>
        <div className={classes.holder}>
          <div className={classes.column}>
            <CatalogueOptions/>
            <LinkButton
              href="/cart"
              text="Перейти в корзину"
              class="link_cart"
            />
            {currentItems &&
              <button
                className={classes.button}
                onClick={() => catalogueStore.selectCataloguePage('')}
              >
                Вернуться в каталог
              </button>}
          </div>
          <div className={classes.column}>
            <div className={classes.banner}/>
            {
              currentItems
                ? <CatalogueItems currentItems={currentItems}/>
                : <CatalogueMenu/>
            }
          </div>
        </div>
      </div>
      {
        //@ts-ignore
        activeItem?.item?.name && <ActiveItemModal/>
      }
    </main>
  )
});

export { CataloguePageContent }