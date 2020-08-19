import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Context
import { ProductProvider } from "./Contex/ProductContext";
import { CartProvider } from "./Contex/CartContext";
import { AuthProvider } from "./Contex/AuthContext";

import AuthContext from "./Contex/AuthContext";
//Components
import Header from "./Components/Header/Header";
import MobileHeader from "./Components/Header/MobileHeader";
import Main from "./Main/Main";
import useLogin from "./hooks/useLogin";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Router>
              <Header />
              <MobileHeader />
              <Main />
            </Router>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
