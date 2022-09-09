import { HeaderComponent } from "../../components/Header";
import { Box, Container } from "./style";

export const HomePage = () => {
  return (
    <>
      <HeaderComponent />

      <Box>
        <p>Lorem ipsum dolor sit amet</p>
      </Box>

      <Container>
        <p>Use seu CEP para visualizar mercados e produtos perto de você</p>
        <input type="number" placeholder="Seu CEP" />
        <span>*Apenas números</span>
      </Container>
    </>
  );
};
