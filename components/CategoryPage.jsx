import React from "react";
import { useParams, Routes } from "react-router-dom";
import styles from "./CategoryPage.module.css";
import { ProductContext } from "../contexts/productContext/productContext";
import ProductCard from "./ProductCard";
export default function CategoryPage() {
  let { category } = useParams();
  const [products] = React.useContext(ProductContext);
  let selectedCategory = products.find(
    (categoryItems) => categoryItems.title.toLowerCase() == category
  );

  return (
    <div>
      {selectedCategory ? <h1>{category}</h1> : <h1>No such category found</h1>}
      <div className={styles["products-container"]}>
        {
          selectedCategory?selectedCategory.items.map((item,index) => <ProductCard key={index} product={item}/>):null
          }
      </div>
    </div>
  );
}
