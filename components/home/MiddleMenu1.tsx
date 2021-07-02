import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'
import { motion } from 'framer-motion'

const slideRight = {
  hidden: { y: -200, opacity: 0 },
  show: {
    y: [0, -50, 0],
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  exit: {
    opacity: 1,
    y: 400,
    // transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export default function MiddleMenu() {
  return (
    <MiddleWrapper>
      <div className='items'>
        <motion.div className='item'>
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
        </motion.div>
        <div className='item'>
          <Link href={paths.beliefs}>
            <a>
              <Image
                src='/img/beliefs-icon.svg'
                width={50}
                height={50}
                alt='beliefs-icon'
              />
              <p>
                At Rhema what we believe is important to us but not as much as
                the one in whom we believe.
              </p>
              <h4>Beliefs</h4>
            </a>
          </Link>
        </div>
        <div className='item'>
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
        </div>
        <div className='item'>
          <Link href={paths.grow}>
            <a>
              <Image
                src='/img/grow-icon.svg'
                width={50}
                height={50}
                alt='grow-icon'
              />
              <p>
                We invite you to hear the voice of the Master calling you, even
                as “Deep calleth unto deep” (Psalm 42:7)
              </p>
              <h4>Grow</h4>
            </a>
          </Link>
        </div>
      </div>
    </MiddleWrapper>
  )
}
const MiddleWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;

  .items {
    position: relative;
    top: -150px;
    width: 1200px;
    margin: auto;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);
  }
  .item {
    background: rgba(255, 255, 255, 1);
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
    .items {
      top: -5px;
      margin-bottom: -6.25rem;
    }
    .item {
      min-width: 320px;
    }
    .item:nth-child(1),
    .item:nth-child(2) {
      border-bottom: 1px dashed rgba(122, 207, 255, 0.3);
    }
    .item:nth-child(2) {
      border-right: none;
    }
  }
  @media screen and (max-width: 640px) {
    .item:nth-child(1),
    .item:nth-child(3) {
      border-right: none;
    }
    .item:nth-child(3) {
      border-bottom: 1px dashed rgba(122, 207, 255, 0.3);
    }
  }
`
