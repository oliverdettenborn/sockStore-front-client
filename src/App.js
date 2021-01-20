import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import Home from "./pages/Home";
import Product from "./pages/Product/index";
import { CartProvider } from "./context/CartContext";

const App = () => (
  <CartProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Product} />
      </Switch>
    </Router>
  </CartProvider>
);

export default App;
