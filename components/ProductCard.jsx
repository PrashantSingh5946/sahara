import React from "react";
import styles from "./ProductCard.module.css";
import {useDispatch } from 'react-redux'
import {ADD_CART_ITEM} from '../store/slices/cartReducer'

export default function ProductCard({ product }) {


  let { imageUrl, name, price } = product;

  let dispatch = useDispatch();

  return (
    <div className={styles["productCard"]}>
      <img src={imageUrl}></img>
      <h3>{name}</h3>
      <button
        onClick={() => {
          dispatch(ADD_CART_ITEM(product));
        }}
      >
        Shop Now
      </button>
      <div className="price">{price}$</div>
    </div>
  );
}
