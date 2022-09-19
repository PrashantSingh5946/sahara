import React from "react";
import styles from "./ItemRow.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";

export default function ItemRow({ id, imageUrl, name, quantity, price }) {
  let context = useContext(CartContext);
  const { clearItem } = context;

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["row"]}>
        <span>
          <img src={imageUrl} />{" "}
        </span>{" "}
        <span>{name} </span> <span>{quantity} </span>{" "}
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
