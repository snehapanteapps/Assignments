import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import Signupform from "./components/Signupform";
import Home from "./components/Home";

//INITIALIZE APOLLO CLIENT

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://practice-gi2.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "td0pqad0hOnILoAzhnE1Niqlq5tMXmDsXVMJga8R0YaEeutZo9WYuzbhfneOK90S",
  },
  cache: new InMemoryCache(),
});
// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("header")
);
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Signupform />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("sidebar")
);
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("main")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
