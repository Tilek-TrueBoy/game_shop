import React from 'react';
import { useDispatch } from 'react-redux';
import GameImage from '../GameImage/GameImage';
import {AiOutlineCloseSquare} from 'react-icons/ai'
import classes from './OrderItem.module.css'
import { deleteItemFromCart } from '../../redux/cart/reducer';

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handlClcik = () => {
    dispatch(deleteItemFromCart(game.id))
  };
  
  return (
    <div className={classes.order_item}>
      <div className={classes.order_item__image}>
        <GameImage img={game.image} />
      </div>
      <div className={classes.order_item__title}>
        <span>{game.title}</span>
      </div>
      <div className={classes.order_item__price}>
        <span>{game.price} сом</span>
        <AiOutlineCloseSquare size={25} className={classes.cart_item__delete} onClick={handlClcik} />
      </div>
    </div>
  );
};

export default OrderItem;