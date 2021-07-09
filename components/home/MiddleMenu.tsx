import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'
import { motion } from 'framer-motion'
import { slideLeft, slideRight } from '../../styles/animation'

const items = {
  show: {
    boxShadow: '0px 7px 10px 0 rgba(122, 207, 255, 0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: { duration: 0.1, type: 'spring', when: 'afterChildren' },
  },
}

export default function MiddleMenu() {
  return (
    <MiddleWrapper>
      <motion.div
        className='items'
        variants={items}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <motion.div
          className='item'
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.25,
            damping: 8,
          }}
        >
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
        <motion.div
          className='item'
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.15,
            damping: 8,
          }}
        >
          <Link href={paths.beliefs}>
            <motion.a>
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
            </motion.a>
          </Link>
        </motion.div>
        <motion.div
          className='item'
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.15,
            damping: 8,
          }}
        >
          <Link href={paths.ministries}>
            <motion.a>
              <Image
                src='/img/ministries-icon.svg'
                width={57.5}
                height={50}
                alt='ministries-icon'
              />
              <p>From our family to yours.</p>
              <h4>Ministries</h4>
            </motion.a>
          </Link>
        </motion.div>
        <motion.div
          className='item'
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.25,
            damping: 8,
          }}
        >
          <Link href={paths.grow}>
            <motion.a>
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
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </MiddleWrapper>
  )
}
const MiddleWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  top: -150px;

  .items {
    position: relative;
    margin: auto;
    width: 1200px;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
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
    margin-bottom: -6.25rem;
    top: -5px;

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
