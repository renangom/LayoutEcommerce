import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Product from "../../components/Product/Product";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FIlterText,
  Select,
  Option,
} from "./styled";

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> Vestidos </Title>
      <FilterContainer>
        <Filter>
          <FIlterText> Filtrar produtos: </FIlterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Cor</Option>
            <Option value="white">Branco</Option>
            <Option value="black">Preto</Option>
            <Option value="red">Vermelho</Option>
            <Option value="blue">Azul</Option>
            <Option value="yellow">Amarelo</Option>
            <Option value="gray">Cinza</Option>
            <Option value="green">Verde</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Tamanho</Option>
            <Option>M</Option>
            <Option>P</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>S</Option>
            <Option>OBESO</Option>
          </Select>
        </Filter>
        <Filter>
          <FIlterText> Ordernar Produtos :</FIlterText>
          <Select onChange={(e) => {setSort(e.target.value); console.log(e.target.value)}}>
            <Option value="newest">Novos</Option>
            <Option value="asc">Preço(asc.)</Option>
            <Option value="desc">Preço(desc.)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
