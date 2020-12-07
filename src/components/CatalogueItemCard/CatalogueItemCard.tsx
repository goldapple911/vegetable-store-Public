import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import classes from "./CatalogueItemCard.module.css";
import PagesContext from '../../pages/PagesContext';
import { isEqual } from 'lodash'

export default (props: any) => {

  const {
    item
  } = props

  const [selectedVolume, setSelectedVolume] = useState(item.volumes[0])


  const catalogueContext = useContext(PagesContext);



  const volumes = item.volumes.map((volume: any, index: number) => {
    return (
      <li key={index}
          onClick={() => {setSelectedVolume(volume)}}
          className={isEqual(selectedVolume, volume) ? classes.volume_active : classes.volume}
      >
        {volume.volume}
      </li>
    )
  })

  return (
    <li className={classes.CatalogueItemCard}

    >
      <button onClick={() => catalogueContext?.selectActiveItem(item)}>/</button>
      {item.name}
      <button onClick={() => catalogueContext?.addItemToCart({item, selectedVolume})}>+</button>
      <button onClick={() => catalogueContext?.removeItemFromCart({item, selectedVolume})}>-</button>
      <ul>
        { volumes }
      </ul>

    </li>
  );
};