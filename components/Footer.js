import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import paths from '../paths'

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='links'>
        <div className='list'>
          <h3>Home</h3>
          <ul>
            <li>
              <Link href={paths.about}>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href={paths.leadership}>
                <a>Leadership</a>
              </Link>
            </li>
            <li>
              <Link href={paths.beliefs}>
                <a>Beliefs</a>
              </Link>
            </li>
            <li>
              <Link href={paths.ministries}>
                <a>Family Ministries</a>
              </Link>
            </li>
            <li>
              <Link href={paths.torontoLocation}>
                <a>Toronto Campus</a>
              </Link>
            </li>
            <li>
              <Link href={paths.ottawaLocation}>
                <a>Ottawa Campus</a>
              </Link>
            </li>
            <li>
              <Link href={paths.grow}>
                <a>Grow</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='list'>
          <h3>Support</h3>
          <ul>
            <li>
              <Link href={paths.connect}>
                <a>We Care Services</a>
              </Link>
            </li>
            <li>
              <Link href={paths.foodbank}>
                <a>Foodbank</a>
              </Link>
            </li>
            <li>
              <Link href={paths.connect + '//#become-a-member'}>
                <a>Become A Member</a>
              </Link>
            </li>
            <li>
              <Link href={paths.getConnected + '//#groups'}>
                <a>Groups</a>
              </Link>
            </li>
            <li>
              <Link href={paths.giving}>
                <a>Give</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='list'>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href={paths.liveStream}>
                <a>Live Stream</a>
              </Link>
            </li>
            <li>
              <Link href={paths.facilityBookings}>
                <a>Facility Bookings</a>
              </Link>
            </li>
            <li>
              <Link href={paths.sermons}>
                <a>Sermons</a>
              </Link>
            </li>
            <li>
              <Link href={paths.news}>
                <a>News</a>
              </Link>
            </li>
            <li>
              <a href={paths.memberLogin} target='_blank'>
                Member Login
              </a>
            </li>
            <li>
              <Link href={paths.legalTerms}>
                <a>Legal Terms</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='icons'>
        <a href='/'>
          <div className='icon'>
            <Image src='/images/bible-icon.webp' width={30} height={30} />
          </div>
        </a>
        {/* <a href='https://rhema.ccbchurch.com/goto/login/' target='_blank'>
          <div className='icon'>
            <Image src='/images/groups-icon.webp' width={30} height={30} />
          </div>
        </a> */}
        <a
          href='https://tithe.ly/give_new/www/#/tithely/give-one-time/645887?kiosk=1'
          target='_blank'
        >
          <div className='icon'>
            <Image src='/images/giving-icon.webp' width={35} height={35} />
          </div>
        </a>
        <a href={paths.facebookPage} target='_blank'>
          <div className='icon'>
            <Image src='/images/facebook-icon.webp' width={30} height={30} />
          </div>
        </a>
        <a href={paths.twitterAccount} target='_blank'>
          <div className='icon'>
            <Image src='/images/twitter-icon.webp' width={35} height={35} />
          </div>
        </a>
        <a href={paths.youtubeChannel} target='_blank'>
          <div className='icon'>
            <Image src='/images/youtube-icon.webp' width={35} height={35} />
          </div>
        </a>
        <a href={paths.office365Site} target='_blank'>
          <div className='icon'>
            <Image src='/images/office-icon.webp' width={35} height={35} />
          </div>
        </a>
      </div>
      <div className='copyright'>
        © {new Date().getFullYear()} Rhema Canada.
      </div>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
  background: var(--lightBG);
  height: 550px;
  padding: 4.5% 5% 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .links {
    display: flex;
    justify-content: space-around;
    h3 {
      margin-left: -20px;
      margin-bottom: 1rem;
    }
    li {
      margin: 0.25rem 0;
    }
    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  }

  /* .list {
    border-right: 1px solid var(--textColor);
  } */

  .icons {
    margin: 3rem 0;
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

  @media screen and (max-width: 640px) {
    height: 100%;
    padding: 3rem;
    ul {
      margin-bottom: 2rem;
    }
  }
`
