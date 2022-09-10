import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
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
  cpf: string;
  tipo: string;
  isCpf: boolean;
  isCnpj: boolean;
  submit: boolean;
}

export const RegisterPage = () => {
  const [typeUser, setTypeUser] = useState("");
  const [isCpf, setIsCpf] = useState(false);
  const [isCnpj, setIsCnpj] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    // userType: yup.string().required("Campo obrigatório"),
    // img: yup.string().required("Campo obrigatório"),
    // document: yup.string().required("Campo obrigatório"),
    // CEP: yup.string().required("Campo obrigatório"),
    tipo: yup.string().required("Campo obrigatório").min(2),
    isCpf: yup.boolean(),
    submit: yup.boolean(),
    cpf: yup.string().when("submit", {
      is: true,
      then: yup.string().required("Campo obrigatório do CPF"),
      otherwise: yup.string(),
    }),
    // email: yup.string().required("Campo obrigatório"),
    // password: yup.string().required("Campo obrigatório"),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password")], "Senha diferentes")
    //   .required("Campo obrigatório"),
  });

  // isEmail: Yup.boolean(),
  //     email: Yup.string().when('isEmail', {
  //        is: true,
  //        then: Yup.string()
  //        .required('Enter Email ID'),
  //        otherwise: Yup.string(),
  //     }),

  //   onst YOUR_SCHEMA_NAME = yup.object().shape({
  //     email: yup.string().when('email', {
  //         is: (exists) => !!exists,
  //         then: yup.string().email(),
  //         otherwise: yup.string(),
  //     }),
  // }, [['email', 'email']]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const change = (type: string) => {
    if (type === "cpf") {
      setIsCnpj(false);
      setIsCpf(true);
    } else if (typeUser === "cnpj") {
      setIsCpf(false);
      setIsCnpj(true);
    } else {
      setIsCnpj(false);
      setIsCpf(false);
    }
  };
  useEffect(() => {
    change(typeUser);
    console.log(typeUser);
  }, [typeUser]);

  const registerSubmit = (userdata: UserData) => {
    console.log(userdata);
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
          <button>Voltar</button>
          <h2>Cadastro</h2>
          <Form onSubmit={handleSubmit(registerSubmit)}>
            <input type="text" {...register("name")} placeholder="teste" />
            <span>{errors.name?.message}</span>
            {/* <input type="text" {...register("userType")} placeholder="teste" />
            {errors.userType?.message}
            <input type="text" {...register("img")} placeholder="teste" />
            {errors.img?.message}
            <input type="text" {...register("document")} placeholder="teste" />
            {errors.document?.message}
            <input type="text" {...register("CEP")} placeholder="teste" />
            {errors.CEP?.message}
            <input type="text" {...register("email")} placeholder="teste" />
            {errors.email?.message} */}
            <select
              {...register("tipo")}
              onChange={(e) => setTypeUser(e.target.value)}
            >
              <option value="">Formato de usuário</option>
              <option value="cpf">Usuário</option>
              <option value="cnpj">Cliente</option>
            </select>
            {typeUser === "cpf" ? (
              <>
                <input
                  placeholder="Digite seu CPF"
                  type="text"
                  {...register("cpf")}
                />
                {errors.cpf?.message}
              </>
            ) : typeUser === "cnpj" ? (
              <>
                <input placeholder="Digite seu CNPJ" />
                <input placeholder="Coloque link de sua logomarca" />
              </>
            ) : null}

            {/* <input
              type="password"
              {...register("password")}
              placeholder="teste"
            />
            {errors.password?.message}
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="teste"
            />
            {errors.confirmPassword?.message} */}
            {errors.tipo?.message}
            <input type="checkbox" {...register("submit")} />

            <button type="submit">Cadastrar</button>
          </Form>
        </FormContainer>
        <GreenBox />
      </BackgroundContainer>
    </Container>
  );
};
