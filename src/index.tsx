import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./index.less";

import reportWebVitals from "./reportWebVitals";
import { Layout } from "@components";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
