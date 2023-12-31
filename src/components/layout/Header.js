import React, { Fragment } from "react";
import mealsImage from "../../Assets/meals1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Food Factory</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table Full of Food" />
      </div>
    </Fragment>
  );
};

export default Header;
