import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://cdn.pixabay.com/photo/2016/10/17/14/31/background-1747777_1280.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  background-attachment: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px;
`;

export const GreenBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--green-800);
  position: absolute;
  top: 0;

  @media (min-width: 1080px) {
    height: 300px;
  }
`;

export const FormContainer = styled.div`
  width: 270px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue-800);
  border-radius: 8px;
  z-index: 500;

  @media (min-width: 480px) {
    width: 340px;
    height: 510px;
  }

  @media (min-width: 1080px) {
    width: 410px;
    height: 600px;
  }
`;

export const TextContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: 500;
  text-align: center;
  color: var(--grey-0);

  h1 {
    font-family: var(--font-inter);
    font-weight: 400;
    filter: drop-shadow(0 4px 4px var(--drop-shadow));
  }

  p {
    display: none;
    font-family: var(--font-noto-sans);
    filter: drop-shadow(0 4px 4px var(--drop-shadow));
  }

  @media (min-width: 1080px) {
    width: 600px;

    p {
      display: block;
    }
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;

  h2 {
    color: var(--grey-0);
    font-family: var(--font-inter);
  }

  button {
    position: absolute;
    left: 30px;
  }
`;
