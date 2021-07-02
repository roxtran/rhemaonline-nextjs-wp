import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'

export default function MiddleMenu() {
  return (
    <MiddleWrapper>
      <Link href={paths.leadership}>
        <a>
          <Image
            src='/img/leadership-icon.svg'
            width={50}
            height={50}
            alt='leadership-icon'
          />
          <p>
            With a warm smile, the leaders of Rhema Christian Ministries are
            taskes with operational and ecclesiatial exellence.
          </p>
          <h4>Leadership</h4>
        </a>
      </Link>
      <Link href={paths.beliefs}>
        <a>
          <Image
            src='/img/beliefs-icon.svg'
            width={50}
            height={50}
            alt='beliefs-icon'
          />
          <p>
            At Rhema what we believe is important to us but not as much as the
            one in whom we believe.
          </p>
          <h4>Beliefs</h4>
        </a>
      </Link>
      <Link href={paths.ministries}>
        <a>
          <Image
            src='/img/ministries-icon.svg'
            width={57.5}
            height={50}
            alt='ministries-icon'
          />
          <p>From our family to yours.</p>
          <h4>Ministries</h4>
        </a>
      </Link>
      <Link href={paths.grow}>
        <a>
          <Image
            src='/img/grow-icon.svg'
            width={50}
            height={50}
            alt='grow-icon'
          />
          <p>
            We invite you to hear the voice of the Master calling you, even as
            “Deep calleth unto deep” (Psalm 42:7)
          </p>
          <h4>Grow</h4>
        </a>
      </Link>
    </MiddleWrapper>
  )
}
const MiddleWrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  position: relative;
  top: -150px;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 1200px;
  max-width: 90vw;
  border-radius: 10px;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  a {
    min-height: 300px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 2.5rem 2.5rem;
    flex: 1;
    &:not(:last-child) {
      border-right: 1px dashed rgba(122, 207, 255, 0.3);
    }
    p {
      margin: 1.25rem 0;
    }
    h4 {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 1024px) {
    top: -5px;
    margin-bottom: -6.25rem;
    a {
      min-width: 320px;
    }
    a:nth-child(1),
    a:nth-child(2) {
      border-bottom: 1px dashed rgba(122, 207, 255, 0.3);
    }
    a:nth-child(2) {
      border-right: none;
    }
  }
  @media screen and (max-width: 640px) {
    a:nth-child(1),
    a:nth-child(3) {
      border-right: none;
    }
    a:nth-child(3) {
      border-bottom: 1px dashed rgba(122, 207, 255, 0.3);
    }
  }
`
