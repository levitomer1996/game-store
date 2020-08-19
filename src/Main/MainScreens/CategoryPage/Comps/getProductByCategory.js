import React, { useState } from "react";
import { useParams } from "react-router-dom";
import gamestore from "../../../../api/gamestore";

export default () => {
  const [prodList, setProdList] = useState([]);

  const getProd = async (categ) => {
    try {
      const res = await gamestore.get(`/product/category/${categ}`);
      console.log(res.data);
      setProdList(res.data);
    } catch (error) {}
  };

  return [prodList, getProd];
};
