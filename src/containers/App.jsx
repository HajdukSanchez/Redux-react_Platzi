import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/containers/App.css";

import Menu from "../components/Menu";
import Users from "../components/users/Index";

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margin'>
      <Route exact path='/' component={Users} />
      {/* <Route exact path='tasks' component={Tasks} /> */}
    </div>
  </BrowserRouter>
);

export default App;
