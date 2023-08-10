import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToTheCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex((i) => {
      return i.id === item.id;
    });
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: JSON.stringify(
          Number(existingCartItem.amount) + Number(item.amount)
        ),
      };
      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeItemFromTheCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex((i) => {
      return i.id === item.id;
    });
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: JSON.stringify(
          Number(existingCartItem.amount) - Number(item.amount)
        ),
      };
      if (updatedItem.amount === "0") {
        updatedItems = cartItems.filter((item) => {
          return item.id !== updatedItem.id;
        });
        setCartItems(updatedItems);
      } else {
        updatedItems = [...cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
        setCartItems(updatedItems);
      }
    }
  };
  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToTheCart,
    removeItem: removeItemFromTheCart,
  };

  console.log(cartContext.items);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
