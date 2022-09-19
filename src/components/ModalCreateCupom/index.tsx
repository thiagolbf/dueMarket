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
  setModalCupom: Dispatch<SetStateAction<boolean>>;
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
  modalCreate,
  setModalCupom,
}: ModalCreateCupomProps) => {
  const handleEvent = (id: string) => {
    if (id === "modalCreate") {
      setModalCreateCupom(false);
      setModalCupom(true);
      reset();
    }
  };

  const { createCupom } = useContext(CuponsContext);
  const { user, token } = useContext(UsersContext);

  const cupomSchema = yup.object().shape({
    category: yup.string().required("Campo obrigatório"),
    value: yup
      .string()
      .matches(/^[1-9][0-9]?$/)
      .min(1, "Valor mínimo de 1%")
      .max(2, "Valor máximo de 99%")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CupomData>({ resolver: yupResolver(cupomSchema) });

  const handleCreateCupom = (data: CupomData) => {
    data.value += "%";
    const newData = { userId: user.id, ...data };
    createCupom(user.id, token, newData);
    setModalCreateCupom(false);
    setModalCupom(true);
    reset();
  };

  return (
    <Modal
      active={modalCreate}
      id="modalCreate"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <Container>
        <HeaderModalComponent
          setState={() => {
            setModalCreateCupom(false);
            setModalCupom(true);
            reset();
          }}
        >
          Cadastrar cupom
        </HeaderModalComponent>
        <Content>
          <form onSubmit={handleSubmit(handleCreateCupom)}>
            <InputForm
              modal
              type="text"
              {...register("category")}
              label="Categoria do produto"
              error={!!errors.category}
            />
            <InputForm
              modal
              type="text"
              {...register("value")}
              label="Valor do desconto (porcentagem)"
              error={!!errors.value}
            />
            <Button blueForm fInter fSize18 type="submit">
              Gerar cupom
            </Button>
          </form>
        </Content>
      </Container>
    </Modal>
  );
};
