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
            <input type="text" {...register("email")} placeholder="Email" />
            {errors.email?.message}
            <input
              type="password"
              {...register("password")}
              placeholder="Senha"
            />
            {errors.password?.message}
            <button>Entrar</button>
          </Form>
          <FooterBox>
            <p>Não tem cadastro?</p>
            <div onClick={() => navigate("/register")}>Cadastre-se</div>
          </FooterBox>
        </FormContainer>
        <GreenBox />
      </BackgroundContainer>
    </Container>
  );
};
