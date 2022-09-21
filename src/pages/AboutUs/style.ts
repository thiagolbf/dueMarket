import styled from "styled-components";

export const AboutUsMain = styled.main`
    padding: 0 10px;
    padding-top: 10px;
    text-align: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto 20px;

    >h2{
        font-family: var(--font-inter);
        font-size: 1.875rem;
        margin-bottom: 15px;
        font-weight: 400;
    }

    >p{
        font-family: var(--font-inter);
        text-align: left;
        margin: 0 auto;
        width: 100%;
        max-width: 1100px;
        font-size: 0.75rem;
        font-weight: 400;
        margin-bottom: 50px;
    }

    >div{
        display: flex;
        justify-content: center;
        gap: 25px;
        align-items: stretch;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 720px) {
        padding-top: 40px;
        >h2{
            margin-bottom: 69px;
            font-size: 2.5rem;
        }
        >p{
            font-size: 1.5rem;
            margin-bottom: 120px;
        }
    }
`