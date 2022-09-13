import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { CardProductComponent } from "../../components/CardProducts";
import { Box, Container, MarketContent, MarketName } from "./style";

import { FaArrowRight } from "react-icons/fa";

import { useState } from "react";

export const HomePage = () => {

  const { city } = useContext(CepContext);

  const [inputCep, setInputCep] = useState<string>("");

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
