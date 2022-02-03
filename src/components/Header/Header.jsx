import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.header_title}>
          Game Shop
        </Link>
      </div>
      <div className={`${classes.wrapper} ${classes.header_cart_btns}`}><CartBlock/></div>
    </header>
  );
};

export default Header;
