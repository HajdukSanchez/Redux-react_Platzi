import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";

// Store for redux
const store = createStore(
  // All the reducers of our application
  reducers,
  // Initial state
  {}
);

ReactDOM.render(
  // We gave access for providers to our children components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
