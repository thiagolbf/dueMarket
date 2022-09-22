import { ModalConfirmation } from "./style";
import { Dispatch, SetStateAction } from "react";
import { HeaderModalComponent } from "../HeaderModal";
import { Button } from "../Button";
import { useContext } from "react";
import { ProductsContext } from "../../providers/Products";
import { UsersContext } from "../../providers/Users";

interface ModalConfirmationComponentProps {
  modalConfirmation: boolean;
  setModalConfirmation: Dispatch<SetStateAction<boolean>>;
  productId?: number;
  token: string;
}

interface TargetProps extends EventTarget {
  id: string;
}

// TESTAR COM O BOTÃO DE EXCLUIR PRODUTOS - TANTO PARA MERCADO TANTO PARA WISHLIST DO USUÁRIO

export const ModalConfirmationComponent = ({
  modalConfirmation,
  setModalConfirmation,
  productId,
}: ModalConfirmationComponentProps) => {
  const { deleteProduct } = useContext(ProductsContext);

  const { token, userId } = useContext(UsersContext)

  const handleEvent = (id: string) => {
    if (id === "modalConfirmation") {
      setModalConfirmation(false);
    }
  };

  return (
    <ModalConfirmation
      active={modalConfirmation}
      id="modalConfirmation"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <div>
        <HeaderModalComponent setState={setModalConfirmation}>
          Deseja concluir a ação?
        </HeaderModalComponent>
        <div className="modalConfirmationButtons">
          <Button lightGreyForm onClick={() => deleteProduct(token, productId, userId)}>
            Sim
          </Button>
          <Button blueForm onClick={() => setModalConfirmation(false)}>
            Não
          </Button>
        </div>
      </div>
    </ModalConfirmation>
  );
};
