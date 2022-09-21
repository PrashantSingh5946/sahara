import React from "react";
import styles from "./ItemRow.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";

export default function ItemRow(product) {
  let { id, imageUrl, name, quantity, price } = product;
  let context = useContext(CartContext);
  const { clearItem, removeFromCart, addToCart } = context;

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["row"]}>
        <span>
          <img src={imageUrl} />{" "}
        </span>{" "}
        <span>{name} </span>{" "}
        <span>
          <span
            className={styles["decrement"]}
            onClick={() => {
              removeFromCart(product);
            }}
          >
            -
          </span>
          {quantity}{" "}
          <span
            className={styles["increment"]}
            onClick={() => {
              addToCart(product);
            }}
          >
            +
          </span>
        </span>{" "}
        <span>
          {price} {"$"}
        </span>{" "}
        <span
          onClick={() => {
            clearItem(id);
          }}
        >
          Remove{" "}
        </span>
      </div>
    </div>
  );
}
