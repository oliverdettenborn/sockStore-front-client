import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout/index";

import { CartMenu, NavBar } from "./components";

const App = () => {
  const [showCart, setShowCart] = useState(true);
  return (
    <CartProvider>
      <Router>
        <ResetCSS />
        <GlobalStyle />
        <NavBar setShowCart={setShowCart} />
        <Switch>
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Home} />
        </Switch>
        <CartMenu isClosed={showCart} setIsClosed={setShowCart} />
      </Router>
    </CartProvider>
  );
};

export default App;
