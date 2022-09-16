import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainBox = styled.div`
  width: 100%;
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
  padding: 0 30px;
  border-bottom: 1px solid var(--grey-600);
  align-items: center;
  justify-content: center;

  h2 {
    display: none;
  }

  @media (min-width: 1080px) {
    justify-content: space-between;
    h2 {
      display: block;
    }
  }
`;

export const SearchBox = styled.div`
  width: 280px;
  height: 100%;
  gap: 10px;
  display: flex;
  align-items: center;

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

  h3 {
    text-align: center;
    font-size: 24px;
    padding: 20px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    overflow-x: scroll;
  }

  @media (min-width: 720px) {
    div {
      overflow-x: visible;
      padding: 5px;
    }
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

  div {
    width: 300px;
    height: 200px;
    background-color: var(--grey-100);
    display: flex;
    border-radius: 8px;
    filter: drop-shadow(0 4px 4px var(--drop-shadow));
  }

  figure {
    width: 60%;
    height: 100%;
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
    padding: 10px 30px;

    div {
      width: 400px;
      padding: 10px;
    }
  }
`;
