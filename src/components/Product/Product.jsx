import React from "react";
import { ContainerProduct } from "./Product.styled";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <ContainerProduct>
      {popularProducts.map((item) => {
        return <ProductItem item={item} key={item.id} />;
      })}
    </ContainerProduct>
  );
};

export default Product;
