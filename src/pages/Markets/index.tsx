import { HeaderComponent } from "../../components/Header";
import { CardMarketComponent } from "../../components/CardMarket";
import { InputSearch } from "../../components/InputSearch";
import { useContext, useState } from "react";
import { UsersContext } from "../../providers/Users";

export const MarketsPage = () => {
  const { getUserMarket, markets } = useContext(UsersContext);
  return (
    <>
      <HeaderComponent />
      <CardMarketComponent />
    </>
  );
};

//<CardMarketComponent />
