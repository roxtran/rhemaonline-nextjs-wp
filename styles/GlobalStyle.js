import { createGlobalStyle } from 'styled-components'

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
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }

  a {
    color: var(--textColor);
    text-decoration: none;
    &:hover {
      color:var(--blue);
    }
  }

  h2 {
    font-size: 2.75rem;
  }
  
  p {
    line-height: 1.4;
  }
`

export default GlobalStyle
