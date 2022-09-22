import {
  Container,
  BackgroundContainer,
  FormContainer,
  GreenBox,
  TextContainer,
  HeaderBox,
} from "./style";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormMarket } from "../../components/FormMarket";
import { FormUser } from "../../components/FormUser";
import { GlobalStyle } from "./style";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState<boolean>(false);

  return (
    <Container>
      <GlobalStyle />
      <BackgroundContainer>
        <TextContainer>
          <h1>dueMarket</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, libero venenatis cursus vestibulum, felis quam imperdiet
            odio, quis consectetur quam risus ac urna. Aenean.
          </p>
        </TextContainer>
        <FormContainer>
          <HeaderBox>
            <div>
              <button onClick={() => navigate("/login")}>Voltar</button>
              <button onClick={() => setUserType(!userType)}>
                Trocar formulario
              </button>
            </div>

            <h2>Cadastro</h2>
          </HeaderBox>
          {userType ? <FormMarket /> : <FormUser />}
        </FormContainer>
        <GreenBox />
      </BackgroundContainer>
    </Container>
  );
};
