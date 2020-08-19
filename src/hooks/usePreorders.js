import React, { useContext } from "react";
import gamestore from "../api/gamestore";
import ProductContext from "../Contex/ProductContext";

export default () => {
  const { addPreOrders } = useContext(ProductContext);

  const handlePreOrders = async () => {
    try {
      const list = await gamestore.get("/product/preorders");
      addPreOrders(list.data);
    } catch (error) {}
  };

  return [handlePreOrders];
};
