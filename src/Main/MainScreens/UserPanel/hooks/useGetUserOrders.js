import React, { useState } from "react";
import gamestore from "../../../../api/gamestore";

export default () => {
  const [ordersList, setList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getOrders = async () => {
    try {
      setSpinner(true);
      const token = await localStorage.getItem("ut");
      const res = await gamestore.get("/order/getorder", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setList(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getOrders, ordersList, spinner];
};
