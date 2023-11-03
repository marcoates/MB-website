import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from 'react-router-dom';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <HashRouter basename="/MB-website">
      <App />
      </HashRouter>
  </React.StrictMode>
);
