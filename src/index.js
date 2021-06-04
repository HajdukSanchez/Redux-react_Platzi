import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

// Store for redux
const store = createStore(
  // All the reducers of our application
  reducers,
  // Initial state
  {},
  // Middleware for makes calls to our reducers
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  // We gave access for providers to our children components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
