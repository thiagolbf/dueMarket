import { createContext, ReactNode, useState } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";
interface CuponsProviderData {
  cupons: Cupons[];
  getCuponsByMarket: (userId: number, token: string) => void;
  createCupom: (userId: number, token: string, data: Cupons) => void;
  deleteCupom: (id: number, token: string) => void;
}

interface CuponsProviderProps {
  children: ReactNode;
}

interface Cupons {
  category: string;
  name: string;
  value: string;
  userId: number;
  id: number;
}

export const CuponsContext = createContext<CuponsProviderData>(
  {} as CuponsProviderData
);

export const CuponsProvider = ({ children }: CuponsProviderProps) => {
  const [cupons, setCupons] = useState<Cupons[]>([] as Cupons[]);

  //Função para pegar os cupons de um mercado específico;
  const getCuponsByMarket = (userId: number, token: string) => {
    dueMarketApi
      .get(`/cupons?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCupons(res.data);
      })
      .catch((err) => console.log(err));
  };

  //Função para criar um cupom;
  const createCupom = (userId: number, token: string, data: Cupons) => {
    const cupon = { ...data, userId };
    dueMarketApi
      .post(`/cupons`, cupon, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setCupons(res.data);
        toast.success("Cupom adicionado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível criar o cupom");
      });
  };

  //Função para deletar cupom;
  const deleteCupom = (id: number, token: string) => {
    dueMarketApi
      .delete(`/cupons/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCupons(res.data);
        toast.success("Cupom deletado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível deletar o cupom");
      });
  };

  return (
    <CuponsContext.Provider
      value={{ cupons, getCuponsByMarket, createCupom, deleteCupom }}
    >
      {children}
    </CuponsContext.Provider>
  );
};
