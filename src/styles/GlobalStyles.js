import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-grey-0: #fff;
        --color-grey-50: #F4F4F4;
        --color-grey-150: #ddd;
        --color-grey-100: #aaa;
        --color-primary: #00c7d4;
        --color-primary-light: #9ee1e8;
        --color-primary-lighter: #d8f3f6;
        --color-blue: #126abf;
        --color-red: red;
        --backdrop-color: rgba(255, 255, 255, 0.1);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --color-brand-600: #3b82f6; /* New brand color */

        --image-grayscale: 0;
        --image-opacity: 100%;

        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 8px;
        --border-radius-lg: 10px;
        }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
        }

    //html {
    //    font-size: 62.5%;
    //    }

    body {
        font-family: "Poppins", sans-serif;
        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
        }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
        }

    button {
        cursor: pointer;
        }

    *:disabled {
        cursor: not-allowed;
        }

    select:disabled,
        //input:disabled {
        //    background-color: var(--color-grey-50);
        //    color: var(--color-grey-100);
        //    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
        //outline: 2px solid var(--color-brand-600);
        outline-offset: -1px;
        }

    /* Parent selector, finally 😃 */
    button:has(svg) {
        line-height: 0;
        }

    a {
        color: inherit;
        text-decoration: none;
        }

    ul {
        list-style: none;
        }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
        }

    img {
        max-width: 100%;

        /* For dark mode */
        filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
        }
`;

export default GlobalStyles;
