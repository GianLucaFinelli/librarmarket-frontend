import React, { useState } from "react";

import {
  ContainerBackgroundImage,
  Container,
  Titular,
  LoginForm,
  FormGroup,
  Label,
  Input,
  ButtonLogin,
  ButtonRegister,
  RememberGroup,
  RememberMe,
} from "./styles";
import { HiOutlineLogin } from "react-icons/hi";

const Login = () => {

  const [user, setUser] = useState({
    name: "",
    pass: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  return (
    <ContainerBackgroundImage>
      <Container>
        <Titular>
          <span style={{ marginRight: "10px" }}>Iniciar Sesión</span>
          <HiOutlineLogin></HiOutlineLogin>
        </Titular>
        <LoginForm>
          <FormGroup>
            <Label>Usuario:</Label>
            <Input
              id="name"
              placeholder="Ingresa tu usuario..."
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Contraseña:</Label>
            <Input
              id="pass"
              placeholder="Ingresa tu contraseña..."
              type="password"
              onChange={handleChange}
            />
          </FormGroup>
          <RememberGroup>
            <RememberMe type="checkbox"></RememberMe>
            Recordarme
          </RememberGroup>
          <FormGroup>
            <ButtonLogin to="/admin">
              Iniciar Sesión
            </ButtonLogin>
            <ButtonRegister>Registrese Aquí</ButtonRegister>
          </FormGroup>
        </LoginForm>
      </Container>
    </ContainerBackgroundImage>
  );
};

export default Login;
