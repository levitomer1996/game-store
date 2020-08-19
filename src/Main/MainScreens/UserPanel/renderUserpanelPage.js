import React, { useContext, useState } from "react";
import MyAccountPage from "./pages/MyAccountPage";
import OrdersPage from "./pages/OrdersPage";
import AuthContext from "../../../Contex/AuthContext";
import CartContext from "../../../Contex/CartContext";
export default (page) => {
  const { signoutContex } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  switch (page) {
    case "My Account":
      return <MyAccountPage />;
    case "Orders":
      return <OrdersPage />;
    case "Sign-out":
      signoutContex();
      clearCart();
  }
};
