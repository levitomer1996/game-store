import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Screens
import Index from "../Main/MainScreens/Index/Index";
import Register from "./MainScreens/Register/Register";
import UserPanel from "./MainScreens/UserPanel/UserPanel";
import CategoryPage from "./MainScreens/CategoryPage/CategoryPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import ProductPage from "./MainScreens/ProductPage/ProductPage";

import { CheckoutProvider } from "./CheckoutPage/Steps/CheckOutPage.Context";

//Hooks
import useRegisterValidation from "../hooks/useRegisterValidation";
import useLogin from "../hooks/useLogin";

//Router
import { Redirect } from "react-router-dom";

const Main = () => {
  const [Signin, isConnectedResolver, spinner] = useLogin();
  useEffect(() => {
    isConnectedResolver();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/userpanel">
        <UserPanel />
      </Route>
      <Route path="/category/:category">
        <CategoryPage />
      </Route>
      <Route path="/checkout/:id">
        <CheckoutProvider>
          <CheckoutPage />
        </CheckoutProvider>
      </Route>
      <Route path="/prod/:id">
        <ProductPage />
      </Route>
    </Switch>
  );
};

export default Main;
