import React, {useContext} from 'react';
import PagesContext from "../../pages/PagesContext";
import classes from "./ActiveItemModal.module.css"

export default (props: any) => {

  const catalogueContext = useContext(PagesContext);

  const activeItem = catalogueContext?.activeItem;

  return (
    <div className={classes.ActiveItemModal}>
      <div className={classes.window}>
        <div className={classes.holder}>
          <h3 className={classes.subtitle}>{activeItem?.item?.type}</h3>
          <div onClick={() => catalogueContext?.selectActiveItem(null)}>
            X
          </div>
        </div>
        <h2 className={classes.title}>{activeItem?.item?.name}</h2>
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
            <div className={classes.cover}>
              {activeItem?.item.cover}
            </div>
          </div>
        </div>
        <div className={classes.holder}>
          <div className={classes.column}>
            <h2 className={classes.title}>{activeItem?.selectedVolume.price1}</h2>
            <div className={classes.text_block}>
              <p className={classes.text}>{activeItem?.item.description}</p>
              <p className={classes.text}>{activeItem?.item.composition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};