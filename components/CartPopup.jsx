import React from "react";
import styles from "./CartPopup.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";

export default function CartPopup(props) {
  let {cartState,setCartState} = useContext(CartContext);

  return (
    <div className={styles["cart-popup"]}>
      <div className={styles["item-list"]}>
        <div>Your shopping bag x</div>
        <hr />
        <div className={styles["items"]}></div>
        <button>View shopping bag ({cartState.products.length})</button>
      </div>
    </div>
  );
}
