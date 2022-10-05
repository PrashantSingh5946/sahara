import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "../contexts/productContext/productContext";
import CartContextProvider from "../contexts/cartContext/cartContext";
import { Provider } from "react-redux";
import store from "../store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <ProductContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartContextProvider>
        </ProductContextProvider>
    </Provider>
  </React.StrictMode>
);
