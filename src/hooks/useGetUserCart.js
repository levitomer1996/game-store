import React, { useState, useContext } from "react";
import gamestore from "../api/gamestore";
import AuthContext from "../Contex/AuthContext";
import CartContext from "../Contex/CartContext";

export default () => {
  const { addToCart } = useContext(CartContext);
  const getCart = async () => {
    try {
      const token = await localStorage.getItem("ut");

      const res = await gamestore.get("/cart/myprods", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      addToCart(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  return [getCart];
};
