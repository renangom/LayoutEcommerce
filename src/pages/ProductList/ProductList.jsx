import React from "react";
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
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> Vestidos </Title>
      <FilterContainer>
        <Filter>
          <FIlterText> Filtrar produtos: </FIlterText>
          <Select>
            <Option disabled selected>
              Cor
            </Option>
            <Option>Branco</Option>
            <Option>Preto</Option>
            <Option>Vermelho</Option>
            <Option>Azul</Option>
            <Option>Amarelo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanho
            </Option>
            <Option>M</Option>
            <Option>P</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>GORDO</Option>
            <Option>OBESO</Option>
          </Select>
        </Filter>
        <Filter>
          <FIlterText> Ordernar Produtos :</FIlterText>
          <Select>
            <Option disabled selected>
              Novos
            </Option>
            <Option>Preço(asc.)</Option>
            <Option>Preço(desc.)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
