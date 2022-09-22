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
          O Aplicativo voltado para mercados conscientes e consumidores atentos
          Os consumidores monitoram seus produtos para promoções especiais
          Os mercados terão mais uma via de acesso à diminuição de desperdício
          </p>
        </TextContainer>
        <FormContainer>
          <HeaderBox>
            <div>
              <button onClick={() => navigate("/login")}>Voltar</button>
              <button onClick={() => setUserType(!userType)}>
                {!userType ? 'Trocar para CNPJ' : "Trocar para CPF"}
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
