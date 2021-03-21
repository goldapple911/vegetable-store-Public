import React, { useState, useContext } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { without, compact, get } from 'lodash'
import PagesContext from '../../pages/PagesContext';
import { catalogueStore } from '../../store';

import classes from './CatalogueOptions.module.css';

const CatalogueOptions = observer(() => {
  const catalogue = toJS(catalogueStore).catalogue;

  let catalogueMaxPrice

  if (catalogue) {
    const catalogueItems = Object.keys(catalogue).map((category: any) => {
      // @ts-ignore
      return catalogue[category];
    }).flat();
    const cataloguePrices = compact(catalogueItems.map((item: any) => {
      return item.volumes.map((volume: any) => {
        return volume.price1;
      })
    }).flat())
    catalogueMaxPrice = Math.max.apply(null, cataloguePrices)
  }

  const initialFilters = {
    name: '',
    minPrice: 0,
    maxPrice: Number(catalogueMaxPrice),
    filters: [''],
  }

  const [currentFilters, setCurrentFilters] = useState(initialFilters);
  
  const catalogueCategories = toJS(catalogueStore).catalogueCategories

  const findMatchingItems = (e: any) => {
    e.preventDefault();
    catalogueStore.findMatchingItems(currentFilters);
  }

  const itemsList = catalogueCategories?.map((item: any, index: number) => {
    return (
      <li
        className={classes.option}
        key={index}
      >
        <input
          type="checkbox"
          className={classes.checkbox}
          id={`categoryOption${index}`}
          onChange={() => {
                 let newFilters = [...currentFilters?.filters];
                 if(currentFilters?.filters?.includes(item?.id)) {
                   newFilters = without(newFilters, `${item?.id}`)
                 } else {
                   newFilters?.push(item?.id);
                 }
                 setCurrentFilters({
                   ...currentFilters,
                   filters: compact(newFilters),
                 });
          }}
        />
        <label
          className={classes.label}
          htmlFor={`categoryOption${index}`}
        >
          {item?.name}
        </label>
      </li>
    )
  })

  return (
    <form
      className={classes.CatalogueOptions}
      onSubmit={(e: any) => {findMatchingItems(e)}}
    >
      <div className={classes.input}>
        <label
          htmlFor="optionsInput"
          className={classes.input_icon}
        >
          <img
            src={require('../../images/icons/search (2).svg')}
            alt=""
          />
        </label>
        <input
          type="text" 
          className={classes.input_field}
          id="optionsInput"
          placeholder="Поиск"
        />
      </div>
      <h3 className={classes.subtitle}>Стоимость</h3>
      <div className={classes.price}>
        <input
          type="text"
          placeholder="0"
          className={classes.price_input}
          value={currentFilters.minPrice}
          onChange={(e) => {
                 !e.target.value
                  ? setCurrentFilters({
                     ...currentFilters,
                     minPrice: 0,
                   })
                  : get(e.target.value.match(/^[0-9]+/), '[0].length') === e.target.value?.length &&
                    Number(e.target.value) <= currentFilters.maxPrice &&
                    setCurrentFilters({
                      ...currentFilters,
                      minPrice: Number(e.target.value),
                    });
          }}
        />
        <img
          src={require('../../images/icons/dash.svg')}
          alt=""
        />
        <input
          type="text"
          placeholder={String(catalogueMaxPrice)}
          className={classes.price_input}
          value={currentFilters.maxPrice ? String(currentFilters.maxPrice) : ''}
          onChange={(e) => {
                 !e.target.value
                   ? setCurrentFilters({
                     ...currentFilters,
                     maxPrice: 0,
                   })
                   : get(e.target.value.match(/^[0-9]+/), '[0].length') === e.target.value?.length &&
                   setCurrentFilters({
                     ...currentFilters,
                     maxPrice: Number(e.target.value),
                   });
          }}
        />
      </div>
      <ul className={classes.list}>
        {itemsList}
      </ul>
      <button
        className={classes.submit}
        type="submit"
      >Поиск</button>
    </form>
  )
});

export { CatalogueOptions };