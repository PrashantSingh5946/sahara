import { createContext, useState } from "react";
import React from "react";
import{getData} from  "../../util/firebase-util.js"
import { useEffect } from "react";
export const ProductContext = createContext();
export default function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getData().then((products)=>{setProducts(products)});
    
  },[]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}
