import React from "react";

import {
  Center,
  Container,
  Left,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  List,
  Title,
  ListItem,
  ContactItem,
  Payment,
} from "./Footer.styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>RENANLA</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour,
          or randomised words which don't look even slightly believable
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Links de Ajuda </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Ala Masculina</ListItem>
          <ListItem>Ala Feminina</ListItem>
          <ListItem>Acessorios</ListItem>
          <ListItem>Minha conta</ListItem>
          <ListItem>Pedidos</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          Rua Carmela Simonelli Zola, 370, Igaraçu do Tietê
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +55 14 40028922
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon />
          contato.renan@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
