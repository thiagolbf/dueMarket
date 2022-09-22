import { Dispatch, ReactNode, SetStateAction } from "react";
import { CloseButton } from "../CloseButton";
import { HeaderModal } from "./style";

interface HeaderModalComponentProps {
  children: ReactNode;
  setState: Dispatch<SetStateAction<boolean>>;
}

export const HeaderModalComponent = ({
  children,
  setState,
}: HeaderModalComponentProps) => {
  return (
    <HeaderModal>
      <h2>{children}</h2>
      <CloseButton onClick={() => setState(false)} />
    </HeaderModal>
  );
};
