import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
	    font-family: sans-serif;
    }

    .wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
`;

export {GlobalStyles};