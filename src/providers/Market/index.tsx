import { createContext, ReactNode, useState } from "react";
import { dueMarketApi } from "../../services";

interface MarketProviderData {
  getMarket: (id: string) => void;
  filterProducts: (value: string) => void;
  market: MarketProducts;
  productsMarket: Products[];
  filterProductsByCategory: (value: string) => void;
}

interface MarketProviderProps {
  children: ReactNode;
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

export const MarketContext = createContext<MarketProviderData>(
  {} as MarketProviderData
);

export const MarketProvider = ({ children }: MarketProviderProps) => {
  const [market, setMarket] = useState<MarketProducts>({} as MarketProducts);
  const [productsMarket, setProductsMarket] = useState<Products[]>(
    [] as Products[]
  );

  const getMarket = (id: string) => {
    dueMarketApi
      .get(`users/${id}?_embed=products`)
      .then((res) => {
        setMarket(res.data);
        setProductsMarket(res.data.products);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterProducts = (value: string) => {
    setProductsMarket(
      market.products.filter((product: Products) => {
        return (
          product.title.toLowerCase().includes(value.toLowerCase()) === true
        );
      })
    );
  };

  const filterProductsByCategory = (value: string) => {
    setProductsMarket(
      market.products.filter((product: Products) => {
        return product.category.toLowerCase() === value.toLowerCase();
      })
    );
  };

  return (
    <MarketContext.Provider
      value={{
        getMarket,
        filterProducts,
        market,
        productsMarket,
        filterProductsByCategory,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
