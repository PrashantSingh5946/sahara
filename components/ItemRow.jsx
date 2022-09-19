import React from "react";
import styles from "./ItemRow.module.css"

export default function ItemRow({imageUrl,name,count,price}) {
  return (
    <div>
      <div className={styles["row"]}>
        <span><img src={imageUrl}/> </span> <span>{name} </span> <span>{count} </span>{" "}
        <span>{price}</span> <span>Remove </span>
      </div>
    </div>
  );
}
