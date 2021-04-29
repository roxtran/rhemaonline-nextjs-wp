import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'
import { Button } from '../../styles/GlobalStyle'
import { NavLink } from './NavLink'

export default function Navbar() {
  return (
    <Nav>
      <Link href='/'>
        <a>
          <Image
            width={230}
            height={40}
            src='/img/RCM-Logo.webp'
            alt='RCM-Logo'
          />
        </a>
      </Link>
      <div className='mobileIcon'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <Menu>
        <NavLink href='/'>
          <a>Home</a>
        </NavLink>
        <NavLink href={paths.locations}>
          <a>Locations</a>
        </NavLink>
        <NavLink href={paths.connect}>
          <a>Connect</a>
        </NavLink>
        <NavLink href={paths.sermons}>
          <a>Sermons</a>
        </NavLink>
        <NavLink href={paths.liveStream}>
          <a>Live Stream</a>
        </NavLink>
        <NavLink href={paths.events}>
          <a>Events</a>
        </NavLink>
        <NavLink href={paths.giving}>
          <Button className='orange'>Give</Button>
        </NavLink>
      </Menu>
    </Nav>
  )
}

export const Nav = styled.nav`
  position: fixed;
  background: rgba(255, 255, 255, 0.97);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 4%;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  align-items: center;
  z-index: 99;

  .mobileIcon {
    display: none;
    float: right;
    .bar1,
    .bar2,
    .bar3 {
      width: 25px;
      height: 2px;
      background-color: var(--textColor);
      margin: 6px 0;
      transition: 0.4s;
    }

    @media screen and (max-width: 768px) {
      display: block;
      width: 25px;
    }
  }
`

export const Menu = styled.div`
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
    display: none;
  }
`
