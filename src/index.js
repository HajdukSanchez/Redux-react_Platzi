import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

// Store for redux
const store = createStore(
  // All the reducers of our application
  {},
  // Initial state
  {}
);

ReactDOM.render(<App />, document.getElementById("root"));
