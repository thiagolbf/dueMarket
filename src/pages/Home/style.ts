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
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: var(--font-inter);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--grey-900);

    text-align: center;

    margin-bottom: 25px;
  }

  input {
    border: 1px solid black;
  }

  span {
    font-family: var(--font-noto-sans);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--grey-300);

    margin-top: 10px;
  }
`;
