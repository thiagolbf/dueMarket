import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBox = styled.div`
  width: 100%;
  max-width: 1600px;
  min-width: 320px;
  padding: 0 10px;

  h1 {
    text-align: center;
    padding: 10px;
  }

  @media (min-width: 720px) {
    padding: 0 30px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid var(--grey-600);
  align-items: center;
  justify-content: center;

  h2 {
    display: none;
  }

  @media (min-width: 1080px) {
    justify-content: space-between;
    padding: 5px 30px;
    h2 {
      display: block;
    }
  }
`;

export const SearchBox = styled.div`
  width: 300px;
  height: 100%;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    width: 350px;
    gap: 20px;
  }
`;

export const SectionProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    text-align: center;
    font-size: 24px;
    padding: 20px;
  }
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 30px;
  overflow-x: scroll;

  @media (min-width: 720px) {
    overflow-x: visible;
    padding: 5px;
  }
`;

export const Section = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  figure {
    width: 60%;
    height: 100%;
    padding: 5px;
  }

  p {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 720px) {
    flex-direction: row;
    padding: 10px 0;
  }
`;

export const MarketDataBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: var(--grey-100);
  display: flex;
  border-radius: 8px;
  filter: drop-shadow(0 4px 4px var(--drop-shadow));

  @media (min-width: 720px) {
    width: 400px;
    padding: 10px;
  }
`;
