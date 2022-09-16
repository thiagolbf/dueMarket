import { CartProduct } from "./style";
import { MdClose } from "react-icons/md";

import { TbHeartMinus, TbHeartPlus } from "react-icons/tb";

interface Market {
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
  id?: number;
}

interface User {
  email: string;
  password: string;
  name: string;
  type: string;
  cpf: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  id?: number;
}

interface CardProductComponentProps {
  img: string;
  title: string;
  date: string;
  type: string;
  previusValue: string;
  newValue: string;
  user: Market | User;
  wishlist?: boolean;
}

export const CardProductComponent = ({
  img,
  title,
  date,
  type,
  previusValue,
  newValue,
  user,
  wishlist,
}: CardProductComponentProps) => {
  return (
    <CartProduct>
      <figure>
        {user.type === "mercado" && (
          <button>
            <MdClose />
          </button>
        )}
        <img src={img} alt={title} />
      </figure>
      <div>
        <div>
          <h2>{title}</h2>
          {user.type === "user" && (
            <button>
              wishlist ?
              <TbHeartMinus />
              :
              <TbHeartPlus />
            </button>
          )}



        </div>
        <h3>Data de vencimento: {date}</h3>
        <h3>{type}</h3>
        <h4>De R$ {previusValue}</h4>
        <h4>Por R$ {newValue}</h4>
      </div>
    </CartProduct>
  );
};
