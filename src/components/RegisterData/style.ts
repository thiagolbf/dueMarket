import styled from "styled-components";

interface RegisterProps {
    edit: boolean
    active: boolean
}

export const RegisterData = styled.div<RegisterProps>`
    position: fixed;
    bottom: 0;
    right: ${props => props.active ? 0 : '-410px'};
    width: 100vw;
    height: calc(100vh - 105px);
    max-width: 410px;
    z-index: 50;
    display: block;
    padding: 20px 10px;
    background-color: var(--grey-100);
    transition: all .5s;
    >div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        h2{
            font-size: 1.5rem;
            font-family: bold;
        }
        button{
            height: 24px;
            cursor: pointer;
            font-size: 1.5rem;
            background-color: transparent;
            border: none;
        }
    }
    >div:nth-child(2){
        display: ${props => props.edit ? 'none' : 'flex'};
        flex-direction: column;
        gap: 20px;
        p{
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
        }
    }
    >div:nth-child(3){
        display: ${props => !props.edit ? 'none' : 'flex'};
        flex-direction: column;
        gap: 20px;
        input{
            height: 50px;
            background-color: var(--grey-50);
            border: 2px solid var(--grey-600);
            font-size: 1.25rem;
            border-radius: 10px;
            color: var(--grey-900);

            padding: 0 10px;
            &::placeholder{
                color: var(--grey-300);
            }
        }
        div{
            display: flex;
            gap: 1%;
            button{
                background-color: var(--grey-300);
                width: 49.5%;
                font-size: 1.25rem;
                border-radius: 10px;
                color: #f2f2f2;
                box-shadow: 5px 5px 10px var(--drop-shadow);
                padding: 15px 0;
            }
            button:nth-child(1){
                background-color: var(--blue-500);
            }
        }
    }
`