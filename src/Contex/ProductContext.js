import React, { useReducer, useState } from "react";

const ProductContext = React.createContext();
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "add_preorders":
      return [...state, action.payload];
    default:
      break;
  }
};

export const ProductProvider = ({ children }) => {
  const [preOrderProducts, dispatch] = useReducer(ProductReducer, []);

  const addPreOrders = (data) => {
    dispatch({ type: "add_preorders", payload: data });
  };

  return (
    <ProductContext.Provider value={{ preOrderProducts, addPreOrders }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
