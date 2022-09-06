import { createContext, ReactNode } from "react";

interface CepProviderData {}

interface CepProviderProps {
  children: ReactNode;
}

export const CepContext = createContext<CepProviderData>({} as CepProviderData);

export const CepProvider = ({ children }: CepProviderProps) => {
  return <CepContext.Provider value={{}}>{children}</CepContext.Provider>;
};
