import React, { useCallback, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { calcTotalPrice } from "../utils";
import classes from "./CartBlock.module.css";

const CartBlock = () => {
  const [isActive, setIsActive] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e) => {
      setIsActive(false);
      navigate("/order");
    },
    [navigate]
  );

  return (
    <div className={classes.cart_block}>
      <ItemsInCart quontity={items.length} />

      <BiCartAlt
        onClick={() => setIsActive(!isActive)}
        size={25}
        className={classes.cart_block__icon}
      />
      {totalPrice > 0 ? (
        <span className={classes.cart_block__total_price}>
          {totalPrice} сом
        </span>
      ) : null}
      {isActive && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
