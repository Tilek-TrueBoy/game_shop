import React from "react";
import './ItemsInCart.css';

const ItemsInCart = ({ quontity = 0 }) => {
  return quontity > 0 ? <div className="items_qountity">{quontity}</div> : null;
};

export default ItemsInCart;
