import React, { useReducer, useState } from "react";
import useCalculateCartTotalPrice from "../hooks/useCalculateCartTotalPrice";

const CartContext = React.createContext();
const CartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return action.payload;
    case "add_to_exist_cart":
      return [...state, action.payload];
    // case "remove_from_cart":
    //   return [...state, action.payload];
    case "clear_cart":
      return [];
    default:
      break;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(CartReducer, []);

  const addToCart = (data) => {
    // addItem_To_Total_Price(data);

    dispatch({ type: "add_to_cart", payload: data });
  };
  const addToExistCart = (data) => {
    // addItem_To_Total_Price(data);

    dispatch({ type: "add_to_exist_cart", payload: data });
  };
  const clearCart = (data) => {
    dispatch({ type: "clear_cart" });
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, addToExistCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
