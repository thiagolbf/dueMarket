import styled from "styled-components";

export const MarketList = styled.div`
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
