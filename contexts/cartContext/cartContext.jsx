import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cartState, setCartState] = useState({
    isCartVisible: false,
    products: [],
  });
  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {props.children}
    </CartContext.Provider>
  );
}
