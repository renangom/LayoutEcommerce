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

const Navbar = () => {
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
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
