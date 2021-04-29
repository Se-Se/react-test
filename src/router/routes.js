import React from "react";
import {
  HashRouter,
  Switch,
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";

import Test from "@/pages/test/test.js";

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Test" exact component={Test} />
      </Switch>
  </BrowserRouter>
);
