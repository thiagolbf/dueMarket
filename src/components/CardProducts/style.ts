import styled from 'styled-components';
export const CartProduct = styled.section`
    width: 300px;
    height: max-content;
    border: 2px solid #828282;
    border-radius: 10px;
    transition: all .5s;
    &:hover{
        transform: scale(1.025);
        border-color: #10796f;
    }
    figure{
        border-radius: 10px 10px 0 0;
        padding: 10px;
        height: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #e0e0e0;
        button{
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 20px;
            background-color: transparent;
            color: var(--blue-500);
            transition: all .25s;
            &:hover{
                filter: brightness(1.5);
                transform: scale(1.2);
            }
        }
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    >div{
        padding: 5px;
        >div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            h2{
                font-size: 16px;
                font-weight: 800;
                color: #0d0d0d;
            }
            button{
                display: flex;
                background-color: transparent;
                border: var(--blue-500) 1px solid;
                color: var(--blue-500);
                font-size: 24px;
                border-radius: 100%;
                padding: 3px;
                transition: all .25s;
                &:hover{
                    filter: brightness(1.5);
                    transform: scale(1.1);
                }
            }
        }
        h3{
            font-size: 14px;
            font-weight: 400;
            color: #828282;
        }
        h3:nth-child(1){
            font-weight: 600;
        }
        h4{
            font-size: 16px;
            font-weight: bold;
            color: #10796f;
            text-decoration: underline;
        }
        h4:nth-child(4){
            font-weight: 500;
            text-decoration: line-through;
        }

    }
`