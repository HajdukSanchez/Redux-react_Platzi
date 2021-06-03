import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "../components/Menu";
import Users from "../components/users/Index";

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path='/' component={Users} />
    {/* <Route exact path='tasks' component={Tasks} /> */}
  </BrowserRouter>
);

export default App;
