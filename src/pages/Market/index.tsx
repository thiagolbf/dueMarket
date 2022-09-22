import { HeaderComponent } from "../../components/Header";
import {
  Box,
  Container,
  MainBox,
  MarketDataBox,
  ProductList,
  SearchBox,
  Section,
  SectionProducts,
} from "./style";
import { FaBars } from "react-icons/fa";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";
import { CardProductComponent } from "../../components/CardProducts";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CupomList } from "../../components/CupomList";
import { UsersContext } from "../../providers/Users";
import { ListaDeCategoria } from "../../components/ListaDeCategoria";
import { MarketContext } from "../../providers/Market";
import userEvent from "@testing-library/user-event";

export const MarketPage = () => {
  const { token, user } = useContext(UsersContext);

  const { getMarket, filterProducts, market, productsMarket } =
    useContext(MarketContext);

  const { id } = useParams();

  const [marketId, setMarketId] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (typeof id === "string") {
      getMarket(id);
      setMarketId(id);
    }
  }, []);

  const [valueCategory, setValueCategory] = useState<string>("");
  const [listCat, setListCat] = useState(true);

  return (
    <Container>
      <HeaderComponent />

      <Box>
        <h2>Mercados conscientes e consumidores atentos</h2>

        <SearchBox>
          <InputSearch
            inputCep={inputValue}
            fn={filterProducts}
            type="text"
            placeholder="Digite o nome do produto"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            marketPage={true}
          />
          <div>
            <Button onClick={() => setListCat(!listCat)}>
              <FaBars />
              {valueCategory === "" ? "Todos" : valueCategory}
            </Button>
            <ListaDeCategoria
              listCat={listCat}
              setValueCategory={setValueCategory}
              setListCat={setListCat}
            />
          </div>
        </SearchBox>
      </Box>

      <MainBox>
        <h1>{market.name}</h1>

        <Section>
          <MarketDataBox>
            <figure>
              <img src={market.image} alt="" />
            </figure>
            <p>
              {`${market.street}, ${market.district}, ${market.city} - ${market.state}`}
              <br />
              {market.cep}
            </p>
          </MarketDataBox>

          {token !== "" && <CupomList id={marketId} />}
        </Section>

        <SectionProducts>
          <h3>Produtos</h3>
          <ProductList>
            {productsMarket.map((value) => {
              return (
                <CardProductComponent
                  key={value.id}
                  img={value.image}
                  title={value.title}
                  date={value.duedate}
                  type={value.category}
                  previusValue={value.oldvalue}
                  newValue={value.newvalue}
                  userType={user.type === "cliente" ? "cliente" : undefined}
                />
              );
            })}
          </ProductList>
        </SectionProducts>
      </MainBox>
    </Container>
  );
};
