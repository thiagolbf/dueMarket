import styled, { css } from "styled-components";

interface MobileProps {
  active: boolean;
}

/*export const ListaCategorias = styled.div`
background-color: var(--grey-200);
display: flex;
    flex-direction: column;
    //height: 20px;
    width: 280px;
    position: relative;
    cursor: pointer;
    span{
        background-color: var(--grey-0);
        height: 29px;
        width: 256px;
        position: absolute;
        left: 0;
        border-radius: 10px;
        transition: all .5s;
    }

`*/

export const Mobile = styled.div<MobileProps>`
  background-color: var(--grey-200);
  display: flex;
  flex-direction: column;
  height: 36px;
  width: 30px;
  position: relative;
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  span {
    background-color: var(--grey-900);
    height: 4px;
    width: 20px;
    position: absolute;
    left: 5px;
    border-radius: 10px;
    transition: all 0.5s;
  }
  ${(props) =>
    props.active
      ? css`
          span:nth-child(1) {
            top: 15%;
          }
          span:nth-child(2) {
            top: calc(50% - 2px);
          }
          span:nth-child(3) {
            top: calc(85% - 4px);
          }
        `
      : css`
          span {
            top: calc(50% - 4px);
          }
          span:nth-child(1) {
            transform: rotate(45deg);
          }
          span:nth-child(2) {
            opacity: 0;
          }
          span:nth-child(3) {
            transform: rotate(-45deg);
          }
        `}/* @media screen and (min-width: 720px) {
    display: none;
  }*/
`;

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
  //position: fixed;
  //top: 60px;
  left: 0;
  transition: all 0.5s;
  padding-top: ${(props) => (props.active ? 0 : "16px")};
  border-radius: 5px;
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
