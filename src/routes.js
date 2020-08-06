import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Checkout from "./pages/Checkout.js";
import Footer from "./components/Footer.js";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
