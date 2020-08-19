import React, { useContext } from "react";
import CartContext from "../../../../Contex/CartContext";
import gamestore from "../../../../api/gamestore";
export default () => {
  const { addToExistCart } = useContext(CartContext);
  const addProd = async (id) => {
    try {
      const token = await localStorage.getItem("ut");
      const res = await gamestore.post(
        "/cart/addproduct",
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      addToExistCart(res.data);
    } catch (error) {}
  };
  return { addProd };
};
