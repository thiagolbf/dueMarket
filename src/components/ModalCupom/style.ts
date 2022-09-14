import styled  from 'styled-components';

interface ModalCupomProps {
    modalCupom: boolean
}

export const ModalCupom = styled.div<ModalCupomProps>`
    display: ${({modalCupom})=>modalCupom ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--drop-shadow);
    >div{
        background-color: var(--blue-800);
        max-width: 320px;
        height: max-content;
        border-radius: 10px;
        max-height: 380px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-track{
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: var(--blue-500);
        }
        >div:nth-child(2){
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            >h3{
                font-size: 1.375rem;
                font-family: var(--font-noto-sans);
            }
            button{
                display: flex;
                padding: 2px;
                font-size: 1.25rem;
                border-radius: 5px;
            }
        }
        >div:nth-child(3){
            gap: 10px;
            display: flex;
            flex-direction: column;
            padding: 0 25px;
        }
    }
`