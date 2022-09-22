import { Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { CepContext } from "../../providers/Cep";
import { UsersContext } from "../../providers/Users";
import { toast } from "react-toastify";
import { InputForm } from "../InputForm";
import { Button } from "../Button";

interface UserData {
  name: string;
  cpf: string;
  cep: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormUser = () => {
  const { getCep } = useContext(CepContext);

  const { postUser } = useContext(UsersContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .min(11, "Colocar apenas números")
      .max(11, "Colocar apenas números"),
    cep: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Colocar apenas números")
      .max(8, "Colocar apenas números"),
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const userSubmit = async ({ name, cpf, cep, email, password }: UserData) => {
    const cepData = await getCep(cep);

    console.log(cepData);
    const objectData = {
      email,
      password,
      name,
      type: "cliente",
      cpf,
      cep,
      street: cepData.logradouro,
      district: cepData.bairro,
      city: cepData.localidade,
      state: cepData.uf,
    };

    if (cepData.logradouro) {
      reset({
        email: "",
        password: "",
        name: "",
        cpf: "",
        cep: "",
        confirmPassword: "",
      });
      postUser(objectData);
    } else {
      toast.error("CEP invalido");
      reset({
        email,
        password,
        name,
        cpf,
        cep: "",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(userSubmit)}>
      <InputForm
        type="text"
        {...register("name")}
        label="Nome"
        error={!!errors.name}
      />
      <span>{errors.name?.message}</span>
      <InputForm
        type="text"
        {...register("cpf")}
        label="CPF"
        error={!!errors.cpf}
      />
      <span>{errors.cpf?.message}</span>
      <InputForm
        type="text"
        {...register("cep")}
        label="CEP"
        error={!!errors.cep}
      />
      <span>{errors.cep?.message}</span>
      <InputForm
        type="text"
        {...register("email")}
        label="Email"
        error={!!errors.email}
      />
      <span>{errors.email?.message}</span>
      <InputForm
        type="password"
        {...register("password")}
        label="Senha"
        error={!!errors.password}
      />
      <span>{errors.password?.message}</span>
      <InputForm
        type="password"
        {...register("confirmPassword")}
        label="Confirmar Senha"
        error={!!errors.confirmPassword}
      />
      <span>{errors.confirmPassword?.message}</span>
      <Button type="submit" blueForm>
        Cadastrar
      </Button>
    </Form>
  );
};
