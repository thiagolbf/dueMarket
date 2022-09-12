import { SelectHTMLAttributes } from "react";
import { ListaSelect } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    //option:string;
}


export const ListaDeCategoria = ({ ...rest} : SelectProps) =>{

    return (
        <div>
            <ListaSelect>
                <option>Frios</option>
                <option>Bebidas</option>
            </ListaSelect>
        </div>
    )
}

