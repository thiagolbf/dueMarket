import { createContext, ReactNode } from "react";

interface WhishListProviderData {}

interface WishListProviderProps {
  children: ReactNode;
}

export const WhishListContext = createContext<WhishListProviderData>(
  {} as WhishListProviderData
);

export const WhishListProvider = ({ children }: WishListProviderProps) => {
  return (
    <WhishListContext.Provider value={{}}>{children}</WhishListContext.Provider>
  );
};
