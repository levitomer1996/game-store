import React, { useState, useContext } from "react";
//API
import gamestore from "../../../api/gamestore";
//Context
import CartContext from "../../../Contex/CartContext";

export default () => {
  const [redirectToIndex, setRedirect] = useState(false);
  const { clearCart } = useContext(CartContext);
  const submitPayment = async (details) => {
    try {
      const token = localStorage.getItem("ut");
      const res = await gamestore.post("/order/neworder", details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await gamestore.post(
        "/cart/clearcart",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRedirect(true);
    } catch (error) {}
  };
  return [submitPayment, redirectToIndex];
};
