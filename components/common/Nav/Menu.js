import styled from 'styled-components'
import NavLink from './NavLink'
import paths from './../../../paths'
import { Button } from '../../../styles/GlobalStyle'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <NavLink href='/'>
        <a onClick={() => setOpen(!open)}>Home</a>
      </NavLink>
      <NavLink href={paths.locations}>
        <a onClick={() => setOpen(!open)}>Locations</a>
      </NavLink>
      <NavLink href={paths.connect}>
        <a onClick={() => setOpen(!open)}>Connect</a>
      </NavLink>
      <NavLink href={paths.sermons}>
        <a onClick={() => setOpen(!open)}>Sermons</a>
      </NavLink>
      <NavLink href={paths.liveStream}>
        <a onClick={() => setOpen(!open)}>Live Stream</a>
      </NavLink>
      <NavLink href={paths.events}>
        <a onClick={() => setOpen(!open)}>Events</a>
      </NavLink>
      <NavLink href={paths.giving}>
        <Button className='orange'>Give</Button>
      </NavLink>
    </StyledMenu>
  )
}
const StyledMenu = styled.div`
  display: block;
  a {
    color: var(--textColor);
    margin: 0.9rem;
    font-weight: bold;
    &[aria-current] {
      border-bottom: 4px solid var(--mint);
    }
    &:hover {
      color: var(--mint);
    }
  }
  .orange {
    margin-left: 1rem;
    letter-spacing: 1px;
    &:hover {
      border-bottom: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      margin: 0.6rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    background: var(--white);
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    box-shadow: var(--shadow);
    transform-origin: 1px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    a {
      padding: 1rem;
      &[aria-current] {
        border-bottom: 0 solid var(--mint);
        color: var(--mint);
      }
    }
    .orange {
      margin-top: 1rem;
    }
  }
`
