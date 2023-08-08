import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const total = cartCntx.items.reduce((currentNum, item) => {
    return currentNum + Number(item.amount) * Number(item.price);
  }, 0);

  const cartAmount = {};
  cartCntx.items.forEach((item) => {
    cartAmount[item.id] = (cartAmount[item.id] || 0) + Number(item.amount);
  });

  console.log(cartAmount);

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => {
        return (
          <li className={classes["cart-item"]} key={item.id}>
            <div className={classes["cart-name"]}>
              <h2>{item.name} </h2>
              <div>
                <span className={classes.price}>
                  ${item.price}{" "}
                  <span className={classes.amount}> X{item.amount}</span>
                </span>
              </div>
            </div>
            <div className={classes.actions1}>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order Now</button>
      </div>
    </Modal>
  );
};

export default Cart;
