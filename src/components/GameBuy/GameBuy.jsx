import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import MyButton from "../MyButton/MyButton";
import classes from "./GameBuy.module.css";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);

  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className={classes.game_buy}>
      <span className={classes.game_buy__price}>{game.price} сом</span>
      <MyButton onClick={handleClick}>
        {isItemInCart ? "Удалить из корзины" : "Купить"}
      </MyButton>
    </div>
  );
};

export default GameBuy;
