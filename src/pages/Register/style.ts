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
  height: 300px;
  background-color: var(--green-800);
  position: absolute;
  top: 0;
`;

export const FormContainer = styled.div`
  width: 410px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue-800);
  border-radius: 8px;
  z-index: 500;
`;

export const Form = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  z-index: 500;
  text-align: center;
  color: #fff;

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
    p {
      display: block;
    }
  }
`;
