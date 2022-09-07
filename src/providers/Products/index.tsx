import { createContext, ReactNode } from "react";

interface ProductsProviderData {}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};
