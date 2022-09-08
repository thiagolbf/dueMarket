import { createContext, ReactNode } from "react";

interface UsersProviderData {}

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext<UsersProviderData>(
  {} as UsersProviderData
);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};
