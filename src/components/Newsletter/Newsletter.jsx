import React from "react";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./Newsletter.styled";

import SendIcon from "@mui/icons-material/Send";

function Newsletter() {
  return (
    <Container>
      <Title> Newsletter </Title>
      <Description>Receba novidas sobre os ultimos lançamentos</Description>
      <InputContainer>
        <Input placeholder="Seu e-mail..." />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
