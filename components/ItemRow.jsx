import React from "react";
import styles from "./ItemRow.module.css";
import { useDispatch } from 'react-redux'
import { REMOVE_FROM_CART,CLEAR_ITEM,ADD_CART_ITEM} from "../store/slices/cartReducer";

export default function ItemRow(product) {
  let { id, imageUrl, name, quantity, price } = product;
  let dispatch = useDispatch();

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
              dispatch(REMOVE_FROM_CART(product));
            }}
          >
            -
          </span>
          {quantity}{" "}
          <span
            className={styles["increment"]}
            onClick={() => {
              dispatch(ADD_CART_ITEM(product));
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
            dispatch(CLEAR_ITEM(id));
          }}
        >
          Remove{" "}
        </span>
      </div>
    </div>
  );
}
