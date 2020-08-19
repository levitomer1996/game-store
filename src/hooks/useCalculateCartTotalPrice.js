import React, { useState } from "react";

export default () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item) => {
    setTotalPrice(totalPrice + item.price);
  };
  const removeItem = (item) => {
    setTotalPrice(totalPrice - item.price);
  };

  return [totalPrice, addItem, removeItem];
};
