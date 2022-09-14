import { InputHTMLAttributes, ReactNode } from "react";

import { useContext } from "react";
import { CepContext } from "../../providers/Cep";

import { FaSearch } from "react-icons/fa";

import { InputContainer } from "./style";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputCep: string;
}

export const InputSearch = ({ inputCep, ...rest }: InputSearchProps) => {
  const { getCep } = useContext(CepContext);

  return (
    <InputContainer>
      <input {...rest} />

      <div
        onClick={() => {
          getCep(inputCep);
        }}
      >
        <FaSearch />
      </div>
    </InputContainer>
  );
};
