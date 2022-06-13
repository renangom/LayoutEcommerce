import React from "react";
import { Container } from "./Categories.styled";
import { categories } from "../../data";
import CategoryItem from "./CategorieItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Categories;
