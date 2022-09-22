import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { InputFormStyle } from "./style";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: boolean;
  modal?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = (
  { modal = false, label, error, ...rest },
  ref
) => {
  return (
    <InputFormStyle error={error} modal={modal}>
      <input type="text" placeholder=" " {...rest} id={label} ref={ref} />
      <label htmlFor={label}>{label}</label>
    </InputFormStyle>
  );
};

export const InputForm = forwardRef(InputBase);
