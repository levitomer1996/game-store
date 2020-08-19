import React, { useContext, useState } from "react";
import gamestore from "../api/gamestore";
import AuthContext from "../Contex/AuthContext";
export default () => {
  const { signinContex } = useContext(AuthContext);
  const [spinner, setSpinner] = useState(null);
  const Signin = async (creds) => {
    try {
      setSpinner(true);
      const res = await gamestore.post("/auth/signin", creds);

      localStorage.setItem("ut", res.data.accessToken);

      isConnectedResolver();
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };

  const isConnectedResolver = async () => {
    console.log("Tomer");
    const token = localStorage.getItem("ut");
    if (!token) {
      return;
    }

    const res = await gamestore.post("/auth/getuserbytoken", { token });

    signinContex(res.data);
  };
  return [Signin, isConnectedResolver, spinner];
};
