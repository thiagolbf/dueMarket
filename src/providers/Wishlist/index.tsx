import { createContext, ReactNode, useEffect, useState } from "react";
import { dueMarketApi } from "../../services/index";
import { toast } from "react-toastify";
interface WhishListProviderData {
  whishlist: WhishList[];
  getWhishListByUser: (userId: number, token: string) => void;
  addProductWhishList: (userId: number, token: string, data: WhishList) => void;
  deletProductWhishlist: (
    id: number | undefined,
    token: string,
    userId: number
  ) => void;
}
interface WishListProviderProps {
  children: ReactNode;
}
interface WhishList {
  title: string;
  category: string;
  duedate: string;
  oldvalue: string;
  newvalue: string;
  image: string;
  userId?: number;
  id?: number;
}
export const WhishListContext = createContext<WhishListProviderData>(
  {} as WhishListProviderData
);
export const WhishListProvider = ({ children }: WishListProviderProps) => {
  const [whishlist, setWishList] = useState<WhishList[]>([] as WhishList[]);
  const getWhishListByUser = (userId: number, token: string) => {
    dueMarketApi
      .get(`/whishlist?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setWishList(res.data))
      .catch((err) => console.log(err));
  };
  const addProductWhishList = (
    userId: number,
    token: string,
    data: WhishList
  ) => {
    const whishlist = { ...data, userId };
    dueMarketApi
      .post(`/whishlist`, whishlist, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Adicionado produto a lista de desejos");
        getWhishListByUser(userId, token);
      })
      .catch((err) => {
        toast.error("Não foi possível adicionar produto a lista de desejos");
        console.log(err);
      });
  };
  const deletProductWhishlist = (
    id: number | undefined,
    token: string,
    userId: number
  ) => {
    dueMarketApi
      .delete(`/whishlist/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (whishlist.length > 1) {
          getWhishListByUser(userId, token);
        } else {
          setWishList([]);
        }
        toast.success("Produto deletado da lista de desejos");
      })
      .catch((err) => {
        toast.error("Não foi possível deletar o produto da lista de desejos");
      });
  };
  return (
    <WhishListContext.Provider
      value={{
        whishlist,
        getWhishListByUser,
        addProductWhishList,
        deletProductWhishlist,
      }}
    >
      {children}
    </WhishListContext.Provider>
  );
};
