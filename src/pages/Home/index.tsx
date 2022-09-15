import { Box, Container, MarketContent, MarketName } from "./style";

import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { UsersContext } from "../../providers/Users";
import { CupomList } from "../../components/CupomList";
import { Box, Container, MarketContent, MarketName } from "./style";
import { CepContext } from "../../providers/Cep";
import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useState, useEffect, useContext } from "react";

export const HomePage = () => {
  const { nearProducts } = useContext(UsersContext);
  const [inputCep, setInputCep] = useState<string>("");

  useEffect(() => {
    console.log(nearProducts);
  }, [nearProducts]);

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
        <MarketName>
          <p>Pão de Açucar</p>
          <FaArrowRight />
        </MarketName>
        <div></div>
      </MarketContent>
    </>
  );
};
