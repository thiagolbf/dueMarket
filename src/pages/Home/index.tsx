import { Box, Container, MarketContent, LinkToMarket } from "./style";
import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { CardProductComponent } from "../../components/CardProducts";
import { UsersContext } from "../../providers/Users";

import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useState, useEffect } from "react";

export const HomePage = () => {
  const { nearProducts } = useContext(UsersContext);

  const [inputCep, setInputCep] = useState<string>("");

  useEffect(() => {}, [nearProducts]);

  return (
    <>
      <HeaderComponent />

      <Box>
        <p>Lorem ipsum dolor sit amet</p>
      </Box>

      <Container>
        <p>Use seu CEP para visualizar mercados e produtos perto de você</p>
        <InputSearch
          type="text"
          placeholder="Digite seu CEP"
          value={inputCep}
          onChange={(e) => {
            setInputCep(e.target.value);
          }}
          inputCep={inputCep}
        />

        <span>*apenas números</span>
      </Container>

      <MarketContent>
        {nearProducts.map((market) => {
          return (
            <>
              <LinkToMarket key={market.id} to={`market/:${market.id}`}>
                <p>{market.name} </p>
                <FaArrowRight />
              </LinkToMarket>
              {market.products.map((product) => {
                return (
                  <CardProductComponent
                    key={product.id}
                    date={product.duedate}
                    img={product.image}
                    newValue={product.newvalue}
                    previusValue={product.oldvalue}
                    title={product.title}
                    type={product.category}
                  />
                );
              })}
            </>
          );
        })}
      </MarketContent>
    </>
  );
};
