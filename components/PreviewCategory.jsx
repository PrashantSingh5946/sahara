import React from "react";
import ProductCard from "./ProductCard";
import styles from "./PreviewCategory.module.css";

export default function PreviewCategory({ title, items }) {
  return (
    <>
      <div className={styles["title"]}>
        <h2>{title.toUpperCase()}</h2>
      </div>
      <div className={styles["container-items"]}>
        {items.map(
          (product, index) =>
            index < 4 && <ProductCard key={index} product={product}></ProductCard>
        )}
      </div>
    </>
  );
}
