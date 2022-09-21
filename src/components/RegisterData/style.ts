import styled from "styled-components";

interface RegisterProps {
  edit: boolean;
  active: boolean;
}

export const RegisterData = styled.div<RegisterProps>`
  position: fixed;
  bottom: 0;
  right: ${(props) => (props.active ? 0 : "-410px")};
  width: 100vw;
  height: calc(100vh - 105px);
  max-width: 410px;
  z-index: 50;
  filter: drop-shadow(0px 4px 4px var(--drop-shadow));
  display: block;
  padding: 20px 10px;
  background-color: var(--grey-100);
  transition: all 0.5s;
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    h2 {
      font-size: 1.5rem;
      font-family: bold;
    }
    button {
      height: 24px;
      cursor: pointer;
      font-size: 1.5rem;
      background-color: transparent;
      border: none;
    }
  }
  > div:nth-child(2) {
    display: ${(props) => (props.edit ? "none" : "flex")};
    flex-direction: column;
    gap: 20px;
    p {
      font-size: 1.25rem;
      font-weight: 600;
      text-align: center;
    }
    figure {
      height: 250px;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        height: 100%;
      }
    }
  }
  > form:nth-child(3) {
    display: ${(props) => (!props.edit ? "none" : "flex")};
    flex-direction: column;
    gap: 20px;
    > div {
      p {
        margin-top: 5px;
        margin-left: 5px;
        color: var(--negative);
      }
    }
    > div:last-child {
      display: flex;
      gap: 1%;
      button {
        background-color: var(--grey-300);
        width: 49.5%;
        font-size: 1.25rem;
        border-radius: 10px;
        color: #f2f2f2;
        filter: drop-shadow(0px 4px 4px var(--drop-shadow));
        padding: 15px 0;
      }
      button:nth-child(1) {
        background-color: var(--blue-500);
      }
    }
  }
  @media screen and (max-width: 720px) {
    height: calc(100vh - 60px);
  }
`;
