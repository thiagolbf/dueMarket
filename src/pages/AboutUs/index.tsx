import { HeaderComponent } from "../../components/Header";
import { AboutUsMain } from "./style";

export const AboutUsPage = () => {
  return (
    <>
      <HeaderComponent />
      <AboutUsMain>
        <h2>dueMarket</h2>
        <p>
          O Aplicativo voltado para mercados conscientes e consumidores atentos
          Os consumidores monitoram seus produtos para promoções especiais Os
          mercados terão mais uma via de acesso à diminuição de desperdício
        </p>
        <div>{/* Cards de devs */}</div>
      </AboutUsMain>
    </>
  );
};
