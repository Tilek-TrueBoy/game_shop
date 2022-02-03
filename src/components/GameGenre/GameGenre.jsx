import React from "react";
import classes from "./GameGenre.module.css";

const GameGenre = ({ genre }) => {
  return <div className={classes.game_genre}>{genre}</div>;
};

export default GameGenre;
