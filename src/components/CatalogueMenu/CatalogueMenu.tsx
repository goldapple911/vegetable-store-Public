import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { catalogueStore } from '../../store';
import { CatalogueCategory } from '../../interfaces';

import classes from './CatalogueMenu.module.css';

const CatalogueMenu = observer(() => {
  const categories: CatalogueCategory[] = toJS(catalogueStore).catalogueCategories;

  console.log(categories)

  const categoriesItems = categories?.map((item: CatalogueCategory, id: number) => {
    return (
      <li
        key={id}
        className={classes.item}
        onClick={() => catalogueStore.selectCataloguePage(item.id)}
        style={{ backgroundImage: `url(${item.cover})` }}
      >
        <div className={classes.title}>
          {item.name}
        </div>
      </li>
    )
  });

  return (
    <ul className={classes.CatalogueMenu}>
      {categoriesItems}
    </ul>
  );
});

export { CatalogueMenu };