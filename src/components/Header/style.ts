import styled, { createGlobalStyle, css } from "styled-components";

interface MobileProps {
    active: boolean
}

export const HeaderFix = createGlobalStyle`
    html{
        -webkit-tap-highlight-color: transparent;
    }
    body{
        margin-top: 105px;
    }
`

export const Header = styled.header`
    background-color: #10796F;
    color: #f5f5f5;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    height: 105px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 32px;
        font-weight: 700;
    }
`
export const Mobile = styled.div<MobileProps>`
    display: flex;
    flex-direction: column;
    height: 40px;
    width: 40px;
    position: relative;
    cursor: pointer;
    span{
        background-color: #f5f5f5;
        height: 9px;
        width: 40px;
        position: absolute;
        left: 0;
        border-radius: 10px;
        transition: all .5s;
    }
    ${props=>props.active ? 
        css`
            span:nth-child(1){
                top: 0%;
            }
            span:nth-child(2){
                top: calc(50% - 4px);
            }
            span:nth-child(3){
                top: calc(100% - 10px);
            }
        ` 
        : 
        css`
            span{
                top: calc(50% - 4px);
            }
            span:nth-child(1){
                transform: rotate(45deg);
            }
            span:nth-child(2){
                opacity: 0;
            }
            span:nth-child(3){
                transform: rotate(-45deg);
            }
        `
    }
    @media screen and (min-width: 720px) {
        display: none;
    }
`

export const Nav = styled.nav<MobileProps>`
    background-color: inherit;
    height: ${props=>props.active ? 0 : '120px'};
    width: 100vw;
    overflow: hidden;
    position: fixed;
    top: 105px;
    left: 0;
    transition: all .5s;
    div{
        box-shadow: rgb(0, 0, 0) 0px 5px 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            padding: 5px;
            color: #f5f5f5;
            cursor: pointer;
            font-weight: 600;
            font-size: 20px;
            background-color: inherit;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            ::after{
                content: '';
                height: 3px;
                transition: all .2s;
                border-radius: 10px;
                width: 0;
                background-color: #f5f5f5;
                
            }
            :hover{
                ::after{
                    width: 100%;
                }
            }
        }
    }
    @media screen and (min-width: 720px) {
        width: max-content;
        height: max-content;
        position: static;
        display: flex;
        gap: 20px;
        div{
            width: max-content;
            box-shadow: none;
        }
    }
`