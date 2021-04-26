import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='links'>
        <div className='home'>
          <h3>Home</h3>
          <ul>
            <li>
              <Link href='/'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Leadership</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Beliefs</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Family Ministries</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Toronto Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Ottawa Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Grow</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='support'>
          <h3>Home</h3>
          <ul>
            <li>
              <Link href='/'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Leadership</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Beliefs</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Family Ministries</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Toronto Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Ottawa Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Grow</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='resources'>
          <h3>Home</h3>
          <ul>
            <li>
              <Link href='/'>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Leadership</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Beliefs</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Family Ministries</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Toronto Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Ottawa Campus</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Grow</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='icons'>
        <div className='icon'>
          <Image src='/images/bible-icon.webp' width={30} height={30} />
        </div>
        <div className='icon'>
          <Image src='/images/groups-icon.webp' width={30} height={30} />
        </div>
        <div className='icon'>
          <Image src='/images/giving-icon.webp' width={35} height={35} />
        </div>
        <div className='icon'>
          <Image src='/images/facebook-icon.webp' width={30} height={30} />
        </div>
        <div className='icon'>
          <Image src='/images/twitter-icon.webp' width={35} height={35} />
        </div>
        <div className='icon'>
          <Image src='/images/youtube-icon.webp' width={35} height={35} />
        </div>
        <div className='icon'>
          <Image src='/images/office-icon.webp' width={35} height={35} />
        </div>
      </div>
      <div className='copyright'>©{new Date().getFullYear()} Rhema Canada.</div>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
  height: 550px;
  padding: 4.5% 5% 5% 0;

  .links {
    display: flex;
    justify-content: space-around;
    h3 {
      margin-left: -15px;
      margin-bottom: 1rem;
    }
    li {
      margin: 0.2rem 0;
    }
  }

  .icons {
    margin: 6rem 0 3rem;
    display: flex;
    justify-content: center;
  }

  .icon {
    cursor: pointer;
    margin: 0.7rem;
    &:hover {
      transform: translateY(-5px);
    }
  }

  .copyright {
    text-align: center;
  }
`
