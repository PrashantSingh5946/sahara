import React from "react";
import styles from "./CheckoutPage.module.css";
import ItemRow from "./ItemRow";
import { useSelector, useDispatch } from 'react-redux'
export default function CheckoutPage() {
  
  let { cartItems } = useSelector(state => state.cart);

  return (
    <div className={styles["container"]}>
      <div className={styles["heading-row"]}>
        <span>Product </span> <span>Name </span> <span>Quantity </span>{" "}
        <span>Price </span> <span>Remove </span>
      </div>
      <hr />
      <div className={styles["list-item"]}>
        {cartItems.map((item) => (
          <ItemRow
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          ></ItemRow>
        ))}
      </div>
    </div>
  );
}
