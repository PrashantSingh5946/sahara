import React from 'react'

export default function CategoryPage() {
  return (
    <div>
    <h1>Product Categories</h1>
    <div className={styles["products-container"]}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product}></ProductCard>
      ))}
    </div>
  </div>
  )
}
