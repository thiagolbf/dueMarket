import { Dispatch, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { HeaderModalComponent } from "../HeaderModal";
import { CuponsContext } from "../../providers/Cupons";

import { Content, Modal, Container } from "./style";
import { UsersContext } from "../../providers/Users";

interface ModalCreateCupomProps {
  modalCreate: boolean;
  setModalCreateCupom: Dispatch<SetStateAction<boolean>>;
}

interface TargetProps extends EventTarget {
  id: string;
}

interface CupomData {
  category: string;
  name: string;
  value: string;
}

export const ModalCreateCupom = ({
  setModalCreateCupom,
}: ModalCreateCupomProps) => {
  const handleEvent = (id: string) => {
    if (id === "modalCreate") {
      setModalCreateCupom(false);
    }
  };

  const { createCupom, cupons } = useContext(CuponsContext);
  const { user, token } = useContext(UsersContext);

  const cupomSchema = yup.object().shape({
    category: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    value: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CupomData>({ resolver: yupResolver(cupomSchema) });

  const handleCreateCupom = (data: CupomData) => {
    const newData = { userId: user.id, ...data };
    createCupom(user.id, token, newData);
  };

  return (
    <Modal
      id="modalCreate"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <Container>
        <HeaderModalComponent setState={setModalCreateCupom}>
          Cadastrar cupom
        </HeaderModalComponent>
        <Content>
          <form onSubmit={handleSubmit(handleCreateCupom)}>
            <InputForm
              modal
              type="text"
              {...register("category")}
              label="Categoria"
              error={!!errors.category}
            />
            <InputForm
              modal
              type="text"
              {...register("value")}
              label="Valor do desconto (porcentagem)"
              error={!!errors.value}
            />
            <InputForm
              modal
              type="text"
              {...register("name")}
              label="Nome do produto"
              error={!!errors.name}
            />
            <Button blueForm fInter fSize18>
              Gerar cupom
            </Button>
          </form>
        </Content>
      </Container>
    </Modal>
  );
};
