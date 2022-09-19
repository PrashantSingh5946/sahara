import React from "react";
import styles from "./ItemRow.module.css"

export default function ItemRow({imageUrl,name,quantity,price}) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles["row"]}>
        <span><img src={imageUrl}/> </span> <span>{name} </span> <span>{quantity} </span>{" "}
        <span>{price} {"$"}</span> <span>Remove </span>
      </div>
    </div>
  );
}
