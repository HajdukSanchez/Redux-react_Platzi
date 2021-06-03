import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Menu.css";

const Menu = (porps) => (
  <nav id='menu'>
    <Link to='/'>Users</Link>
    <Link to='/tasks'>Tasks</Link>
  </nav>
);

export default Menu;
