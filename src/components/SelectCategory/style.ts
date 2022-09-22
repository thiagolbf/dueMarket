import styled from "styled-components";

interface SelectProps {
  error: boolean;
  modal: boolean;
}

export const Container = styled.div<SelectProps>`
  height: ${(props) => (props.modal ? "51px" : "50px")};
  width: ${(props) => (props.modal ? "270px" : "100%")};
  position: relative;
  border-radius: 8px;
  background-color: #f2f2f2;
  border: 1px solid
    ${(props) => (props.error ? "var(--negative)" : "transparent")};

  margin-bottom: ${(props) => (props.modal ? "15px" : "none")};

  select {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    background-color: transparent;
    padding: 0 16px;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      font-size: 12px;
    }
  }

  label {
    border-radius: 5px;
    background-color: inherit;
    padding: 3px 5px;
    top: 50%;
    left: 16px;
    position: absolute;
    z-index: 10;
    transform: translate(0, -50%);
    transition: all 0.3s;
    color: var(--grey-300);
    font-size: 16px;
  }
`;
