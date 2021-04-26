import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }

  html,
  body {
    background: var(--white);
    color: var(--textColor);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }

  a {
    color: var(--textColor);
    text-decoration: none;
  }

  h2 {
    font-size: 2.75rem;
  }

  p {
    line-height: 1.4;
  }
`

export default GlobalStyle
