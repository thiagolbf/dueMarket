import { createContext, ReactNode, useEffect, useState } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface UsersProviderData {
  postUser: (data: UserSubmitData) => void;
  postUserMarket: (data: MarketSubmitData) => void;
  postLogin: (data: SignInData) => void;
  user: object;
  token: string;
  getUser: (id: number) => void;
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

  const [user, setUser] = useState<object>({});
  const [userId, setUserId] = useState(
    localStorage.getItem("@dueMarket:token") || ""
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("@dueMarket:token") || ""
  );

  const getUser = (id: number) => {
    dueMarketApi.get(`user/${id}`).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    if (token !== "") {
      getUser(Number(userId));
    }
  }, [userId, token]);

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
        toast.success("Cadastro feito com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Erro ao criar Conta, tentar outro email!");
      });
  };

  const postLogin = (data: SignInData) => {
    dueMarketApi
      .post("login", data)
      .then((res) => {
        localStorage.setItem(
          "@dueMarket:userId",
          JSON.stringify(res.data.user.id)
        );
        localStorage.setItem(
          "@dueMarket:token",
          JSON.stringify(res.data.accessToken)
        );
        setUserId(res.data.user.id);
        setToken(res.data.accessToken);
        toast.success("Login feito com sucesso!");

        if (res.data.user.type === "user") {
          navigate("/");
        } else {
          navigate("/user");
        }
      })
      .catch((res) => {
        toast.error("Erro ao fazer login, tentar outro email!");
        console.log(res);
      });
  };

  return (
    <UsersContext.Provider
      value={{ postUserMarket, postUser, postLogin, user, token, getUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
