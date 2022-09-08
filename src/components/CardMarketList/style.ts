import styled from "styled-components";

export const CardMarketList = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    width: 95vw;
    border-radius: 10px;
    max-width: 900px;
    background-color: #e0e0e0;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #10796f;
        border-radius: 5px;
    }
`