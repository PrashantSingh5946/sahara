import { createContext, useState } from "react";
import React from "react";
import {SHOP_DATA}  from "../../db/shop-data.js";
export const ProductContext = createContext();
export default function ProductContextProvider(props) {
  const [products, setProducts] = useState(SHOP_DATA);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}
