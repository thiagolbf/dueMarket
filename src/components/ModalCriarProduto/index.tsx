import { Dispatch, SetStateAction } from "react";
import { RiAddFill } from "react-icons/ri";
import { InputForm } from "../InputForm";
import { ModalProduto } from "./style";
import { Button } from "../Button";

interface ModalCriarProdutoProps {
  modalProduto: boolean;
  setModalProduto: Dispatch<SetStateAction<boolean>>;
}

interface TargetProps extends EventTarget {
  id: string;
}

export const ModalCriarProduto = ({
  modalProduto,
  setModalProduto,
}: ModalCriarProdutoProps) => {
  const handleEvent = (id: string) => {
    if (id === "modalProduto") {
      setModalProduto(false);
    }
  };

  return (
    <ModalProduto
      modalProduto={modalProduto}
      id="modalProduto"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <div>
        <div>
          <h3>Cadastrar Produto</h3>
          <button>
            <RiAddFill />
          </button>
        </div>
        <InputForm error={false} label="Título" />
        <InputForm error={false} label="Categoria" />
        <InputForm error={false} label="Valor Antigo" />
        <InputForm error={false} label="Valor Atual" />
        <InputForm error={false} label="Imagem" />
        <Button>Cadastrar</Button>
      </div>
    </ModalProduto>
  );
};

/*
título
categoria 
valor antigo
valor atual
imagem
*/
