import React from "react";
import { ContainerProduct } from "./Product.styled";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Product = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <ContainerProduct>
      {cat ? filteredProducts.map((item) => {
        return <ProductItem item={item} key={item._id} />;
      }) : products
        .slice(0,2)
        .map((item) => {return <ProductItem item={item} key={item._id} /> })}
    </ContainerProduct>
  );
};

export default Product;
