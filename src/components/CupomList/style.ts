import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  height: max-content;
  background-color: var(--grey-200);
  border-radius: 5px 5px 0;
  filter: drop-shadow(4px 4px 4px var(--drop-shadow));

  button {
    width: 100%;
    height: 40px;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    font-family: var(--font-inter);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--grey-900);

    svg {
      color: var(--grey-900);
    }
  }
`;

interface CupomContainerProps {
  open?: boolean;
}

export const CupomContainer = styled.div<CupomContainerProps>`
  width: 100%;
  height: ${(props) => (props.open ? "150px" : "0px")};
  background-color: var(--grey-200);
  border-radius: 0px 0px 5px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.open ? "10px" : "0px")};

  filter: drop-shadow(4px 4px 4px var(--drop-shadow));
  transition: all 0.5s;
  overflow: auto;
  align-items: stretch;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--green-800);
  }
`;
