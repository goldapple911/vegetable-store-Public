import React from 'react';
import classes from './MainPageWidgets.module.css'
import WidgetSearch from "../../components/WidgetSearch/WidgetSearch";

export default () => {
  return (
    <section className={classes.MainPageWidgets}>
      <div className="container">
        <WidgetSearch/>
      </div>
    </section>
  )
}