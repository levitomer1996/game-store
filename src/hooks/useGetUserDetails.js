import React, { useContext, useState } from "react";
import gamestore from "../api/gamestore";
export default () => {
  const [userDetails, setDetails] = useState({});
  const [spinner, setSpinner] = useState(false);
  const getDetails = async () => {
    setSpinner(true);
    try {
      const token = await localStorage.getItem("ut");

      const res = await gamestore.get(
        "/auth/userdetails",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetails(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      console.log(error);
    }
  };

  return [getDetails, userDetails, spinner];
};
