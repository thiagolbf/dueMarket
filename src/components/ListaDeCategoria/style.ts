import styled from "styled-components";

interface MobileProps {
  active: boolean;
}

export const Nav = styled.nav<MobileProps>`
  background-color: var(--grey-200);
  height: ${(props) => (props.active ? 0 : "295px")};
  width: 280px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue-800);
    border-radius: 5px;
  }
  position: absolute;
  top: 50px;
  right: 0;
  transition: all 0.5s;
  padding-top: ${(props) => (props.active ? 0 : "16px")};
  border-radius: 5px;
  z-index: 2;
  box-shadow: var(--drop-shadow) 0px 5px 10px;
  div {
    box-shadow: var(--drop-shadow) 0px 5px 10px;
    background-color: var(--grey-0);
    width: 256px;
    height: 29px;
    margin-bottom: 10px;
    margin-left: 12px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      border-radius: 5px;
      padding: 5px;
      color: var(--grey-300);
      cursor: pointer;
      //font-weight: 600;
      font-size: 1rem;
      background-color: inherit;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-noto-sans);
      ::after {
        content: "";
        height: 3px;
        transition: all 0.2s;
        border-radius: 10px;
        width: 0;
        background-color: var(--grey-0);
      }
      :hover::after {
        width: 100%;
      }
    }

    &:hover {
      background-color: var(--grey-100);
      transition: 0.2s ease-out;
    }
  }
  /* @media screen and (min-width: 720px) {
    width: max-content;
    height: max-content;
    position: static;
    display: flex;
    gap: 20px;
    div {
      width: max-content;
      box-shadow: none;
    }
  }*/
`;
