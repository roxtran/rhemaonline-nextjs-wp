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
    font-family: 'Noto Sans', sans-serif;
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

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.75rem;
  }
  
  p {
    line-height: 1.5;
  }
`

export const Button = styled.a`
  margin-top: 1.5rem;
  cursor: pointer;
  background: var(--blue);
  border-radius: 5px;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-transform: capitalize;
  &:hover {
    background: var(--lightBlue);
    color: white;
    box-shadow: var(--shadow);
  }
  &.orange {
    background: var(--orange);
    color: white;
    &:hover {
      background: var(--blue);
    }
  }
  &.white {
    background: var(--white);
    color: var(--textColor);
    &:hover {
      background: var(--blue);
      color: var(--white);
    }
  }
`

export default GlobalStyle
