import styled from "styled-components";

export const CardDevs = styled.section`
  width: max-content;

  max-width: 295px;
  border-radius: 10px;
  border: 1px solid var(--grey-300);
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-wrap: wrap;
  text-align: start;
  > div:nth-child(1) {
    > figure {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      border-radius: 10px 10px 0 0;
      background-color: var(--grey-100);
      margin-bottom: 5px;
      > img {
        margin: 0 auto;
        height: 100%;
        max-width: 100%;
      }
    }
    > h3 {
      padding: 0 15px;
      text-align: center;
      font-family: var(--font-inter);
    }
  }
  > div:nth-child(2) {
    font-size: 1.25rem;
    padding: 0 15px 10px;
    align-items: stretch;
    > div {
      margin-top: 10px;
      display: flex;
      gap: 15px;
      a {
        font-size: 2rem;
      }
      a:nth-child(1) {
        color: var(--linkedin);
      }
      a:nth-child(2) {
        color: var(--github);
      }
    }
  }
`;
