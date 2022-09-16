import styled from "styled-components";

interface ModalProdutoProps {
  modalProduto: boolean;
}

export const ModalProduto = styled.div<ModalProdutoProps>`
  display: ${({ modalProduto }) => (modalProduto ? "flex" : "none")};
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--drop-shadow);

  > div {
    background-color: var(--blue-800);

    max-width: 320px;
    height: max-content;
    border-radius: 10px;
    max-height: 515px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    //overflow-y: scroll;
    align-items: stretch;
    justify-content: space-between;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--blue-500);
    }

    /* div {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 0 25px;
    }*/
    > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      gap: 25px;
      padding: 0 25px 10px 25px;
    }
  }
`;

export const HeaderModalProduto = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  padding: 10px 25px;
  font-family: var(--font-inter);
  background-color: transparent;
  justify-content: space-between;
  //align-items: center;
  box-shadow: 1px 5px 5px var(--drop-shadow);
  color: white;
  gap: 25px;
  h2 {
    font-size: 16px;
  }
`;
