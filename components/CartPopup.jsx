import React from "react";
import styles from "./CartPopup.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartPopup(props) {
  let context = useContext(CartContext);
  let {cartItems,total,totalNoOfItems} = context;

  return (
    <div className={styles["cart-popup"]}>
      <div className={styles["item-list"]}>
        <div>{totalNoOfItems} items</div>
        <hr />
        <div className={styles["items"]}>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              {...cartItem}
            ></CartItem>
          ))}
        </div>
        <button style={{ color: "black" }}>
          <Link to={"/checkout"}>
            GO TO CHECKOUT ({total} $)
          </Link>
        </button>
      </div>
    </div>
  );
}
