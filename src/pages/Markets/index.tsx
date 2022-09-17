import { HeaderComponent } from "../../components/Header";
import { CardMarketComponent } from "../../components/CardMarket";
import { InputSearch } from "../../components/InputSearch";
import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../../providers/Users";
import { MarketList, Box, MarketCard, MarketListComponent } from "./style";
import { Link } from "react-router-dom";

interface MarketSearchProps {
  name: string;
  image: string;
  city: string;
  district: string;
  cep: string;
}

export const MarketsPage = () => {
  const { getUserMarket, nearProducts, getNearProducts, setNearProducts } =
    useContext(UsersContext);
  const { markets } = useContext(UsersContext);
  const [inputCep, setInputCep] = useState<string>("");

  const [nearMarket, setNearMarket] = useState<MarketSearchProps[]>(
    [] as MarketSearchProps[]
  );

  const checkCep = async (cep: string) => {
    const cepUser = await getCep(cep);

    if (cepUser.localidade) {
      getNearProducts(cepUser.localidade);
      console.log(cepUser.localidade);
    } else {
      console.log("erro");
    }
  };

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
      <MarketListComponent>
        <MarketList>
          {markets.map((value) => (
            <MarketCard key={value.id}>
              <Link to={`/markets/${value.id}`}>
                <CardMarketComponent
                  name={value.name}
                  image={value.image}
                  city={value.city}
                  state={value.state}
                  cep={value.cep}
                />
              </Link>
            </MarketCard>
          ))}
        </MarketList>
      </MarketListComponent>
    </>
  );
};

//<CardMarketComponent />
