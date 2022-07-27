import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from "./styled";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const {isFetchin, error} = useSelector(state => state.user)

  const handleLogin = (e) =>{
    e.preventDefault()

    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title> Login </Title>
        <Form>
          <Input placeholder="Digite seu nome..." onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Digite sua senha..." onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin} disabled={isFetchin}> Entrar </Button>
          {error && <Error>Algo deu errado ...</Error>}
          <Link> Esqueci minha senha (HELP ME, RENAN!!)</Link>
          <Link> Criar uma nova conta (ISSO, ME DÊ SEU DINHEIRO!!)</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
