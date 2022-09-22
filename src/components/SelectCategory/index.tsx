import {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
} from "react";

import { Container } from "./style";

interface SelectCategoryProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: boolean;
  modal?: boolean;
}

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectCategoryProps
> = ({ error, label, modal = false, ...rest }, ref) => {
  return (
    <Container error={error} modal={modal}>
      <select placeholder="" {...rest} ref={ref}>
        <option value="Açougue">Açougue</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Bebidas Alcóolicas">Bebidas Alcóolicas</option>
        <option value="Biscoiteria">Biscoiteria</option>
        <option value="Confeitaria">Confeitaria</option>
        <option value="Congelados">Congelados</option>
        <option value="Doces">Doces</option>
        <option value="Enlatados">Enlatados</option>
        <option value="Frios">Frios</option>
        <option
          value="Higiene Pessoal
"
        >
          Higiene Pessoal
        </option>
        <option value="Laticínios">Laticínios</option>
        <option value="Massas">Massas</option>
        <option value="Material de limpeza">Material de limpeza</option>
        <option value="Petshop">Petshop</option>
        <option value="Salgadinhos">Salgadinho</option>
        <option value="Temperos e Condimentos">Temperos e Condimentos</option>
      </select>
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

export const SelectCategory = forwardRef(SelectBase);
