import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  setNearProducts: Dispatch<SetStateAction<MarketProducts[]>>;
  markets: UserSubmitData[];
  userId: number;
  patchUser: (data: NewUserData, token: string, userId: number) => void;
  logout: () => void;
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

interface NewUserData {
  name: string;
  email: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  cpf?: string;
  cnpj?: string;
  image?: string;
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
    Number(localStorage.getItem("@dueMarket:userId")) || 0
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

  const patchUser = (data: NewUserData, token: string, userId: number) => {
    dueMarketApi
      .patch(`users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Usuario atualizado com sucesso");
        setUser(res.data);
      })
      .catch((err) => toast.error("Não foi possivel atualizar o seu usuario"));
  };

  const logout = () => {
    localStorage.clear();
    setUserId(0);
    setToken("");
    setUser({} as UserSubmitData);
    navigate("/");
  };

  const postUserMarket = (data: UserSubmitData) => {
    dueMarketApi
      .post("users", data)
      .then((res) => {
        navigate("/login");
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

        if (res.data.user.type === "cliente") {
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
        setNearProducts,
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
        userId,
        patchUser,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
