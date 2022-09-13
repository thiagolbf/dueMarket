import { InputHTMLAttributes, ReactNode } from "react";

import { useContext } from "react";
import { CepContext } from "../../providers/Cep";

import { FaSearch } from "react-icons/fa";

import { InputContainer } from "./style";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputCep: string;
  marketPage?: boolean;
}

export const InputSearch = ({
  inputCep,
  marketPage,
  ...rest
}: InputSearchProps) => {
  const { getCep } = useContext(CepContext);

  return (
    <InputContainer>
      <input {...rest} />

      {marketPage ? (
        <div onClick={() => getCep(inputCep)}>
          <FaSearch />
        </div>
      ) : (
        <div onClick={() => getCep(inputCep)}>
          <FaSearch />
        </div>
      )}
    </InputContainer>
  );
};
