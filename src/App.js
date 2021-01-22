import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import HelloWorld from "./pages/HelloWorld/index";
import Product from "./pages/Product/index";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout/index";

const App = () => (
  <CartProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  </CartProvider>
);

export default App;
