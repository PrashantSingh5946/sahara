import { createContext, useState } from "react";
import React from "react";
import data from "../../db/shop-data.json";
export const ProductContext = createContext();
export default function ProductContextProvider(props) {
  const [products, setProducts] = useState(data);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}
