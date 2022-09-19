import { InputHTMLAttributes, ReactNode } from "react";

import { useContext } from "react";
import { CepContext } from "../../providers/Cep";
import { UsersContext } from "../../providers/Users";

import { FaSearch } from "react-icons/fa";

import { InputContainer } from "./style";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputCep: string;
  marketPage?: boolean;
  fn?: (value: string) => void;
}

export const InputSearch = ({
  inputCep,
  marketPage,
  fn,
  ...rest
}: InputSearchProps) => {
  const { getCep } = useContext(CepContext);
  const { getNearProducts } = useContext(UsersContext);

  const checkCep = async (cep: string) => {
    const cepUser = await getCep(cep);

    if (cepUser.localidade) {
      getNearProducts(cepUser.localidade);
      console.log(cepUser.localidade);
    } else {
      console.log("erro");
    }
  };

  return (
    <InputContainer>
      <input {...rest} />

      {marketPage ? (
        <div
          onClick={() => {
            if (fn !== undefined) {
              fn(inputCep);
            }
          }}
        >
          <FaSearch />
        </div>
      ) : (
        <div onClick={() => checkCep(inputCep)}>
          <FaSearch />
        </div>
      )}
    </InputContainer>
  );
};
