import React, {useContext} from 'react'
import { ProductContext } from "../contexts/productContext/productContext";

export default function CartItem(props) {

    let [products,] = useContext(ProductContext);
  return (
    <div><img src={products[props.id-1].imageUrl}/>{products[props.id-1].name}<span>{props.count}</span></div>
  )
}
