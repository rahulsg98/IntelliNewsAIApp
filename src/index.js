import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppLanding from "./AppLanding";

ReactDOM.render(
  <Provider store={store}>
    <AppLanding />
  </Provider>,
  document.getElementById("root")
);
