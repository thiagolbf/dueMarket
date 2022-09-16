import { Dispatch, SetStateAction, useState } from "react";
import { InputForm } from "../InputForm";
import { ModalProduto, HeaderModalProduto } from "./style";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";

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
        <HeaderModalProduto>
          <h2>Criar Produto</h2>
          <CloseButton onClick={() => setModalProduto(false)} />
        </HeaderModalProduto>
        <div>
          <InputForm error={false} label="Título" />
          <InputForm error={false} label="Categoria" />
          <InputForm error={false} label="Valor Antigo" />
          <InputForm error={false} label="Valor Atual" />
          <InputForm error={false} label="Imagem" />
          <Button>Cadastrar</Button>
        </div>
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
