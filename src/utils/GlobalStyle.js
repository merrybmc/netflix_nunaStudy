import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;
