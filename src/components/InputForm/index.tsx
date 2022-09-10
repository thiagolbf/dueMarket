import { InputHTMLAttributes } from "react";
import { InputFormStyle } from "./style";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  //error?: string;
}

/*
Quando for usar este input no formulário, o modo como deve ser input é o seguinte:
<InputForm label="<o nome do label que se deseja colocar>"/>
*/

export const InputForm = ({ label, ...rest }: InputFormProps) => {
  return (
    <InputFormStyle>
      <input type="text" placeholder=" " {...rest} />
      <label>{label}</label>
    </InputFormStyle>
  );
};
