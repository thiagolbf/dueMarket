import { ReactNode } from "react";
import { CepProvider } from "./Cep";
import { UsersProvider } from "./Users";
import { ProductsProvider } from "./Products";
import { CuponsProvider } from "./Cupons";
import { WhishListProvider } from "./Wishlist";
interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <WhishListProvider>
      <CuponsProvider>
        <ProductsProvider>
          <UsersProvider>
            <CepProvider>{children}</CepProvider>
          </UsersProvider>
        </ProductsProvider>
      </CuponsProvider>
    </WhishListProvider>
  );
};
