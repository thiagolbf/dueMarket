import { createContext, ReactNode } from "react";

interface CuponsProviderData {}

interface CuponsProviderProps {
  children: ReactNode;
}

export const CuponsContext = createContext<CuponsProviderData>(
  {} as CuponsProviderData
);

export const CuponsProvider = ({ children }: CuponsProviderProps) => {
  return <CuponsContext.Provider value={{}}>{children}</CuponsContext.Provider>;
};
