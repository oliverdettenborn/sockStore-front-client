import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import Home from "./pages/Home";
import Product from "./pages/Product/index";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout/index";

import { CartMenu, NavBar } from "./components";

const App = () => {
  const [showCar, setShowCar] = useState(false);
  return (
    <CartProvider>
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Home} />
        </Switch>
        <CartMenu />
      </Router>
    </CartProvider>
  );
};

export default App;
