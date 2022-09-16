import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "../contexts/userContext/userContext";
import ProductContextProvider from "../contexts/productContext/productContext";
import CartContextProvider from "../contexts/cartContext/cartContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
