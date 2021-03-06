import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import paths from '../../paths'
import BibleModal from './Modals/BibleModal'

export default function Footer() {
  const [openBible, setOpenBible] = useState(false)

  return (
    <>
      <BibleModal openBible={openBible} setOpenBible={setOpenBible} />
      <FooterWrapper>
        <div className='links'>
          <div className='list'>
            <h4>Home</h4>
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
            <h4>Support</h4>
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
                <Link href={paths.connect + '#become-a-member'}>
                  <a>Become A Member</a>
                </Link>
              </li>
              <li>
                <Link href={paths.getConnected + '#groups'}>
                  <a>Groups</a>
                </Link>
              </li>
            </ul>
            <ul>
              <h4>Finance</h4>
              <li>
                <Link href={paths.giving}>
                  <a>Give</a>
                </Link>
              </li>
              <li>
                <a
                  href='/pdf/RCM-2020-Audited-Financial-Statements.pdf'
                  target='_blank'
                >
                  2020 Financial Statement
                </a>
              </li>
            </ul>
          </div>
          <div className='list'>
            <h4>Resources</h4>
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
          <a
            title='Bible'
            onClick={() => {
              setOpenBible(true)
            }}
          >
            <div className='icon'>
              <Image src='/img/social/bible-icon.svg' width={30} height={30} />
            </div>
          </a>
          <a
            title='Member Login'
            href='https://rhema.ccbchurch.com/goto/login/'
            target='_blank'
          >
            <div className='icon'>
              <Image src='/img/social/groups-icon.svg' width={30} height={30} />
            </div>
          </a>
          <a title='Giving' href={paths.giving} target='_blank'>
            <div className='icon'>
              <Image src='/img/social/giving-icon.svg' width={35} height={35} />
            </div>
          </a>
          <a title='Instagram' href={paths.instagramAccount} target='_blank'>
            <div className='icon'>
              <Image
                src='/img/social/instagram-icon.svg'
                width={35}
                height={35}
              />
            </div>
          </a>
          <a title='Facebook' href={paths.facebookPage} target='_blank'>
            <div className='icon'>
              <Image
                src='/img/social/facebook-icon.svg'
                width={30}
                height={30}
              />
            </div>
          </a>
          <a title='Twitter' href={paths.twitterAccount} target='_blank'>
            <div className='icon'>
              <Image
                src='/img/social/twitter-icon.svg'
                width={35}
                height={35}
              />
            </div>
          </a>
          <a title='YouTube' href={paths.youtubeChannel} target='_blank'>
            <div className='icon'>
              <Image
                src='/img/social/youtube-icon.svg'
                width={35}
                height={35}
              />
            </div>
          </a>
          <a title='Office 365' href={paths.office365Site} target='_blank'>
            <div className='icon'>
              <Image src='/img/social/office-icon.svg' width={35} height={35} />
            </div>
          </a>
        </div>
        <div className='copyright'>
          ?? {new Date().getFullYear()} Rhema Canada.
        </div>
      </FooterWrapper>
    </>
  )
}

const FooterWrapper = styled.div`
  position: relative;
  background: var(--light-grey-bg);
  height: 100%;
  padding: 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .links {
    display: flex;
    justify-content: space-around;
    h4 {
      margin-bottom: 0.75rem;
      margin-left: -20px;
    }
    ul {
      margin-bottom: 1.5rem;
    }
    li {
      margin: 0.25rem 0;
    }
  }
  .icons {
    margin: 1.25rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .icon {
    cursor: pointer;
    margin: 0.75rem;
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
    .links {
      flex-direction: column;
      margin-bottom: 0;
    }
    ul {
      margin-bottom: 2rem;
    }
  }
`
