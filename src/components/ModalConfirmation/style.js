import styled from "styled-components";

export const ModalConfirmation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--drop-shadow);

  div {
    background-color: var(--blue-800);
    width: 320px;
    height: 125px;
    border-radius: 10px;
    display: flex;

    p {
      color: white;
      margin: 0 auto;
    }

    button {
      margin: auto 0;
    }
  }
`;
