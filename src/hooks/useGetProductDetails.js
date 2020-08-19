import React, { useState } from "react";
import gamestore from "../api/gamestore";
export default () => {
  const [details, setDetails] = useState({});
  const [spinner, setSpinner] = useState(false);

  const getProdDetails = async (id) => {
    try {
      setSpinner(true);
      const res = await gamestore.get(`/product/proddetails/${id}`);
      setDetails(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [details, getProdDetails, spinner];
};
