import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
