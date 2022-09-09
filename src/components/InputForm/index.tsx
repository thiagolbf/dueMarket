import { forwardRef,
    ForwardRefRenderFunction,
    InputHTMLAttributes, } from "react";
import { InputFormStyle } from "./style";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    error: boolean;
   
}

/* Instrução do label
Quando for usar este input no formulário, o modo como deve ser input é o seguinte:
<InputForm label="<o nome do label que se deseja colocar>"/>
*/

/* Instrução do Error
O "error" está com boolean de modo que no styled se ele for true, aparece a borda vermelha.
Desse modo, o código a ser feito no formulário precisa fazer com que o erro de 
preenchimento mude o "error" para true.
Se isso causar conflito e for melhor o modo oiginal "error?", avisem o Paulo ver isso
*/

const  InputBase : ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = (
    { label, error, ...rest },
    ref
  ) => {
return(
    <InputFormStyle error={error}>
        <input type="text" placeholder=" "  {...rest} id={label} ref={ref} />
        <label htmlFor={label} >{label}</label>       
    </InputFormStyle>
)
}

export const InputForm = forwardRef(InputBase);