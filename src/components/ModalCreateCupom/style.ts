import styled from "styled-components";

interface ModalProps {
  active: boolean
}

export const Modal = styled.div<ModalProps>`
  display: ${({active})=> active ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--drop-shadow);
`;

export const Container = styled.div`
  background-color: var(--blue-800);
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 320px;
  height: 300px;
  border-radius: 0 0 5px 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 270px;
    height: 60px;
  }
`;
