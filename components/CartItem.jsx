import React from 'react'
import styles from "./CartItem.module.css"

export default function CartItem({imageUrl,name,quantity}) {

  return (
    <div className={styles['cart-item']}><img src={imageUrl}/><span>{name}</span>x<span>{quantity}</span></div>
  )
}
