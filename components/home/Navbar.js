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
        <svg
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
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
        <button href='/giving'>Giving</button>
      </Menu>
    </Nav>
  )
}

export const Nav = styled.nav`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 4%;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  align-items: center;
  opacity: 95%;
  z-index: 2;

  .mobileIcon {
    display: none;

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

  button {
    background: var(--orange);
    color: white;
    font-weight: bold;
    padding: 12px 22px;
    border-radius: 5px;
    border: none;
    margin-left: 1rem;
    cursor: pointer;

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
