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

interface MarketData {
  name: string;
  img: string;
  cnpj: string;
  cep: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormMarket = () => {
  const { getCep } = useContext(CepContext);

  const { postUserMarket } = useContext(UsersContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    img: yup.string().required("Campo obrigatório"),
    cnpj: yup
      .string()
      .required("Campo obrigatório")
      .min(14, "Colocar apenas números")
      .max(14, "Colocar apenas números"),
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
  } = useForm<MarketData>({ resolver: yupResolver(schema) });

  const marketSubmit = async ({
    name,
    img,
    cnpj,
    cep,
    email,
    password,
  }: MarketData) => {
    const cepData = await getCep(cep);

    const objectData = {
      email,
      password,
      name,
      type: "mercado",
      cnpj,
      cep,
      street: cepData.logradouro,
      district: cepData.bairro,
      city: cepData.localidade,
      state: cepData.uf,
      image: img,
    };

    if (cepData.logradouro) {
      reset({
        email: "",
        password: "",
        name: "",
        cnpj: "",
        cep: "",
        img: "",
        confirmPassword: "",
      });
      postUserMarket(objectData);
    } else {
      toast.error("CEP invalido");
      reset({
        email,
        password,
        name,
        cnpj,
        cep: "",
        img,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(marketSubmit)}>
      <InputForm
        type="text"
        {...register("name")}
        label="Nome"
        error={!!errors.name}
      />
      {errors.name?.message}
      <InputForm
        type="text"
        {...register("img")}
        label="Imagem do perfil"
        error={!!errors.img}
      />
      {errors.img?.message}
      <InputForm
        type="text"
        {...register("cnpj")}
        label="CNPJ"
        error={!!errors.cnpj}
      />
      {errors.cnpj?.message}
      <InputForm
        type="text"
        {...register("cep")}
        label="CEP"
        error={!!errors.cep}
      />
      {errors.cep?.message}
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
      <InputForm
        type="password"
        {...register("confirmPassword")}
        label="Confirmar Senha"
        error={!!errors.confirmPassword}
      />
      {errors.confirmPassword?.message}
      <Button type="submit" blueForm>
        Cadastrar
      </Button>
    </Form>
  );
};
