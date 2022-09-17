import { InputHTMLAttributes, ReactNode } from "react";

import { useContext } from "react";
import { CepContext } from "../../providers/Cep";
import { UsersContext } from "../../providers/Users";

import { FaSearch } from "react-icons/fa";

import { InputContainer } from "./style";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputCep: string;
  marketPage?: boolean;
  checkCep?: (cep: string) => void;
}

export const InputSearch = ({
  inputCep,
  marketPage,
  checkCep,
  ...rest
}: InputSearchProps) => {
  return (
    <InputContainer>
      <input {...rest} />

      {marketPage ? (
        <div onClick={() => checkCep?.(inputCep)}>
          <FaSearch />
        </div>
      ) : (
        <div onClick={() => checkCep?.(inputCep)}>
          <FaSearch />
        </div>
      )}
    </InputContainer>
  );
};
