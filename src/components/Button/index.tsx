import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  blueForm?: boolean;
  lightGreyForm?: boolean;
  dataBlue?: boolean;
  dataGrey?: boolean;
  pencilButton?: boolean;
  fSize16?: boolean;
  fSize18?: boolean;
  fInter?: boolean;
  shadow?: boolean;
}

export const Button = ({
  children,
  blueForm = false,
  lightGreyForm = false,
  dataBlue = false,
  dataGrey = false,
  pencilButton = false,
  fSize16 = false,
  fSize18 = false,
  fInter = false,
  shadow = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      blueForm={blueForm}
      lightGreyForm={lightGreyForm}
      dataBlue={dataBlue}
      dataGrey={dataGrey}
      pencilButton={pencilButton}
      fSize16={fSize16}
      fSize18={fSize18}
      fInter={fInter}
      shadow={shadow}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};
