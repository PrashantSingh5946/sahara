import React from "react";
import { ProductContext } from "../contexts/productContext/productContext";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import styles from "./Shop.module.css";

export default function Shop() {
  const [products] = useContext(ProductContext);
  return (
    <div>
      <h1>Shop</h1>
      <div className={styles["products-container"]}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
