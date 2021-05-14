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
      <div className='locations'>
        <NavLink href='#' id='locations'>
          <a onClick={() => setOpen(!open)}>Locations</a>
        </NavLink>
        <div className='locations-dropdown'>
          <NavLink href={paths.torontoLocation}>
            <a onClick={() => setOpen(!open)}>Toronto</a>
          </NavLink>
          <NavLink href={paths.ottawaLocation}>
            <a onClick={() => setOpen(!open)}>Ottawa</a>
          </NavLink>
        </div>
      </div>
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
        <a className='orange' onClick={() => setOpen(!open)}>
          Give
        </a>
      </NavLink>
    </StyledMenu>
  )
}
const StyledMenu = styled.div`
  .locations {
    display: flex;
    flex-direction: column;
    position: relative;
    &:hover .locations-dropdown {
      display: flex;
    }
    .locations-dropdown {
      display: none;
      flex-direction: column;
      position: absolute;
      background: var(--white);
      top: 3rem;
      left: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--textColor);
    margin: 0.9rem;
    font-weight: bold;
    text-transform: capitalize;
    &[aria-current] {
      border-bottom: 4px solid var(--mint);
    }
    &:hover {
      color: var(--mint);
    }
  }
  .orange {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 25px;
    text-align: center;
    margin-left: 1rem;
    letter-spacing: 1px;
    background: var(--orange);
    color: white;
    &:hover {
      /* border-bottom: 0; */
      background: var(--blue);
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      margin: 0.6rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    background: var(--white);
    width: 250px;
    height: 100vh;
    padding-left: 1rem;
    padding-top: 3.5rem;
    box-shadow: var(--shadow);
    transform-origin: 1px;
    transition: all 0.3s ease-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    a {
      padding: 1rem;
      &[aria-current] {
        border-bottom: 0 solid var(--mint);
        color: var(--mint);
      }
    }
    .orange {
      margin-top: 1rem;
      width: 150px;
    }
  }
`
