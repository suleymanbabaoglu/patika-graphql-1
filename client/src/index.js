/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/App";
import client from "./apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);
