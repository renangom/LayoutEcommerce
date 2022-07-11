import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./styled";

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title> CRIE UMA CONTA </Title>
        <Form>
          <Input placeholder="Digite seu nome..." />
          <Input placeholder="Digite seu sobrenome..." />
          <Input placeholder="Digite seu e-mail..." />
          <Input placeholder="Digite seu username..." />
          <Input placeholder="Digite sua senha..." />
          <Input placeholder="Confirme sua senha..." />
          <Agreement>
            Criando uma conta, eu confirmo em ceder alguns dados para o Renan
            Lindo e maravilhoso
          </Agreement>
          <Button> Criar Conta </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
