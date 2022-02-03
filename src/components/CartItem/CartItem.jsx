import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ title, price, id }) => {
  return (
    <div className={classes.cart_item}>
      <span>{title}</span>
      <div className="cart_item__price">
        <span>{price} сом</span>
      </div>
    </div>
  );
};

export default CartItem;