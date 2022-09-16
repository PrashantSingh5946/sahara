import React from "react";
import styles from "./ProductCard.module.css";
export default function ProductCard({ id, name, imageUrl, price }) {
  return (
    <div className={styles["productCard"]}>
      <img src={imageUrl}></img>
      <h3>{name}</h3>
      <button>Shop Now</button>
      <div className="price">{price}$</div>
    </div>
  );
}
