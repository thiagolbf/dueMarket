import { useRef, useState } from "react";
import { Container, CupomContainer } from "./style";
import { CardCupomComponent } from "../CardCupom";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const CupomList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLButtonElement>(null);

  const handleClick = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutside = (e: any) => {
    if (open && !dropDownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  window.addEventListener("click", handleClickOutside);

  return (
    <Container>
      <button onClick={() => handleClick(open)} ref={dropDownRef}>
        Cupons
        {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>

      <CupomContainer open={open}>
        <CardCupomComponent />
      </CupomContainer>
    </Container>
  );
};
