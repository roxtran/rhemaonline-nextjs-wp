import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Nav>
      <Link href='/'>
        <a>
          <Image
            width={250}
            height={50}
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
        <Link href='/locations'>
          <a>Locations</a>
        </Link>
        <Link href='/connect'>
          <a>Connect</a>
        </Link>
        <Link href='/sermons'>
          <a>Sermons</a>
        </Link>
        <Link href='/live-stream'>
          <a>Live Stream</a>
        </Link>
        <Link href='/events'>
          <a>Events</a>
        </Link>
        <Link href='/giving'>
          <a className='btn'>Giving</a>
        </Link>
      </Menu>
    </Nav>
  )
}

export const Nav = styled.nav`
  /* backdrop-filter: blur(5px); */
  position: fixed;
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 4%;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  align-items: center;
  opacity: 97%;
  z-index: 2;

  .mobileIcon {
    display: none;
    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background-color: var(--textColor);
      margin: 6px 0;
      transition: 0.4s;
    }

    @media screen and (max-width: 768px) {
      display: block;
      width: 50px;
    }
  }
`

export const Menu = styled.div`
  display: block;

  a {
    color: var(--textColor);
    text-decoration: none;
    margin: 1rem;
    font-weight: bold;

    &:hover {
      border-bottom: 4px solid var(--mint);
    }
  }

  a.btn {
    background: var(--orange);
    color: white;
    padding: 12px 22px;
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
