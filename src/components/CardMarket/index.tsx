import { CardMarket } from "./style";

interface CardMarketComponentProps {
  name: string;
  image?: string;
  city: string;
  state: string;
  cep: string;
}

export const CardMarketComponent = ({
  name,
  image,
  city,
  state,
  cep,
}: CardMarketComponentProps) => {
  return (
    <CardMarket>
      <figure>
        <img src={image} alt="Mercado" />
      </figure>
      <div>
        <h2>{name}</h2>
        <h3>
          Cidade: {city} - Estado: {state} - CEP: {cep}
        </h3>
      </div>
    </CardMarket>
  );
};
