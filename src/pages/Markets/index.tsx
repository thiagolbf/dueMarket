import { HeaderComponent } from "../../components/Header";
import { CardMarketComponent } from "../../components/CardMarket";
import { InputSearch } from "../../components/InputSearch";
import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../../providers/Users";
import { MarketList, Box } from "./style";
import { Link } from "react-router-dom";

export const MarketsPage = () => {
  const { getUserMarket } = useContext(UsersContext);
  const { markets } = useContext(UsersContext);
  const [inputCep, setInputCep] = useState<string>("");
  useEffect(() => {
    getUserMarket();
  }, []);

  return (
    <>
      <HeaderComponent />

      <Box>
        <p>Lorem ipsum dolor sit amet</p>
        <InputSearch
          type="text"
          placeholder="Digite seu CEP"
          value={inputCep}
          onChange={(e) => {
            setInputCep(e.target.value);
          }}
          inputCep={inputCep}
        />
      </Box>

      {markets.length > 0
        ? markets.map((value) => (
            <MarketList key={value.id}>
              <Link to={`/markets/${value.id}`}>
                <CardMarketComponent
                  name={value.name}
                  image={value.image}
                  city={value.city}
                  state={value.state}
                  cep={value.cep}
                />
              </Link>
            </MarketList>
          ))
        : null}
    </>
  );
};

//<CardMarketComponent />
