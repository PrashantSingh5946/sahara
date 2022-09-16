import React from "react";
import { CartContext } from "../contexts/cartContext/cartContext";
import styles from "./ProductCard.module.css";
export default function ProductCard({ id, name, imageUrl, price }) {
  let [cartState, setCartState] = React.useContext(CartContext);

  let addToBag = (identifier) => {
    setCartState(() => ({
      ...cartState,
      products: [...cartState.products, identifier],
    }));
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
