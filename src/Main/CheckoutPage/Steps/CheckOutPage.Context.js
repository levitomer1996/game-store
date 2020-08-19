import React, { useReducer, useState } from "react";

const CheckoutContext = React.createContext();
const CheckoutReducer = (state, action) => {
  switch (action.type) {
    case "next":
      return state + 1;
    case "back":
      return state - 1;

    default:
      break;
  }
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "setShipmentDetails":
      return { ...state, creditCard: action.payload };

    case "setCreditCard":
      return { ...state, creditCard: action.payload };
  }
};

export const CheckoutProvider = ({ children }) => {
  const [step, dispatch] = useReducer(CheckoutReducer, 0);
  const [formState, dispatchFormState] = useReducer(formReducer, {});

  const handleNext = () => {
    dispatch({ type: "next" });
  };
  const handleBack = () => {
    dispatch({ type: "back" });
  };
  const setShipmentDetails = (data) => {
    dispatchFormState({ type: "setShipmentDetails", payload: data });
  };
  const setCreditCard = (data) => {
    dispatchFormState({ type: "setCreditCard", payload: data });
  };
  return (
    <CheckoutContext.Provider
      value={{
        step,
        handleNext,
        handleBack,
        setShipmentDetails,
        setCreditCard,
        formState,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
export default CheckoutContext;
