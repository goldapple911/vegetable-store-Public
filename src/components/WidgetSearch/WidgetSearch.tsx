import React, { useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { mainPageStore } from '../../store';

import classes from './WidgetSearch.module.css'

const WidgetSearch = observer(() => {

 const currentShops = toJS(mainPageStore).currentShops;

 const [filteredShops, setFilteredShops] = useState(['']);
 const [selectedShop, setSelectedShop] = useState('');

 const handleSelectShop = (e: any) => {
   setSelectedShop(e.target.value);
   if (currentShops && e.target.value) {
     const newShopList = currentShops?.filter((item: string) => item.toLowerCase().includes(e.target.value.toLowerCase()))
     setFilteredShops(newShopList);
   } else {
     setFilteredShops([])
   }
 }

 return (
   <div className={classes.WidgetSearch}>
     <h2 className={classes.title}>Найди нас <br/> в своем городе</h2>
     <div className={classes.search_container}>
       <label
         htmlFor="search"
         className={classes.search_icon}
       />
       <input
         id="search"
         type="text"
         className={classes.input}
         value={selectedShop}
         placeholder="Введите город"
         onChange={(e) => {
                handleSelectShop(e)
         }}
       />
     </div>
     <ul className={classes.list}>
       {filteredShops[0] && filteredShops?.map((item, index) =>
         <li
           key={index}
           className={classes.item}
         >
           {item}
         </li>
       )}
     </ul>
   </div>
  )
});

export { WidgetSearch };