import React, {useContext} from 'react';
import classes from "./CatalogueMenu.module.css";
import PagesContext from '../../pages/PagesContext';

export default () => {
  const catalogueContext = useContext(PagesContext);
  const categories = catalogueContext?.catalogueCategories;

  const categoriesItems = categories?.map((item, id) => {
    return (
      <li key={id}
          className={classes.item}
          onClick={() => {catalogueContext?.selectCataloguePage(item.id)}}
      >
        {item.name}
        {item.id}
      </li>
    )
  });

  return (
    <ul className={classes.CatalogueMenu}>
      {categoriesItems}
    </ul>
  );
};