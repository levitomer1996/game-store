import React, { useState, useEffect } from "react";
import validator from "validator";
import gamestore from "../api/gamestore";
export default () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const [lockButton, setLockButton] = useState(true);
  const [redirect, setRedirectToIndex] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(null);

  const handleSumbit = async (state) => {
    try {
      console.log(state);
      setSpinner(true);
      const res = await gamestore.post("/auth/signup", state);
      console.log(res.data);
      setSpinner(false);
      setRedirectToIndex(true);
    } catch (error) {
      setSpinner(false);
      setError("Email or password are Inavlid");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const checkValidation = (type, value) => {
    if (email && password) {
      setLockButton(false);
    } else {
      setLockButton(true);
    }
    switch (type) {
      case "email":
        setEmail(validator.isEmail(value));
      case "password":
        setPassword(validator.isByteLength(value, { min: 5 }));

      default:
        break;
    }
  };

  return {
    lockButton,
    error,
    spinner,
    redirect,
    checkValidation,
    handleSumbit,
  };
};
