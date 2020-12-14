import React, {useContext, useState} from 'react';
import classes from "./CartItemCard.module.css";
import PagesContext from '../../pages/PagesContext';


export default (props: any) => {

  const {
    cartItem
  } = props

  const cartContext = useContext(PagesContext);

  const item = cartItem.item;

  let itemCost = 0;
  let item3Count = 0;

  for (let i = cartItem.count; i/3 >= 1; i -= 3) {
    item3Count += 1;
  }

  const item1Count = cartItem.count - item3Count * 3;
  itemCost = item3Count * item.selectedVolume.price3 + item1Count * item.selectedVolume.price1

  return (
    <li className={classes.CatalogueItemCard}
    >
      <div className={classes.holder}>
        <div className={classes.cover}
             style={{backgroundImage: 'url(' + item?.item?.cover + ')'}}
        />
        <div className={classes.column}
             style={{alignItems: "flex-start"}}
        >
          <div className={classes.column}
               style={{alignItems: "flex-start", margin: 0}}
          >
            <h3 className={classes.title}>{item?.item?.name}</h3>
            <span className={classes.description}>{item?.selectedVolume?.volume}</span>
          </div>
          <div className={classes.holder}>
            <button className={classes.paginator}
                    onClick={() => cartContext?.removeItemFromCart(item, 1)}
            >
              <img src={require('../../images/icons/minus.svg')} alt=""/>
            </button>
            <span className={classes.count}>
              {cartItem.count}
            </span>
            <button className={classes.paginator}
                    onClick={() => cartContext?.addItemToCart(item)}
            >
              <img src={require('../../images/icons/plus.svg')} alt=""/>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.column}
           style={{alignItems: "flex-end"}}
      >
        <div className={classes.cost}>
          <span className={classes.cost_value}>{itemCost}</span> &#8381;
        </div>
        <button className={classes.remove}
                onClick={() => cartContext?.removeItemFromCart(item, cartItem.count)}
        >
          <img src={require('../../images/icons/cross_white.svg')} alt=""/>
        </button>
      </div>
    </li>
  );
};