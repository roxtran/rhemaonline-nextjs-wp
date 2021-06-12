import styled from 'styled-components'
import NavLink from './NavLink'
import paths from '../../../paths'

interface Props {
  open: boolean
  setOpen: Function
}

export default function Menu({ open, setOpen }: Props) {
  return (
    <StyledMenu open={open}>
      <NavLink href='/'>
        <a onClick={() => setOpen(!open)}>Home</a>
      </NavLink>
      <div className='locations'>
        <NavLink href='#'>
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
      <div className='btn-wrapper'>
        <NavLink href={paths.giving}>
          <a className='button give' onClick={() => setOpen(!open)}>
            Give
          </a>
        </NavLink>
        <a
          href='https://rhema.ccbchurch.com/goto/login'
          target='_blank'
          className='button external'
          onClick={() => setOpen(!open)}
        >
          Login
        </a>
      </div>
    </StyledMenu>
  )
}
const StyledMenu = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--heading-color);
    margin: 0.9rem;
    font-weight: bold;
    text-transform: capitalize;
    &[aria-current]:not(.button) {
      /* border-bottom: 4px solid var(--mint); */
      background: linear-gradient(var(--mint), var(--mint)) 0 calc(100% - 3px) /
        100% 7px no-repeat;
    }
    &:hover {
      color: var(--mint);
    }
  }
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
      background: #fff;
      top: 3rem;
      left: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
  }
  .btn-wrapper {
    margin: 0;
  }
  .button {
    cursor: pointer;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    text-align: center;
    margin-left: 0.5rem;
    letter-spacing: 1px;
    background: var(--blue);
    color: #fff;
    &:hover {
      /* border-bottom: 0; */
      background: var(--blue);
    }
    &[aria-current] {
      background-color: var(--light-blue);
    }
  }
  .give {
    background-color: var(--high-light);
  }
  /* .external:after {
    content: '◥';
    position: relative;
    right: -3px;
    top: -7px;
    font-size: 0.65rem;
  } */
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
    background: #fff;
    width: 250px;
    height: 100vh;
    padding-left: 1rem;
    padding-top: 3rem;
    box-shadow: var(--shadow);
    transform-origin: 1px;
    transition: all 0.3s ease-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    a {
      padding: 1rem;
      &[aria-current] {
        /* border-bottom: 0 solid var(--mint); */
        /* color: var(--mint); */
        background: linear-gradient(var(--mint), var(--mint)) 0 calc(100% - 3px) /
          100% 7px no-repeat;
      }
    }
    .btn-wrapper {
      display: flex;
      flex-direction: column;
    }
    .button {
      margin: 1.25rem 1rem;
    }
    .orange {
      margin-top: 1rem;
      width: 150px;
    }
  }
`
