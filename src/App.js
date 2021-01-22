import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResetCSS from "./styles/global/ResetCSS";
import GlobalStyle from "./styles/global/Global";
import Home from "./pages/Home";
import Product from "./pages/Product/index";
import { CartProvider } from "./context/CartContext";

import { CartMenu, NavBar } from "./components";

const App = () => (
  <CartProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Product} />
      </Switch>
      <CartMenu />
    </Router>
  </CartProvider>
);

export default App;
