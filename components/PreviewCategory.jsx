import React from "react";
import ProductCard from "./ProductCard";
import styles from "./PreviewCategory.module.css";
import { Link } from "react-router-dom";

export default function PreviewCategory({ title, items }) {
  return (
    <>
      <div className={styles["title"]}>
        <Link to={title.toLowerCase()}><h2>{title.toUpperCase()}</h2></Link>
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
