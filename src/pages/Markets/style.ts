import styled from "styled-components";

export const MarketListComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-around;
`;

export const MarketList = styled.div`
  min-width: 260px;
  width: 95%;
  max-width: 900px;
  max-height: 450px;
  padding: 10px 8px;
  background-color: var(--grey-100);
  border-radius: 5px;

  margin-top: 17px;
  margin-right: 30px;
  margin-left: 30px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue-800);
    border-radius: 5px;
  }
`;

export const MarketCard = styled.div`
  margin: 10px;
`;

export const Box = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--grey-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  > p {
    font-family: var(--font-noto-sans);
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    color: var(--grey-900);
  }

  @media (max-width: 550px) {
    flex-direction: column;

    > div {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 400px) {
    height: 76px;
  }
`;
