import {
  Container,
  BackgroundContainer,
  FormContainer,
  GreenBox,
  TextContainer,
  HeaderBox,
  Form,
  FooterBox,
} from "./style";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UsersContext } from "../../providers/Users";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";

interface SignInData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();

  const { postLogin } = useContext(UsersContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInData>({ resolver: yupResolver(schema) });

  const signIn = (data: SignInData) => {
    console.log(data);
    postLogin(data);
  };

  return (
    <Container>
      <BackgroundContainer>
        <TextContainer>
          <h1>dueMarket</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, libero venenatis cursus vestibulum, felis quam imperdiet
            odio, quis consectetur quam risus ac urna. Aenean.
          </p>
        </TextContainer>
        <FormContainer>
          <HeaderBox>
            <h2>Login</h2>
          </HeaderBox>
          <Form onSubmit={handleSubmit(signIn)}>
            <InputForm
              type="text"
              {...register("email")}
              label="Email"
              error={!!errors.email}
            />
            {errors.email?.message}
            <InputForm
              type="password"
              {...register("password")}
              label="Senha"
              error={!!errors.password}
            />
            {errors.password?.message}
            <Button type="submit">Entrar</Button>
          </Form>
          <FooterBox>
            <p>Não tem cadastro?</p>
            <Button onClick={() => navigate("/register")}>Cadastre-se</Button>
          </FooterBox>
        </FormContainer>
        <GreenBox />
      </BackgroundContainer>
    </Container>
  );
};
