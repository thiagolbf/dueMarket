import styled from "styled-components";

export const CardMarket = styled.section`
    padding: 5px;
    background-color: #f2f2f2;
    box-shadow: 5px 5px 10px #0d0d0d80;
    border-radius: 10px;
    display: flex;
    align-items: center;
    figure{
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e0e0e0;
        border-radius: 10px;
        img{
            max-width: 99%;
            max-height: 99%;
        }
    }
    div{
        margin-left: 10px;
        h2{
            font-size: 18px;
            font-weight: 800;
            color: #0d0d0d;
        }
        h3{
            font-size: 16px;
            font-weight: 400;
            color: #828282;
        }
    }
`