import styled from "styled-components";

interface ModalConfirmationProps {
  active: boolean;
}

export const ModalConfirmation = styled.div<ModalConfirmationProps>`
  display: ${({ active }) => (active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--drop-shadow);
  font-size: 12px;
  > div {
    background-color: var(--blue-800);
    max-width: 320px;
    height: max-content;
    border-radius: 10px;
    max-height: 380px;
    margin: 0 auto;
    .modalConfirmationButtons {
      display: flex;
      width: 320px;
      justify-content: space-around;
      align-items: center;
      margin: 15px 0;

      button {
        width: 120px;
      }
    }
  }
`;
