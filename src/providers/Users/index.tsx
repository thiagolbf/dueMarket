import { createContext, ReactNode, useEffect, useState } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface UsersProviderData {
  postUser: (data: UserSubmitData) => void;
  postUserMarket: (data: UserSubmitData) => void;
  postLogin: (data: SignInData) => void;
  user: UserSubmitData;
  token: string;
  getUser: (id: number) => void;
  getUserMarket: () => void;
  nearProducts: MarketProducts[];
  getNearProducts: (city: string) => void;
  markets: UserSubmitData[];
}

interface UserSubmitData {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj?: string;
  cpf?: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  image?: string;
  id?: number;
}

interface UsersProviderProps {
  children: ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

interface MarketProducts {
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
  id: number;
  products: Products[];
}

interface Products {
  title: string;
  category: string;
  duedate: string;
  oldvalue: string;
  newvalue: string;
  image: string;
  userId: number;
  id: number;
}

export const UsersContext = createContext<UsersProviderData>(
  {} as UsersProviderData
);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const navigate = useNavigate();

  const [nearProducts, setNearProducts] = useState<MarketProducts[]>(
    [] as MarketProducts[]
  );
  const [user, setUser] = useState<UserSubmitData>({} as UserSubmitData);
  const [markets, setMarkets] = useState<UserSubmitData[]>(
    [] as UserSubmitData[]
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@dueMarket:userId") || ""
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("@dueMarket:token") || ""
  );

  const getUser = (id: number) => {
    dueMarketApi.get(`users/${id}`).then((res) => {
      setUser(res.data);
    });
  };

  const getUserMarket = () => {
    dueMarketApi.get("users?type=mercado").then((res) => {
      setMarkets(res.data);
    });
  };

  useEffect(() => {
    if (token !== "") {
      getUser(Number(userId));
    }
  }, [userId, token]);

  const postUserMarket = (data: UserSubmitData) => {
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
        localStorage.setItem("@dueMarket:token", res.data.accessToken);
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

    //FUNÇÃO PARA VERIFICAR OS MERCADOS;
  };
  const getNearProducts = (cidade: string) => {
    dueMarketApi
      .get(`/users?_embed=products&type=mercado&city=${cidade}`)
      .then((res) => setNearProducts(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <UsersContext.Provider
      value={{
        postUserMarket,
        postUser,
        postLogin,
        user,
        token,
        getUser,
        getUserMarket,
        getNearProducts,
        nearProducts,
        markets,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
