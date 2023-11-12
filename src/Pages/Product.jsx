import React from "react";
import all_product from "../Components/Assets/all_product";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

export const Product = () => {
  const allProduct  =all_product
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  );
};
export default Product;
