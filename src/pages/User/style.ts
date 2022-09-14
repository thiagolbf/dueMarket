import styled from 'styled-components';

export const UserMain = styled.main`
    >div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 10px;
        p{
            display: none;
            font-weight: bold;
            font-size: 18px;
        }
        >div{       
            display: flex;
            align-items: stretch;
            gap: 10px;
            height: 100%;
            margin: 0 auto;
            button{
                cursor: pointer;
                font-size: 16px;
                color: #0d0d0d;
                font-weight: 600;
                padding: 10px;
                border: none;
                border-radius: 5px;
                background-color: #D9D9D9;
                box-shadow: 2px 2px 10px #0d0d0da0;
            }
            button:nth-child(3){
                color: #10796F;
            }
        }
    }
    hr{
        border-top: 1px solid black;
    }
    >div:nth-child(3){
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 10px;
        >h2{
            font-size: 20px;
            color: #0d0d0d;
            text-align: center;
            margin-bottom: 10px;
        }
        >div:nth-child(2){
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 0 auto;
            flex-wrap: wrap;
            max-width: 1480px;
        }
    }
    @media screen and (min-width: 720px) {
        
        >div:nth-child(1){
            p{
                display: block;
            }
            div{
                margin: 0;
            }
        }
    }
`