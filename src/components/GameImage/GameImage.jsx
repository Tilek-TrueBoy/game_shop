import React from "react";
import classes from "./GameImage.module.css";

const GameImage = (props) => {
  return (
    <div
      className={classes.game_image}
      style={{ backgroundImage: `url(${props.img || ""})` }}
    />
  );
};

export default GameImage;
