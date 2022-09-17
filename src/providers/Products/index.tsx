import { createContext, ReactNode, useEffect, useState } from "react";
import { dueMarketApi } from "../../services";
import { toast } from "react-toastify";

interface ProductsProviderData {
  products: Products[];
  getProductByMarket: (userId: number) => void;
  createProduct: (userId: number, token: string, data: Products) => void;
  deleteProduct: (toekn: string, id: number | undefined, userId: number) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface Products {
  title: string;
  category: string;
  duedate: string;
  oldvalue: string;
  newvalue: string;
  image: string;
  userId: number;
  id?: number;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Products[]>([] as Products[]);

  const getProductByMarket = (userId: number) => {
    dueMarketApi
      .get(`/products?userId=${userId}`)
      .then((res) => {
        setProducts(res.data)})
      .catch((error) => console.log(error));
  };

  const createProduct = (userId: number, token: string, data: Products) => {
    const product = { ...data, userId };
    console.log(product)
    dueMarketApi
      .post(`/products`, product, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Adicionado com sucesso");
        getProductByMarket(userId);
      })
      .catch((error) => toast.error("Erro ao adicionar o produto"));
  };

  const deleteProduct = (token: string, id: number | undefined, userId: number) => {
    dueMarketApi
      .delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        getProductByMarket(userId);
        toast.success("Deletado com sucesso");
      })
      .catch(() => toast.error("Erro ao deletar o produto"));
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductByMarket,
        deleteProduct,
        createProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
