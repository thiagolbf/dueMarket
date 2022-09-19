import {
  Box,
  Container,
  MarketContent,
  LinkToMarket,
  CardContainer,
} from "./style";
import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { CardProductComponent } from "../../components/CardProducts";
import { UsersContext } from "../../providers/Users";

import { KeyboardEvent } from "react";
import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useState, useEffect } from "react";
import { CepContext } from "../../providers/Cep";

export const HomePage = () => {
  const { nearProducts, user, getNearProducts } = useContext(UsersContext);
  const { getCep } = useContext(CepContext);

  const [inputCep, setInputCep] = useState<string>("");

  const checkCep = async (cep: string) => {
    const cepUser = await getCep(cep);

    if (cepUser.localidade) {
      getNearProducts(cepUser.localidade);
      console.log(cepUser.localidade);
    } else {
      console.log("erro");
    }
  };

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
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
            e.key === "Enter" && checkCep(inputCep)
          }
          onChange={(e) => {
            setInputCep(e.target.value);
          }}
          inputCep={inputCep}
          checkCep={checkCep}
        />

        <span>*apenas números</span>
      </Container>

      <MarketContent>
        {nearProducts.map((market) => {
          return (
            <>
              <LinkToMarket key={market.id} to={`markets/${market.id}`}>
                <p>{market.name} </p>
                <FaArrowRight />
              </LinkToMarket>
              <CardContainer>
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
                      userType={user.type === "cliente" ? "cliente" : undefined}
                    />
                  );
                })}
              </CardContainer>
            </>
          );
        })}
      </MarketContent>
    </>
  );
};
