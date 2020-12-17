import React, {useContext, useEffect, useState} from 'react';
import PagesContext from "../../pages/PagesContext";
import classes from "./ActiveItemModal.module.css"
import {compact, isEqual} from "lodash";

export default (props: any) => {

  const catalogueContext = useContext(PagesContext);

  const activeItem = catalogueContext?.activeItem;
  const cartItems = catalogueContext?.cartItems;

  const [currentCount, setCurrentCount] = useState(0)

  useEffect(() => {
    const newCount = compact(
      cartItems?.map((cartItem) => {
        if (isEqual(cartItem.item.selectedVolume, activeItem?.selectedVolume)
          && cartItem.item.item.name === activeItem?.item.name) {
          return cartItem.count;
        }
      })
    )[0]
    newCount ? setCurrentCount(newCount) : setCurrentCount(0);
  })

  return (
    <div className={classes.ActiveItemModal}>
      <div className={classes.window}>
        <div className={classes.holder}>
          <div className={classes.column}>
            <h3 className={classes.subtitle}>{activeItem?.item?.type}</h3>
            <h2 className={classes.title}>{activeItem?.item?.name}</h2>
          </div>
          <img src={require('../../images/icons/cross_black.svg')}
               alt=""
               onClick={() => catalogueContext?.selectActiveItem(null)}
               className={classes.close}
          />
        </div>
        <div className={classes.holder}>
          <div className={classes.column}>
            <ul className={classes.volumes}>
              {
                activeItem?.item.volumes.map((volume, index) => {
                  return (
                    <li key={index}
                        className={activeItem?.selectedVolume === volume ? classes.volume_active : classes.volume}
                        onClick={() => {catalogueContext?.changeActiveVolume(volume)}}
                    >
                      {volume.volume}
                    </li>
                  )
                })
              }
            </ul>
            <div className={classes.cover}
                 style={{backgroundImage: `url(${activeItem?.item.cover})`}}
            />
          </div>
          <div className={classes.column}>
            <h2 className={classes.title}>{activeItem?.selectedVolume.price1} руб</h2>
            <span className={classes.type}>-10% за 1 шт при покупке 3 шт</span>
            <div className={classes.add}>
              <h3 className={classes.add_title}>Добавить в корзину</h3>
              <div className={classes.count}>
                <button className={classes.counter}
                        onClick={() => activeItem && catalogueContext?.removeItemFromCart(activeItem, 1)}
                >
                  <img src={require('../../images/icons/minus_pink.svg')} alt=""/>
                </button>
                {currentCount || 0}
                <button className={classes.counter}
                        onClick={() => activeItem && catalogueContext?.addItemToCart(activeItem)}
                >
                  <img src={require('../../images/icons/plus_pink.svg')} alt=""/>
                </button>
              </div>
            </div>
            <div className={classes.text_block}>
              <p className={classes.text}>Описание: <br/> {activeItem?.item.description}</p>
              <p className={classes.text}>Состав: <br/> {activeItem?.item.composition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};