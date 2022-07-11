import React from "react";

import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styled";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title> Login </Title>
        <Form>
          <Input placeholder="Digite seu nome..." />
          <Input placeholder="Digite sua senha..." />
          <Button> Entrar </Button>
          <Link> Esqueci minha senha (HELP ME, RENAN!!)</Link>
          <Link> Criar uma nova conta (ISSO, ME DÊ SEU DINHEIRO!!)</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
