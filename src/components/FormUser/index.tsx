import { Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { CepContext } from "../../providers/Cep";
import { UsersContext } from "../../providers/Users";
import { toast } from "react-toastify";

interface UserData {
  name: string;
  cpf: string;
  cep: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormUser = () => {
  const { getCep, state, city, district, street, validCep } =
    useContext(CepContext);

  const { postUser } = useContext(UsersContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .min(9, "Colocar apenas números")
      .max(9, "Colocar apenas números"),
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
    await getCep(cep);

    const objectData = {
      email,
      password,
      name,
      type: "user",
      cpf,
      cep,
      street,
      district,
      city,
      state,
    };

    if (validCep) {
      reset({
        email: "",
        password: "",
        name: "",
        cpf: "",
        cep: "",
        confirmPassword: "",
      });
      postUser(objectData);
      console.log("teste");
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
      <input type="text" {...register("name")} placeholder="Nome" />
      {errors.name?.message}
      <input type="text" {...register("cpf")} placeholder="CPF" />
      {errors.cpf?.message}
      <input type="text" {...register("cep")} placeholder="CEP" />
      {errors.cep?.message}
      <input type="text" {...register("email")} placeholder="Email" />
      {errors.email?.message}
      <input type="password" {...register("password")} placeholder="Senha" />
      {errors.password?.message}
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirmar Senha"
      />
      {errors.confirmPassword?.message}
      <button>Cadastrar</button>
    </Form>
  );
};
