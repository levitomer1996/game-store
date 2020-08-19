import React, { useReducer, useState } from "react";
import useCalculateCartTotalPrice from "../hooks/useCalculateCartTotalPrice";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isLogged: true, user: action.payload };
    case "signout":
      localStorage.removeItem("ut");
      return { ...state, isLogged: false, user: {} };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
  });

  const signinContex = (data) => {
    dispatch({ type: "signin", payload: data });
    return;
  };
  const signoutContex = (data) => {
    dispatch({ type: "signout" });

    return;
  };

  return (
    <AuthContext.Provider value={{ authState, signinContex, signoutContex }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
