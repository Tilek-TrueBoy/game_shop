import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/games/reducer";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";
import GameImage from "../GameImage/GameImage";
import classes from "./GameItem.module.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className={classes.game_item} onClick={handleClick}>
      <GameImage img={game.image} />
      <div className={classes.game_item__details}>
        <span className={classes.game_item__title}>{game.title}</span>
        <div className={classes.game_item__genre}>
          {game.genres.map((genre, idx) => (
            <GameGenre genre={genre} key={idx + 1} />
          ))}
        </div>
        <div className={classes.game_item__buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
