import styled, { createGlobalStyle } from "styled-components";

import { motion } from "framer-motion";

export const rem = (px) => {
  const remValue = px * 0.0625 + "rem";
  return remValue;
};
export const def = {
  wrapper: {
    width: "78rem",
  },
};

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
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    width: 100vw;
  }
  a {
    cursor: pointer;
    color: var(--text-color);
    text-decoration: underline;
    font-weight: bold;
    &:hover {
      color:var(--blue);
    }
  }

  h1, h2, h3, h4 {
    font-weight: bold;
    color: var(--heading-color);
    padding: 1rem 0;
    margin: 0
  }
  h1 {
    font-size: 2.75rem;
    @media screen and (min-width) {
      font-size: 3.75rem;
    }
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
    margin-bottom: 1rem;

  }
  p a, li a {
    text-decoration: underline;
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
    left: 1.25rem;
    z-index: 1;
  }

  .slick-next {
    right: 1.25rem;
  }

  .slick-prev, .slick-next {
    width: 2.5rem;
    height: 2.5rem;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 2rem;
    text-shadow: 0 0 0.75rem rgba(0 0 0 / 0.2);
  }
`;

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 2rem 0;
`;
export const Button = styled(motion.a)`
  display: inline-block;
  cursor: pointer;
  background: var(--blue);
  border-radius: var(--border-radius);
  color: #fff;
  padding: 0.625rem 1.5625rem;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;
  text-decoration: none;
  font-weight: unset;
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
    border: 0.0625rem solid var(--text-color);
    &:hover {
      background: var(--blue);
      color: #fff;
    }
  }
`;

export const ImgWrapper = styled(motion.div)`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export default GlobalStyle;
