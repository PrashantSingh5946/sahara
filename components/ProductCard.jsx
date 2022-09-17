import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, name, imageUrl, price }) {
  let [cartState, setCartState] = React.useContext(CartContext);

  let addToBag = (identifier) => {
    setCartState(() => ({
      ...cartState,
      products: [...cartState.products, identifier],
      ledger: generateArray([...cartState.products,identifier]),
    }));
  };

  useEffect(() => {
    console.log(generateArray(cartState.products));
  }, [cartState]);

  //helpers
  let checkIfItemWithPropertyExistsInArray = (arr, property, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][property] == value) {
        return i;
      }
    }
    return -1;
  };

  let generateArray = (arr) => {
    let myArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (checkIfItemWithPropertyExistsInArray(myArray, "id", arr[i]) >= 0) {
        myArray[checkIfItemWithPropertyExistsInArray(myArray, "id", arr[i])]
          .count++;
      } else {
        myArray.push({ id: arr[i], count: 1 });
      }
    }

    return myArray;
  };

  return (
    <div className={styles["productCard"]}>
      <img src={imageUrl}></img>
      <h3>{name}</h3>
      <button
        onClick={() => {
          addToBag(id);
        }}
      >
        Shop Now
      </button>
      <div className="price">{price}$</div>
    </div>
  );
}
