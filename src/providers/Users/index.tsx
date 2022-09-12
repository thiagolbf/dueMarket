import { createContext, ReactNode } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface UsersProviderData {
  postUser: (data: UserSubmitData) => void;
  postUserMarket: (data: MarketSubmitData) => void;
  postLogin: (data: SignInData) => void;
}

interface MarketSubmitData {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  image: string;
}

interface UserSubmitData {
  email: string;
  password: string;
  name: string;
  type: string;
  cpf: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
}

interface UsersProviderProps {
  children: ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

export const UsersContext = createContext<UsersProviderData>(
  {} as UsersProviderData
);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const navigate = useNavigate();

  const postUserMarket = (data: MarketSubmitData) => {
    dueMarketApi
      .post("users", data)
      .then((res) => {
        console.log(res);
        toast.success("Cadastro feito com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar Conta, tentar outro email!");
      });
  };

  const postUser = (data: UserSubmitData) => {
    dueMarketApi
      .post("users", data)
      .then((res) => {
        console.log(res);
        toast.success("Cadastro feito com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar Conta, tentar outro email!");
      });
  };

  const postLogin = (data: SignInData) => {
    dueMarketApi
      .post("login", data)
      .then((res) => {
        toast.success("Login feito com sucesso!");
        console.log(res);
      })
      .catch((res) => {
        toast.error("Erro ao fazer login, tentar outro email!");
        console.log(res);
      });
  };

  return (
    <UsersContext.Provider value={{ postUserMarket, postUser, postLogin }}>
      {children}
    </UsersContext.Provider>
  );
};
