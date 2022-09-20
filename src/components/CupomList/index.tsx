import { useContext, useEffect, useRef, useState } from "react";
import { Container, CupomContainer } from "./style";
import { CardCupomComponent } from "../CardCupom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CuponsContext } from "../../providers/Cupons";
import { UsersContext } from "../../providers/Users";

interface CupomListData {
  id: string;
}

export const CupomList = ({ id }: CupomListData) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLButtonElement>(null);

  const { getCuponsByMarket, cupons } = useContext(CuponsContext);
  const { token } = useContext(UsersContext);

  const handleClick = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutside = (e: any) => {
    if (open && !dropDownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (token && Number(id) > 0) {
      getCuponsByMarket(Number(id), token);
    }
  }, [id]);
  console.log(id);

  window.addEventListener("click", handleClickOutside);

  return (
    <Container>
      <button onClick={() => handleClick(open)} ref={dropDownRef}>
        Cupons
        {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>

      <CupomContainer open={open}>
        {cupons.map((value) => (
          <CardCupomComponent
            key={value.id}
            category={value.category}
            value={value.value}
          />
        ))}
      </CupomContainer>
    </Container>
  );
};
