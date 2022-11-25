import styled, { createGlobalStyle, css } from "styled-components";

interface MobileProps {
  active: boolean;
  logged?: boolean;
}

export const HeaderFix = createGlobalStyle`
    html{
        -webkit-tap-highlight-color: transparent;
    }
    body{
        margin-top: 60px;
    }
    @media screen and (min-width: 720px) {
        body{
            margin-top: 105px;
        }
    }
`;

export const Header = styled.header`
  background-color: var(--green-800);
  color: var(--grey-0);
  padding: 10px 20px;
  display: flex;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: var(--font-inter);
    cursor: pointer;
  }
  @media screen and (min-width: 720px) {
    height: 105px;
    h1 {
      font-size: 2rem;
    }
  }
`;
export const Mobile = styled.div<MobileProps>`
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;
  span {
    background-color: var(--grey-0);
    height: 4px;
    width: 20px;
    position: absolute;
    left: 0;
    border-radius: 10px;
    transition: all 0.5s;
  }
  ${(props) =>
    props.active
      ? css`
          span:nth-child(1) {
            top: 0%;
          }
          span:nth-child(2) {
            top: calc(50% - 2px);
          }
          span:nth-child(3) {
            top: calc(100% - 4px);
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
        `}
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const Nav = styled.nav<MobileProps>`
  background-color: inherit;
  height: ${(props) => (props.active ? 0 : props.logged ? "132px" : "99px")};
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 60px;
  left: 0;
  transition: all 0.5s;
  div {
    box-shadow: var(--drop-shadow) 0px 5px 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      padding: 5px;
      color: var(--grey-0);
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      background-color: inherit;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-inter);
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
  @media screen and (min-width: 720px) {
    width: max-content;
    height: max-content;
    position: static;
    display: flex;
    gap: 20px;
    div {
      width: max-content;
      box-shadow: none;
    }
  }
`;
