import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid var(--grey-900);

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: var(--font-noto-sans);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--grey-900);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  p {
    font-family: var(--font-inter);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--grey-900);

    text-align: center;

    margin-bottom: 25px;
  }

  span {
    font-family: var(--font-noto-sans);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--grey-300);

    margin-top: 10px;
  }
`;

export const MarketContent = styled.div`
  margin: 10px 0 0 20px;

  p {
    font-family: var(--font-inter);
    font-size: 1.188rem;
    font-weight: 700;
    color: var(--grey-900);
    &:hover {
      color: var(--information);
    }
  }
`;

export const LinkToMarket = styled(Link)`
  display: flex;
  align-items: baseline;

  color: var(--grey-900);
  &:hover {
    color: var(--information);
  }

  gap: 10px;
  margin: 10px 0;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
  overflow-x: auto;
`;
