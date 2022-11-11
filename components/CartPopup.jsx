import React from "react";
import styles from "./CartPopup.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export default function CartPopup(props) {

  let {cartItems,total,totalNoOfItems} = useSelector((state)=> state.cart);

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
