import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/containers/App.css";

import Menu from "../components/Menu";
import Posts from "../components/Posts/Index";
import Users from "../components/Users/Index";

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margin'>
      <Route exact path='/' component={Users} />
      <Route exact path='/posts/:id' component={Posts} />
    </div>
  </BrowserRouter>
);

export default App;
