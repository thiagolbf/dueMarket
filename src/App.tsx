import { RoutesComponent } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesComponent />
      <div>TESTE</div>
    </>
  );
};
