import { createContext, ReactNode } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";

interface UsersProviderData {
  postUser: (data: UserSubmitData) => void;
  postUserMarket: (data: MarketSubmitData) => void;
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

export const UsersContext = createContext<UsersProviderData>(
  {} as UsersProviderData
);

export const UsersProvider = ({ children }: UsersProviderProps) => {
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

  return (
    <UsersContext.Provider value={{ postUserMarket, postUser }}>
      {children}
    </UsersContext.Provider>
  );
};
