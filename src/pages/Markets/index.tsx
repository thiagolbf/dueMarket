import { HeaderComponent } from "../../components/Header";
import { CardMarketComponent } from "../../components/CardMarket";
import { InputSearch } from "../../components/InputSearch";
import { useContext, useState } from "react";
import { UsersContext } from "../../providers/Users";

export const MarketsPage = () => {
  return (
    <>
      <HeaderComponent />
      <CardMarketComponent />
    </>
  );
};

//<CardMarketComponent />
