import styled from "styled-components";

export const CardCupom = styled.section`
  width: 100%;
  min-height: 50px;
  background-color: var(--green-800);
  color: white;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border: 2px white dashed;
  border-radius: 10px;
  align-items: center;
  gap: 10px;
  p {
    text-align: center;
    font-size: 1.125rem;
    font-family: var(--font-noto-sans);
  }
`;
