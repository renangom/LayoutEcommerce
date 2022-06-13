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
          <MenuItem>Registrar</MenuItem>
          <MenuItem>Login</MenuItem>
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
