import React from "react";
import {
  HashRouter,
  Switch,
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";

import Test from "@/pages/test/test.js";
import Home from "@/pages/home/home.js";

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
      </Switch>
  </BrowserRouter>
);
