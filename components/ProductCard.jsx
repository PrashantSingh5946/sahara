import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {

  let {addToCart,cartItems} = React.useContext(CartContext);

  let { imageUrl, name, price } = product;

  return (
    <div className={styles["productCard"]}>
      <img src={imageUrl}></img>
      <h3>{name}</h3>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Shop Now
      </button>
      <div className="price">{price}$</div>
    </div>
  );
}
