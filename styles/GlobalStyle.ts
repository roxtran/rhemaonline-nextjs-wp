import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }
  body {
    background: #fff;
    color: var(--text-color);
    font-family: 'Noto Sans', sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }
  a {
    cursor: pointer;
    color: var(--text-color);
    text-decoration: none;
    &:hover {
      color:var(--blue);
    }
  }

  h1, h2, h3, h4 {
    font-weight: bold;
    color: var(--heading-color);
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.75rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  ol, ul {
    padding-left: 0;
  }
  .accordion-button {
    text-align: left;
    line-height: 1.5;
  }
  .accordion-button:not(.collapsed) {
    color: var(--blue);
    background-color: rgba(181, 217, 238, 0.2);
    font-weight: bold;
  }

  .slick-slide img {
    margin: auto;
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 2rem;
    text-shadow: 0 0 12px rgba(0 0 0 / 0.2);
  }
`
export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 4rem 0;
`
export const Button = styled(motion.a)`
  display: inline-block;
  cursor: pointer;
  background: var(--blue);
  border-radius: 5px;
  color: #fff;
  padding: 10px 25px;
  text-align: center;
  text-transform: capitalize;
  &:hover {
    background: var(--light-blue);
    color: #fff;
    box-shadow: var(--shadow);
  }
  &.orange {
    background: var(--highlight);
    color: #fff;
    &:hover {
      background: var(--blue);
    }
  }
  &.white {
    background: #fff;
    color: var(--text-color);
    &:hover {
      background: var(--blue);
      color: #fff;
    }
  }
`

export const ImgWrapper = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`

export default GlobalStyle
