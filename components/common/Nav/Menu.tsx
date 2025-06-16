import NavLink from "./NavLink";
import paths from "paths";
import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: Function;
}

export default function Menu({ open, setOpen }: Props) {
  return (
    <StyledMenu open={open}>
      <NavLink href="/">
        <a onClick={() => setOpen(!open)}>Home</a>
      </NavLink>
      {/* <div className='dropdown'>
        <NavLink href='#'>
          Locations
        </NavLink>
        <div className='dropdown-content'>
          <NavLink href={paths.torontoLocation}>
            <a onClick={() => setOpen(!open)}>Toronto</a>
          </NavLink>
          <NavLink href={paths.ottawaLocation}>
            <a onClick={() => setOpen(!open)}>Ottawa</a>
          </NavLink>
        </div>
      </div> */}
      <NavLink href={paths.location}>
        <a onClick={() => setOpen(!open)}>Visit Us</a>
      </NavLink>
      <NavLink href={paths.connect}>
        <a onClick={() => setOpen(!open)}>Connect</a>
      </NavLink>
      <div className="dropdown">
        <NavLink href={paths.sermons}>
          <a>Sermons</a>
        </NavLink>
        <div className="dropdown-content">
          <NavLink href={paths.sermons}>
            <a onClick={() => setOpen(!open)}>Videos</a>
          </NavLink>
          <NavLink href={paths.sermonNotes}>
            <a onClick={() => setOpen(!open)}>Notes</a>
          </NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink href={paths.virtualHomeGroups}>
          <a>Virtual Home Groups</a>
        </NavLink>
        <div className="dropdown-content">
          <NavLink href={paths.virtualHomeGroups}>
            <a onClick={() => setOpen(!open)}>Register</a>
          </NavLink>
          <NavLink href={paths.virtualHomeGroupsDiscussions}>
            <a onClick={() => setOpen(!open)}>Discussions</a>
          </NavLink>
        </div>
      </div>
      <NavLink href={paths.liveStream}>
        <a onClick={() => setOpen(!open)}>Live Stream</a>
      </NavLink>
      <NavLink href={paths.calendar}>
        <a onClick={() => setOpen(!open)}>Calendar</a>
      </NavLink>
      <div className="btn-wrapper">
        <NavLink href="/election-process">
          <a className="button" onClick={() => setOpen(!open)}>
            Election
          </a>
        </NavLink>
        <NavLink href={paths.build}>
          <a className="button build" onClick={() => setOpen(!open)}>
            Build
          </a>
        </NavLink>
        <NavLink href={paths.giving}>
          <a className="button give" onClick={() => setOpen(!open)}>
            Give
          </a>
        </NavLink>
        <a href={paths.memberLogin} target="_blank" className="button external" onClick={() => setOpen(!open)}>
          Login
        </a>
      </div>
    </StyledMenu>
  );
}
const StyledMenu = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--heading-color);
    margin: 0.5rem;
    font-weight: bold;
    text-transform: capitalize;
    white-space: nowrap;
    text-decoration: none;
    &:not(.button)[aria-current] {
      /* border-bottom: 0.25rem solid var(--mint); */
      background: linear-gradient(var(--mint), var(--mint)) 0 calc(100% - 0.1875rem) / 100% 0.4375rem no-repeat;
    }
    &:hover {
      color: var(--blue);
    }
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    position: relative;
    &:hover .dropdown-content {
      /* display: flex; */
      opacity: 1;
      height: fit-content;
      z-index: 1;
      padding: 0.25rem;
    }
    .dropdown-content {
      overflow: hidden;
      opacity: 0;
      height: 0;
      transition: all 0.2s ease-out;
      display: flex;
      flex-direction: column;
      position: absolute;
      background: #fff;
      top: 2.5rem;
      left: 1rem;
      border: 0.0625rem solid rgba(0, 0, 0, 0.2);
      border-radius: var(--border-radius);

      a {
        width: fit-content;

        &:not(:first-child) {
          margin-top: 0;
        }
      }
    }
  }
  .btn-wrapper {
    margin: 0;

    > a {
      margin: 0.5rem;
    }
  }
  .button {
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0.5rem 1.25rem;
    text-align: center;
    margin-left: 0.5rem;
    letter-spacing: 0.0625rem;
    background: var(--blue);
    color: #fff;
    &:hover {
      /* border-bottom: 0; */
      background: var(--blue);
      color: var(--mint);
    }
    &[aria-current] {
      background-color: var(--light-blue);
    }
  }
  .give {
    background-color: var(--highlight);
  }
  .build,
  .build[aria-current] {
    background-color: #9268e4;
  }
  /* .external:after {
    content: '◥';
    position: relative;
    right: -0.1875rem;
    top: -0.4375rem;
    font-size: 0.65rem;
  } */
  @media screen and (max-width: 64rem) {
    a {
      margin: 0.6rem;
    }
  }
  @media screen and (max-width: 56.25rem) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: 15.625rem;
    height: 100vh;
    padding-left: 1rem;
    padding-top: 3rem;
    box-shadow: var(--shadow);
    transform-origin: 0.0625rem;
    transition: all 0.3s ease-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    a,
    .button {
      margin: 1rem;
    }
    .btn-wrapper {
      display: flex;
      flex-direction: column;
    }
    .orange {
      margin-top: 1rem;
      width: 9.5rem;
    }
  }
`;
