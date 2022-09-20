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
  @media (max-width: 1079px) {
    height: 150px;
  }
`;

export const FormContainer = styled.div`
  min-width: 270px;
  max-width: 500px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue-800);
  border-radius: 8px;
  z-index: 500;
  padding: 20px 0;
`;

export const TextContainer = styled.div`
  width: 300px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 500;
  text-align: center;
  color: var(--grey-0);
  margin-top: 50px;

  > h1 {
    font-family: var(--font-inter);
    font-weight: 400;
    filter: drop-shadow(0 4px 4px var(--drop-shadow));
  }

  > p {
    display: none;
    font-family: var(--font-noto-sans);
    filter: drop-shadow(0 4px 4px var(--drop-shadow));
  }

  @media (min-width: 1080px) {
    width: 600px;

    > p {
      display: block;
    }
  }
`;

export const HeaderBox = styled.div`
  width: 92%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 10px;
  font-size: 15px;

  > div {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border-radius: 10px;
      color: var(--blue-500);
      background-color: var(--grey-50);
      font-weight: 500;
      font-family: var(--font-inter);

      padding: 8px;
      font-size: 12px;
    }

    @media (max-width: 400px) {
      > button {
        padding: 5px;
      }
    }
  }

  h2 {
    color: var(--grey-0);
    font-family: var(--font-inter);
    text-align: center;
    margin-bottom: 5px;
  }
`;
