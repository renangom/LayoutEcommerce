import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";

import {
  Container,
  Wrapper,
  Image,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Button,
  Amount,
} from "./styled";

function Product() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title> sdondosandsd</Title>
          <Description>
            dnsadnsadnsapdnsadsdsadadsadsasasdddddddddddddddddddddddddddaaaaasdsdsdsdsadsad
          </Description>
          <Price> R$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Cor </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle> Tamanho </FilterTitle>
              <FilterSize>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>P</FilterSizeOption>
                <FilterSizeOption>G</FilterSizeOption>
                <FilterSizeOption>GG</FilterSizeOption>
                <FilterSizeOption>GORDO</FilterSizeOption>
                <FilterSizeOption>OBESO</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount> 1 </Amount>
              <Add />
            </AmountContainer>
            <Button> Adicionar ao Carrinho </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
