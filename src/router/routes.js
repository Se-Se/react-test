import React from "react";
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";

import Test from "@/pages/test/test.js";
import Home from "@/pages/home/home.js";

//eslint-disable-next-line
export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
      </Switch>
  </BrowserRouter>
);
