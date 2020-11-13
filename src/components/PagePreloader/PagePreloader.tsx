import React from "react";
import classes from "./PagePreloader.module.css";

export default () => {

  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};