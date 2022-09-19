import React from "react";
import styles from "./ItemRow.module.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";

export default function ItemRow({ id, imageUrl, name, quantity, price }) {

  let [cartState,setCartState] = useContext(CartContext);

  const removeItem = (id) =>{
    console.log(cartState);
    console.log(cartState.ledger);
  
    setCartState((prevState) => { 
      return(
        {
          ...prevState, ledger:[...prevState.ledger.filter((item) => item.id!=id)],
          products:[...prevState.products.filter((item) => item!=id)]
        }
      )
    })
  } 

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["row"]}>
        <span>
          <img src={imageUrl} />{" "}
        </span>{" "}
        <span>{name} </span> <span>{quantity} </span>{" "}
        <span>
          {price} {"$"}
        </span>{" "}
        <span onClick={()=>{removeItem(id)}}>Remove </span>
      </div>
    </div>
  );
}
