import React from "react";
import { ReactComponent as ShoppingBag } from "../src/assets/shopping-bag.svg";
import styles from "./Carticon.module.css"

export default function CartIcon(props) {
  return (
    <div className={styles["container"]}>
      <ShoppingBag />
      <span className={styles["count"]}>{props.count}</span>
    </div>
  );
}
