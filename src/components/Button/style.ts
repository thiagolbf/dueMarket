import styled from "styled-components";

interface ButtonProps {
  blueForm: boolean;
  lightGreyForm: boolean;
  dataBlue: boolean;
  dataGrey: boolean;
  pencilButton: boolean;
  fSize16: boolean;
  fSize18: boolean;
  fInter: boolean;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.blueForm
      ? "var(--blue-500)"
      : props.lightGreyForm
      ? "var(--grey-50)"
      : props.dataBlue
      ? "var(--blue-500)"
      : props.dataGrey
      ? "var(--grey-300)"
      : "var(--grey-200)"};

  color: ${(props) =>
    props.blueForm
      ? "var(--grey-50)"
      : props.lightGreyForm
      ? "var(--blue-500)"
      : props.dataBlue
      ? "var(--grey-50)"
      : props.dataGrey
      ? "var(--grey-50)"
      : "var(--grey-900)"};

  width: ${(props) =>
    props.blueForm
      ? "100%"
      : props.lightGreyForm
      ? "100%"
      : props.dataBlue
      ? "133px"
      : props.dataGrey
      ? "133px"
      : "100%"};

  height: ${(props) =>
    props.blueForm
      ? "40px"
      : props.lightGreyForm
      ? "40px"
      : props.dataBlue
      ? "56px"
      : props.dataGrey
      ? "56px"
      : "48px"};

  font-size: ${(props) =>
    props.fSize16 ? "1rem" : props.fSize18 ? "1.125rem" : "1.25rem"};

  font-weight: 500;

  font-family: ${(props) =>
    props.fInter ? "var(--font-inter)" : "var(--font-noto-sans)"};

  border-radius: 5px;

  svg {
    display: ${(props) => (props.pencilButton ? "block" : "none")};
    color: var(--green-800);
    width: 25px;
    height: 25px;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-out;
  }
`;
