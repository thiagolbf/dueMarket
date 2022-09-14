import { SelectHTMLAttributes, useState } from "react";
//import { ListaSelect } from "./style";
import { Mobile, Nav } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  //option:string;
}

export const ListaDeCategoria = ({ ...rest }: SelectProps) => {
  const [listCat, setlistCat] = useState(true);

  return (
    <div>
      <Mobile onClick={() => setlistCat(!listCat)} active={listCat}>
        <span />
        <span />
        <span />
      </Mobile>
      <Nav active={listCat}>
        <div>
          <button>Confeitaria</button>
        </div>
        <div>
          <button>Enlatados</button>
        </div>
        <div>
          <button>Congelados</button>
        </div>
        <div>
          <button>Frios</button>
        </div>
        <div>
          <button>bebidas</button>
        </div>
        <div>
          <button>bebidas alcoólicas</button>
        </div>
        <div>
          <button>massas</button>
        </div>
        <div>
          <button>higiene pessoal</button>
        </div>
        <div>
          <button>material de limpeza</button>
        </div>
        <div>
          <button>biscoiteria</button>
        </div>
        <div>
          <button>açougue</button>
        </div>
        <div>
          <button>laticinios</button>
        </div>
        <div>
          <button>temperos e condimentos</button>
        </div>
        <div>
          <button>doces</button>
        </div>
        <div>
          <button>salgadinho/snacks</button>
        </div>
        <div>
          <button>petshop</button>
        </div>
      </Nav>
    </div>
  );
};

/*
 <ListaSelect>
                <option>Frios</option>
                <option>Bebidas</option>
            </ListaSelect>
*/
