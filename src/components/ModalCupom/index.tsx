import { ModalCupom } from "./style";
import { RiAddFill } from "react-icons/ri";
import { CardCupomComponent } from "../CardCupom";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { HeaderModalComponent } from "../HeaderModal";
import { CuponsContext } from "../../providers/Cupons";
import { UsersContext } from "../../providers/Users";
import { ModalCreateCupom } from "../../components/ModalCreateCupom";

interface ModalCupomComponentProps {
  modalCupom: boolean;
  setModalCupom: Dispatch<SetStateAction<boolean>>;
}

interface TargetProps extends EventTarget {
  id: string;
}

export const ModalCupomComponent = ({
  modalCupom,
  setModalCupom,
}: ModalCupomComponentProps) => {
  const handleEvemt = (id: string) => {
    if (id === "modalCupom") {
      setModalCupom(false);
    }
  };
  const [modalCreateCupom, setModalCreateCupom] = useState(false);
  const { getCuponsByMarket, cupons } = useContext(CuponsContext);
  const { userId, token } = useContext(UsersContext);

  useEffect(() => {
    getCuponsByMarket(userId, token);
  }, []);

  return (
    <>
      <ModalCupom
        modalCupom={modalCupom}
        id="modalCupom"
        onClick={(e) => handleEvemt((e.target as TargetProps).id)}
      >
        <div>
          <HeaderModalComponent setState={setModalCupom}>
            Cupons
          </HeaderModalComponent>
          <div>
            <button onClick={() => {
              setModalCupom(false)
              setModalCreateCupom?.(true)
            }}>
              <RiAddFill />
            </button>
          </div>
          <div>
            {cupons.map((cupom) => (
              <CardCupomComponent
                key={cupom.id}
                category={cupom.category}
                value={cupom.value}
              />
            ))}
          </div>
        </div>
      </ModalCupom>
      <ModalCreateCupom
        modalCreate={modalCreateCupom}
        setModalCreateCupom={setModalCreateCupom}
        setModalCupom={setModalCupom}
      />
    </>
  );
};
