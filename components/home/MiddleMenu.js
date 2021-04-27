import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'

export default function MiddleMenu() {
  return (
    <MiddleWrapper>
      <Link href={paths.leadership}>
        <a>
          <Image src='/img/leadership-icon.webp' width={50} height={50} />
          <p>
            With a warm smile, the leaders of Rhema Christian Ministries are
            taskes with operational and ecclesiatial exellence.
          </p>
          <h3>Leadership</h3>
        </a>
      </Link>
      <Link href={paths.beliefs}>
        <a>
          <Image src='/img/beliefs-icon.webp' width={50} height={50} />
          <p>
            At Rhema what we believe is important to us but not as much as the
            one in whom we believe.
          </p>
          <h3>Beliefs</h3>
        </a>
      </Link>
      <Link href={paths.ministries}>
        <a>
          <Image src='/img/ministries-icon.webp' width={57.5} height={50} />
          <p>From our family to yours.</p>
          <h3>Ministries</h3>
        </a>
      </Link>
      <Link href={paths.grow}>
        <a>
          <Image src='/img/grow-icon.webp' width={50} height={50} />
          <p>
            We invite you to hear the voice of the Master calling you, even as
            “Deep calleth unto deep” (Psalm 42:7)
          </p>
          <h3>Grow</h3>
        </a>
      </Link>
    </MiddleWrapper>
  )
}

export const MiddleWrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: calc(100vh - 35vh);
  left: calc((100vw - 1200px) / 2);
  z-index: 1;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  a {
    min-height: 300px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 2.5rem 2.5rem;
    flex: 1;
    border-right: 1px dashed rgba(122, 207, 255, 0.3);

    p {
      margin: 1.25rem 0;
    }

    h3 {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 95vw;
    left: calc((100vw - 95vw) / 2);
  }

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    position: relative;
    top: 50px;
    width: 50vw;
    left: calc((100vw - 50vw) / 2);

    a {
      border-bottom: 1px dashed rgba(122, 207, 255, 0.3);
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    width: 80vw;
    left: calc((100vw - 80vw) / 2);
  }
`
