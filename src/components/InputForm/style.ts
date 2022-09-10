import styled from "styled-components";

export const InputFormStyle = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: #f2f2f2;

  input {
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
