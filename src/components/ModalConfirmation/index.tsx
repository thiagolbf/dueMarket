import { RiAddFill } from "react-icons/ri";
import { ModalConfirmation } from "./style";
import { Dispatch, SetStateAction } from "react";
import { HeaderModalComponent } from "../HeaderModal";
import { CloseButton } from "../CloseButton";
interface ModalConfirmationComponentProps {
  modalConfirmation: boolean;
  setModalConfirmation: Dispatch<SetStateAction<boolean>>;
}

interface TargetProps extends EventTarget {
  id: string;
}

export const ModalConfirmationComponent = ({
  modalConfirmation,
  setModalConfirmation,
}: ModalConfirmationComponentProps) => {
  const handleEvent = (id: string) => {
    if (id === "modalConfirmation") {
      setModalConfirmation(false);
    }
  };

  return (
    <ModalConfirmation
      id="modalConfirmation"
      onClick={(e) => handleEvent((e.target as TargetProps).id)}
    >
      <div>
        <div>
          <p>Deseja concluir a ação?</p>
          <CloseButton onClick={() => setModalConfirmation(false)} />
        </div>
      </div>
    </ModalConfirmation>
  );
};
