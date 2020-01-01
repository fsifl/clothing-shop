import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/global.scss";
import Layout from "../src/home/Layout";
import { Provider } from "react-redux";
import { store } from "../src/home/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,

  document.getElementById("root")
);
