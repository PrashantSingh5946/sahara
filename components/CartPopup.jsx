import React from "react";
import styles from "./CartPopup.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartPopup(props) {
  let context = useContext(CartContext);
  let {cartItems} = context;

  return (
    <div className={styles["cart-popup"]}>
      <div className={styles["item-list"]}>
        <div>Types of items x {0}</div>
        <hr />
        <div className={styles["items"]}>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              count={cartItem.count}
            ></CartItem>
          ))}
        </div>
        <button style={{ color: "black" }}>
          <Link to={"/checkout"}>
            GO TO CHECKOUT ({0})
          </Link>
        </button>
      </div>
    </div>
  );
}
