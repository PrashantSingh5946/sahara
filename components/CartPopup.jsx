import React from "react";
import styles from "./CartPopup.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartPopup(props) {
  let [cartState] = useContext(CartContext);
  const { ledger } = cartState;
  console.log(ledger);

  return (
    <div className={styles["cart-popup"]}>
      <div className={styles["item-list"]}>
        <div>Types of items x {ledger.length}</div>
        <hr />
        <div className={styles["items"]}>
          {ledger.map((ledger) => (
            <CartItem
              key={ledger.id}
              id={ledger.id}
              count={ledger.count}
            ></CartItem>
          ))}
        </div>
        <button style={{ color: "black" }}>
          <Link to={"/checkout"}>
            GO TO CHECKOUT ({cartState.products.length})
          </Link>
        </button>
      </div>
    </div>
  );
}
