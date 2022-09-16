import { Dispatch, SetStateAction, useState } from "react";
import { InputForm } from "../InputForm";
import { ModalProduto, HeaderModalProduto } from "./style";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import { useContext } from "react";
import { ProductsContext } from "../../providers/Products";
import { UsersContext } from "../../providers/Users";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

interface ModalCriarProdutoProps {
  modalProduto: boolean;
  setModalProduto: Dispatch<SetStateAction<boolean>>;
  title: string;
  category: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface TargetProps extends EventTarget {
  id: string;
}

export const ModalCriarProduto = ({
  modalProduto,
  setModalProduto,
}: ModalCriarProdutoProps) => {
  const { createProduct } = useContext(ProductsContext);
  const { token, userId } = useContext(UsersContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    oldPrice: yup.string().required("Campo obrigatório"),
    newPrice: yup.string().required("Campo obrigatório"),
    image: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModalCriarProdutoProps>({ resolver: yupResolver(schema) });

  const productSubmit = async ({
    title,
    category,
    oldPrice,
    newPrice,
    image,
  }: ModalCriarProdutoProps) => {
    const objectProduct = {
      title,
      category,
      oldPrice,
      newPrice,
      image,
    };

    createProduct(userId, token, objectProduct);
  };

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
        <form onSubmit={handleSubmit(productSubmit)}>
          <InputForm
            type="text"
            {...register("title")}
            error={!!errors.title}
            label="Título"
          />
          <InputForm
            type="text"
            {...register("category")}
            error={!!errors.category}
            label="Categoria"
          />
          <InputForm
            type="text"
            {...register("oldPrice")}
            error={!!errors.oldPrice}
            label="Valor Antigo"
          />
          <InputForm
            type="text"
            {...register("newPrice")}
            error={!!errors.newPrice}
            label="Valor Atual"
          />
          <InputForm
            type="text"
            {...register("image")}
            error={!!errors.image}
            label="Imagem"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
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
