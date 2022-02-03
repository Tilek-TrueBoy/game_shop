import React from "react";
import CartItem from "../CartItem/CartItem";
import MyButton from "../MyButton/MyButton";
import { calcTotalPrice } from "../utils";
import classes from "./CartMenu.module.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className={classes.cart_menu}>
      <div className={classes.cart_menu__list}>
        {items.length
          ? items.map((game) => (
              <CartItem
                title={game.title}
                id={game.id}
                price={game.price}
                key={game.title}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length ? (
        <div className={classes.cart_menu__arrange}>
          <div className={classes.cart_menu__total_price}>
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} </span>
          </div>
          <MyButton onClick={onClick}>Оформить заказ</MyButton>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
