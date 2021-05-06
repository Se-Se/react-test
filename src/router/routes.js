import React from "react";

import ScrollToTop from "@/components/ScrollToTop/index";
import { Switch, BrowserRouter, Route, HashRouter } from "react-router-dom";

import Test from "@/pages/test/test.js";
import Home from "@/pages/home/home.js";

//eslint-disable-next-line
export default () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
