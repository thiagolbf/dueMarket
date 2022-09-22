import {
  HeaderBox,
  Container,
  MarketContent,
  LinkToMarket,
  CardContainer,
} from "./style";
import { HeaderComponent } from "../../components/Header";
import { InputSearch } from "../../components/InputSearch";
import { CardProductComponent } from "../../components/CardProducts";
import { UsersContext } from "../../providers/Users";
import { CepContext } from "../../providers/Cep";
import {
  useContext,
  KeyboardEvent,
  useState,
  useEffect,
  Fragment,
} from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { LinearProgress, Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const HomePage = () => {
  const { nearProducts, user, getNearProducts, isLoading } =
    useContext(UsersContext);
  const { getCep } = useContext(CepContext);
  const [inputCep, setInputCep] = useState<string>("");
  const checkCep = async (cep: string) => {
    const cepUser = await getCep(cep);
    if (cepUser.localidade) {
      getNearProducts(cepUser.localidade);
      console.log(cepUser.cep);
    } else {
      toast.error("Não existem mercardos cadastrados com esse CEP");
      setInputCep("");
    }
  };
  useEffect(() => {
    if (user.cep) {
      const get = async () => {
        const cepUser = await getCep(user.cep);
        getNearProducts(cepUser.localidade);
      };
      get();
    }
  }, [user]);
  return (
    <>
      <HeaderComponent />
      <HeaderBox>
        <p>Mercados conscientes e consumidores atentos</p>
      </HeaderBox>
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
        {isLoading ? (
          <Box>
            <LinearProgress color="primary" />
          </Box>
        ) : (
          nearProducts.map((market, id) => {
            return (
              <Fragment key={id}>
                <LinkToMarket to={`markets/${market.id}`}>
                  <p>{market.name} </p>
                  <FaArrowRight />
                </LinkToMarket>
                <CardContainer>
                  {market.products.map((product, id) => {
                    return (
                      <CardProductComponent
                        key={id}
                        date={product.duedate}
                        img={product.image}
                        newValue={product.newvalue}
                        previusValue={product.oldvalue}
                        title={product.title}
                        type={product.category}
                        userType={
                          user.type === "cliente" ? "cliente" : undefined
                        }
                      />
                    );
                  })}
                </CardContainer>
              </Fragment>
            );
          })
        )}
      </MarketContent>
    </>
  );
};
