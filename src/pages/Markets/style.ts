import styled from "styled-components";

export const MarketListComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-around;
`;

export const MarketList = styled.div`
  min-width: 260px;
  width: 600px;
  max-width: 900px;
  padding: 10px 8px;
  background-color: var(--grey-100);
  border-radius: 5px;

  margin-top: 17px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const MarketCard = styled.div`
  margin: 10px;
`;

export const Box = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid var(--grey-900);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-family: var(--font-noto-sans);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--grey-900);
  }

  @media (max-width: 550px) {
    flex-direction: column;

    > div {
      margin-bottom: 5px;
    }
  }
`;
