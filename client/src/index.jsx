import { BrowserRouter } from "react-router-dom";
import App from "./Components/App.jsx";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
