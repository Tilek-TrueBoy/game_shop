import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../components/GameBuy/GameBuy";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameImage from "../../components/GameImage/GameImage";
import classes from "./GamePage.module.css";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className={classes.game_page}>
      <h1 className={classes.game_page__title}>{game.title}</h1>
      <div className={classes.game_page__content}>
        <div className={classes.game_page__left}>
          <iframe
            src={game.video}
            title="YT vidoe"
            width="90%"
            height="400px"
            autoplay
          ></iframe>
        </div>
        <div className={classes.game_page__right}>
          <GameImage img={game.image} />
          <p>{game.description}</p>
          <p className={classes.second_text}>Популярное метки продукта: </p>
          <div className={classes.genres_content}>
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>
          <div className={classes.game_page__buy}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
