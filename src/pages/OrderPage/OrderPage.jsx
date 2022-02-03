import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/OrderItem/OrderItem';
import { calcTotalPrice } from '../../components/utils';
import classes from './OrderPage.module.css';

const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart);

  if(!items.length) return <h1>sКорзина пуста</h1>

  return (
    <div className={classes.order_page}>
      <div className="order_page__left">
        { items.map(game => <OrderItem game={game}/>)}
      </div>
      <div className="order_page__right">
          <div className="order_page__total_price">
            <span>
              {items.length} товаров на сумму {calcTotalPrice(items)} сом
            </span>
          </div>
      </div>
    </div>
  );
};

export default OrderPage;