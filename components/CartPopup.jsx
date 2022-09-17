import React from "react";
import styles from "./CartPopup.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import CartItem from "./CartItem";

export default function CartPopup(props) {
  let [cartState] = useContext(CartContext);
  const { ledger } = cartState;
  console.log(ledger);

  return (
    <div className={styles["cart-popup"]}>
      <div className={styles["item-list"]}>
        <div>No of items x {ledger.length}</div>
        <hr />
        <div className={styles["items"]}>
          {ledger.map((ledger) => (
            <CartItem key={ledger.id} id={ledger.id} count={ledger.count}></CartItem>
          ))}
        </div>
        <button>View shopping bag ({cartState.products.length})</button>
      </div>
    </div>
  );
}
