import { SelectHTMLAttributes, useContext, useState } from "react";
import { MarketContext } from "../../providers/Market";
//import { ListaSelect } from "./style";
import { Mobile, Nav } from "./style";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  //option:string;
}

export const ListaDeCategoria = ({ ...rest }: SelectProps) => {
  const [listCat, setlistCat] = useState(true);

  const { filterProductsByCategory } = useContext(MarketContext);

  const [categoryList, setCategoryList] = useState<string[]>([
    "Confeitaria",
    "Enlatados",
    "Congelados",
    "Frios",
    "bebidas",
    "bebidas alcoólicas",
    "massas",
    "higiene pessoal",
    "material de limpeza",
    "biscoiteria",
    "açougue",
    "laticinios",
    "temperos e condimentos",
    "doces",
    "salgadinho/snacks",
    "petshop",
  ]);

  return (
    <div>
      <Mobile onClick={() => setlistCat(!listCat)} active={listCat}>
        <span />
        <span />
        <span />
      </Mobile>
      <Nav active={listCat}>
        {categoryList.map((category) => {
          return (
            <div>
              <button
                onClick={() => {
                  filterProductsByCategory(category);
                }}
              >
                {category}
              </button>
            </div>
          );
        })}
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
