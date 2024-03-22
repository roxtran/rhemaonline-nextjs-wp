import styled from "styled-components";
import { useState } from "react";
import Menu from "./Menu";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}
const StyledBurger = styled.a<{ open: boolean }>`
  display: none;
  z-index: 20;
  width: 2rem;
  height: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 1rem;
    background: ${({ open }) => (open ? "#ccc" : "var(--text-color)")};
    transform-origin: 0.0625rem;
    transition: all 0.3s ease-out;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "rotate(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (max-width: 56.25rem) {
    display: flex;
  }
`;
