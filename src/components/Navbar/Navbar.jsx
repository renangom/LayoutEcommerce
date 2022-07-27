import React from "react";
import {
  Center,
  Container,
  Language,
  Left,
  Right,
  Wrapper,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./Navbar.styled";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> PT-BR</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RENAN.</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>Registrar</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/carrinho">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
