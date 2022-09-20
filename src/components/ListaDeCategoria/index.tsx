import {
  Dispatch,
  SelectHTMLAttributes,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { MarketContext } from "../../providers/Market";
//import { ListaSelect } from "./style";
import { Nav } from "./style";

interface SelectProps {
  listCat: boolean;
  setValueCategory: Dispatch<SetStateAction<string>>;
  setListCat: Dispatch<SetStateAction<boolean>>;
}

export const ListaDeCategoria = ({
  listCat,
  setValueCategory,
  setListCat,
}: SelectProps) => {
  const { filterProductsByCategory } = useContext(MarketContext);

  const categoryList = [
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
  ];

  return (
    <Nav active={listCat}>
      {categoryList.map((category) => {
        return (
          <div key={category}>
            <button
              onClick={() => {
                filterProductsByCategory(category);
                setValueCategory(category);
                setListCat(!listCat);
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
    </Nav>
  );
};

/*
 <ListaSelect>
                <option>Frios</option>
                <option>Bebidas</option>
            </ListaSelect>
*/
