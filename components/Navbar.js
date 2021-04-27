import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import paths from '../paths'

export default function Navbar() {
  return (
    <Nav>
      <Link href='/'>
        <a>
          <Image
            width={260}
            height={40}
            src='/images/RCM-Logo.webp'
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
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href={paths.locations}>
          <a>Locations</a>
        </Link>
        <Link href={paths.connect}>
          <a>Connect</a>
        </Link>
        <Link href={paths.sermons}>
          <a>Sermons</a>
        </Link>
        <Link href={paths.liveStream}>
          <a>Live Stream</a>
        </Link>
        <Link href={paths.events}>
          <a>Events</a>
        </Link>
        <Link href={paths.giving}>
          <a className='btn'>Give</a>
        </Link>
      </Menu>
    </Nav>
  )
}

export const Nav = styled.nav`
  /* backdrop-filter: blur(5px); */
  position: fixed;
  background: rgba(255, 255, 255, 0.97);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 4%;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  align-items: center;
  z-index: 2;

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
    text-decoration: none;
    margin: 0.9rem;
    font-weight: bold;

    &:hover {
      border-bottom: 4px solid var(--mint);
    }
  }

  a.btn {
    background: var(--orange);
    color: white;
    padding: 10px 22px;
    border-radius: 5px;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
    letter-spacing: 1px;

    &:hover {
      background: var(--blue);
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
