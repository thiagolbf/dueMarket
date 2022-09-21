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
  font-family: var(--font-inter);
  color: var(--grey-900);
  > h1 {
    text-align: center;
    padding: 10px;
  }

  @media (min-width: 720px) {
    padding: 0 30px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid var(--grey-600);
  align-items: center;
  justify-content: center;

  h2 {
    display: none;

    font-family: var(--font-noto-sans);
    font-size: 1.125rem;
    color: var(--grey-900);
  }

  @media (min-width: 1080px) {
    justify-content: space-between;
    padding: 5px 30px;
    > h2 {
      display: block;
    }
  }

  @media (min-width: 480px) {
    height: 70px;
  }
`;

export const SearchBox = styled.div`
  width: 300px;
  height: 100%;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    position: relative;
  }

  @media (min-width: 720px) {
    width: 350px;
    height: 76px;
    gap: 20px;
  }

  @media (min-width: 480px) {
    flex-wrap: nowrap;
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
  /* width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 30px;
  overflow-x: scroll;

  @media (min-width: 720px) {
    overflow-x: visible;
    padding: 5px;
  } */
  display: flex;
  gap: 30px;
  width: 95vw;
  margin-bottom: 20px;
  height: max-content;
  overflow-x: auto;
  padding: 5px;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--blue-500);
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
    /* align-items: start; */
  }
`;

export const MarketDataBox = styled.div`
  width: 100%;
  height: 250px;
  background-color: var(--grey-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  filter: drop-shadow(0 4px 4px var(--drop-shadow));
  @media (min-width: 480px) {
    flex-direction: row;
    height: 200px;
  }
  @media (min-width: 720px) {
    width: 400px;
    padding: 10px;
  }
`;
