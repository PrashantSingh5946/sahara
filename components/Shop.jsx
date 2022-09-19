import React from "react";
import { ProductContext } from "../contexts/productContext/productContext";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import styles from "./Shop.module.css";
import PreviewCategory from "./PreviewCategory";

export default function Shop() {
  const [products] = useContext(ProductContext);

  return (
    <div>
      <h1>Shop</h1>
      <div className={styles["products-container"]}>
      {
        products.map((category,index) => <PreviewCategory key={index} {...category}></PreviewCategory>)
      }
      </div>
    </div>
  );
}
