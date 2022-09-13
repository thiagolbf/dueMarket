import { FiX } from "react-icons/fi";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const CloseButton = ({ children, ...rest }: CloseButtonProps) => {
  return (
    <Container {...rest}>
      <FiX size={20} />
      {children}
    </Container>
  );
};
