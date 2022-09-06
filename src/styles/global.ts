import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
}

:root {

    font-size: 16px;
    
    /*green pallet*/
    --green-800: #10796F;

    /*blue pallet*/
    --blue-500: #416CA6;
    --blue-800: #283040;

    /*grey pallet**/
    --grey-900: #0D0D0D;
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-200: #D9D9D9;
    --grey-100: #E0E0E0;
    --grey-50: #F2F2F2;
    --grey-0: #F5F5F5;


    /*red pallet*/

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

     /*fonts*/

    --font-noto-sans:  'Noto Sans', sans-serif;
    --font-inter: 'inter', sans-serif;


    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a, abbr {
    text-decoration: none;
    }

}
`;
