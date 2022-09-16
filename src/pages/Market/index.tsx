import { HeaderComponent } from "../../components/Header";
import {
  Box,
  Container,
  MainBox,
  SearchBox,
  Section,
  SectionProducts,
} from "./style";
import { FaBars } from "react-icons/fa";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";
import { ModalCupomComponent } from "../../components/ModalCupom";
import { CardProductComponent } from "../../components/CardProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dueMarketApi } from "../../services";

interface MarketProducts {
  email: string;
  password: string;
  name: string;
  type: string;
  cnpj: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  image: string;
  id: number;
  products: Products[];
}

interface Products {
  title: string;
  category: string;
  duedate: string;
  oldvalue: string;
  newvalue: string;
  image: string;
  userId: number;
  id: number;
}

export const MarketPage = () => {
  const { id } = useParams();
  const [market, setMarket] = useState<MarketProducts>({} as MarketProducts);

  const getMarket = (id: string) => {
    dueMarketApi
      .get(`users/${id}?_embed=products`)
      .then((res) => {
        setMarket(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (typeof id === "string") {
      getMarket(id);
    }
  }, []);

  return (
    <Container>
      <HeaderComponent />

      <Box>
        <h2>Lorem ipsum dolor sit amet.</h2>

        <SearchBox>
          <InputSearch inputCep="" />
          <Button>
            <FaBars />
            Todos
          </Button>
        </SearchBox>
      </Box>

      <MainBox>
        <h1>{market.name}</h1>

        <Section>
          <div>
            <figure>
              <img src={market.image} alt="" />
            </figure>
            <p>
              {`${market.street}, ${market.district}, ${market.city} - ${market.state}`}
              <br />
              {market.cep}
            </p>
          </div>
          <div></div>
        </Section>

        <SectionProducts>
          <h3>Produtos</h3>
          <div>
            {market.products?.map((value) => {
              return (
                <CardProductComponent
                  key={value.id}
                  img={value.image}
                  title={value.title}
                  date={value.duedate}
                  type={value.category}
                  previusValue={value.oldvalue}
                  newValue={value.newvalue}
                />
              );
            })}
          </div>
        </SectionProducts>
      </MainBox>
    </Container>
  );
};
