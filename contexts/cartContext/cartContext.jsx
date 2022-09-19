import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export default function CartContextProvider(props) {
  //state
  const [cartItems, setCartItems] = useState([]);

  //methods
  const addToCart = (product) => {
    if (cartItems.find((currentProduct) => currentProduct.id === product.id)) {
      let newProducts = cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems([...newProducts]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}
