import styled from "styled-components";

export const InputContainer = styled.div`
  width: 276px;
  height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  background-color: var(--grey-300);

  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;

    flex: 1;

    &::placeholder {
      font-family: var(--font-noto-sans);
      font-size: 0.875rem;
      color: var(--grey-0);
    }
  }

  div {
    width: 30px;
    height: 30px;
    background-color: var(--grey-200);
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transition: 0.2s ease-out;
    }
  }
`;
