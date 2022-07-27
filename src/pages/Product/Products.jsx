import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import {publicRequest} from '../../requestMethods'
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
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState({})
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try{
        const res = await publicRequest.get("/products/find/"+id)
        setProduct(res.data)
        console.log(res.data)
      }catch {}
    }
    getProduct()
  }, [id])

  const handleQuantity = (ordem) => {
    if(ordem === "decre"){
      quantity > 1 && setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({...product, quantity,color, size})
    )

    console.log(product)

  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title> {product.title} </Title>
          <Description>
            {product.desc}
          </Description>
          <Price> R$ {product.price * quantity} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Cor </FilterTitle>
              {product.color?.map((cor) => {
                return (
                  <FilterColor color={cor} key={cor} onClick={() => setColor(cor)} />
                )
              })}

            </Filter>
            <Filter>
              <FilterTitle> Tamanho </FilterTitle>
              <FilterSize>
                {product.size?.map((tamanho) => {
                  return(
                    <FilterSizeOption key={tamanho} onChange={(e) => setSize(e.target.value)}>{tamanho}</FilterSizeOption>
                  )
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decre")} />
              <Amount> {quantity} </Amount>
              <Add onClick={() => handleQuantity("incres")} />
            </AmountContainer>
            <Button onClick={handleClick}> Adicionar ao Carrinho </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
