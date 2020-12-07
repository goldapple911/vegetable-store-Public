import React, {useState, useContext} from 'react';
import classes from "./CatalogueOptions.module.css";
import {without, compact, get} from "lodash"
import PagesContext from "../../pages/PagesContext";

export default (props: any) => {

  const CatalogueContext = useContext(PagesContext);

  const catalogue = CatalogueContext?.catalogue;

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
    maxPrice: catalogueMaxPrice,
    filters: [''],
  }

  const [currentFilters, setCurrentFilters] = useState(initialFilters)

  const {
    currentItems
  } = props

  currentItems?.map((item: any) => {
    console.log(item)
  })

  const itemsList = currentItems?.map((item: any, index: number) => {
    return (
      <li key={index}>
        <input type="checkbox"
               onChange={() => {
                 let newFilters = [...currentFilters?.filters];
                 if(currentFilters?.filters?.includes(item?.name)) {
                   newFilters = without(newFilters, `${item.name}`)
                 } else {
                   newFilters?.push(item.name);
                 }
                 setCurrentFilters({
                   ...currentFilters,
                   filters: compact(newFilters),
                 });
               }}
        />
        {item?.name}
      </li>
    )
  })

  return (
    <div className={classes.CatalogueOptions}>
      <input type="text" className={classes.input}/>
      <div className={classes.price_search}>
        <input type="text"
               className={classes.price_input}
               value={currentFilters.minPrice }
               onChange={(e) => {
                 !e.target.value
                  ? setCurrentFilters({
                     ...currentFilters,
                     minPrice: 0,
                   })
                  : get(e.target.value.match(/^[0-9]+/), '[0].length') === e.target.value?.length &&
                    setCurrentFilters({
                      ...currentFilters,
                      minPrice: Number(e.target.value),
                    });
               }}
        />
        -
        <input type="text"
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
      <ul>
        {itemsList}
      </ul>
    </div>
  )
};