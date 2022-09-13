import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { Box, Container } from "./style";

import { useContext } from "react";
import { CepContext } from "../../providers/Cep";

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
        <p>{city}</p>
      </Container>
    </>
  );
};
