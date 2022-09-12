import styled from "styled-components";

export const CardCupom = styled.section`
    width: 100%;
    background-color: var(--grey-200);
    color: black;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border: 1px var(--blue-500) dashed;
    border-radius: 10px;
    align-items: center;
    gap: 10px;
    p{
        text-align: center;
        font-size: 1.125rem;
        font-family: var(--font-noto-sans);
    }
`