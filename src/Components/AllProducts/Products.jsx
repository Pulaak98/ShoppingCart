import React from "react";
import allProducts from "../Assets/all_product";
import Item from "../Items/Item";
import "../AllProducts/Products.css";
const Products = () => {
  return (
    <div className="products">
      {allProducts.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          oldPrice={product.old_price}
          newPrice={product.new_price}
        />
      ))}
    </div>
  );
};

export default Products;
