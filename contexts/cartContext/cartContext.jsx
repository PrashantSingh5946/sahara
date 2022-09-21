import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  togglePopupVisibility: () => {},
  clearItem: (id) => {},
  removeFromCart: () => {},
  isPopupVisible: false,
  total: 0,
  totalNoOfItems: 0,
});

export default function CartContextProvider(props) {
  //state
  const [cartItems, setCartItems] = useState([]);
  const [isPopupVisible, setIsPopVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalNoOfItems, setTotalNoOfItems] = useState(0);

  useEffect(() => {
    let total = 0;
    let totalItems = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
      totalItems += cartItems[i].quantity;
    }
    setTotal(total);
    setTotalNoOfItems(totalItems);
  }, [cartItems]);

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

  const removeFromCart = (product) => {
    if (cartItems.find((currentProduct) => currentProduct.id === product.id)) {
      if (product.quantity === 1) {
        clearItem(product.id);
      } else {
        let newCartItems = cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        setCartItems([...newCartItems]);
      }
    }
  };

  const clearItem = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const togglePopupVisibility = () => {
    setIsPopVisible((prevState) => !prevState);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    togglePopupVisibility,
    clearItem,
    isPopupVisible,
    total,
    totalNoOfItems,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}
