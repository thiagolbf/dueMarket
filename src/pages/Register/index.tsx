import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  BackgroundContainer,
  Form,
  FormContainer,
  GreenBox,
  TextContainer,
} from "./style";

interface UserData {
  name: string;
  userType: string;
  img: string;
  document: string;
  CEP: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    userType: yup.string().required("Campo obrigatório"),
    img: yup.string().required("Campo obrigatório"),
    document: yup.string().required("Campo obrigatório"),
    CEP: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const registerSubmit = (userdata: UserData) => {};

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
          <button>Voltar</button>
          <h2>Cadastro</h2>
          <Form onSubmit={handleSubmit(registerSubmit)}>
            <input type="text" {...register("name")} placeholder="teste" />
            <input type="text" {...register("userType")} placeholder="teste" />
            <input type="text" {...register("img")} placeholder="teste" />
            <input type="text" {...register("document")} placeholder="teste" />
            <input type="text" {...register("CEP")} placeholder="teste" />
            <input type="text" {...register("email")} placeholder="teste" />
            <input
              type="password"
              {...register("password")}
              placeholder="teste"
            />
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="teste"
            />
            <button>Cadastrar</button>
          </Form>
        </FormContainer>
        <GreenBox />
      </BackgroundContainer>
    </Container>
  );
};
