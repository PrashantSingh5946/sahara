import React from "react";
import styles from "./CheckoutPage.module.css";
import ItemRow from "./ItemRow";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import { ProductContext } from "../contexts/productContext/productContext";
export default function CheckoutPage() {

    let [cartState,]= useContext(CartContext);
    const [products,] = useContext(ProductContext);
    let {ledger} = cartState;
  return (
    <div className={styles["container"]}>
      <div className={styles["heading-row"]}>
        <span>Product </span> <span>Description </span> <span>Quantity </span>{" "}
        <span>Price </span> <span>Remove </span>
      </div>
      <hr />
      <div className={styles["list-item"]}>
        {
            ledger.map((item)=><ItemRow  key={item.id} imageUrl={products[item.id-1].imageUrl} quantity={item.count}></ItemRow>)
        }
        
        
      </div>
    </div>
  );
}
