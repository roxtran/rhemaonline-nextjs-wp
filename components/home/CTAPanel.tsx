import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from 'paths'
import { motion } from 'framer-motion'
import { slideLeft, slideRight, slideUp } from 'styles/animation'

const items = {
  show: {
    // boxShadow: '0px 7px 10px 0 rgba(122, 207, 255, 0.3)',
    // border: '4px solid rgb(16, 97, 162)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: { duration: 0.01, type: 'spring', when: 'afterChildren' }
  }
}

export default function MiddleMenu() {
  return (
    <CTAPanel>
      <motion.div className='items' variants={items} initial='hidden' animate='show' exit='exit'>
        <motion.div
          className='item'
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.25,
            damping: 8
          }}
        >
          <Link href={paths.giving}>
            Giving
          </Link>
          <div className='line'></div>
          <Link href={paths.ministries}>
            Ministries
          </Link>
        </motion.div>
        <motion.div
          className='item'
          variants={slideUp}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.15,
            damping: 8
          }}
        >
          <Link href={paths.connect}>
            The Care Centre Services
          </Link>
          <div className='line'></div>
          <Link
            href={paths.formLinks.prayerRequest}
            data-open-in-church-center-modal='true'>
            Prayer Request
          </Link>
        </motion.div>
        <motion.div
          className='item'
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: 'spring',
            delay: 0.15,
            damping: 8
          }}
        >
          <Link href={`${paths.getConnected}#get-involved`}>
            Get Involved
          </Link>
          <div className='line'></div>
          <Link
            href={paths.formLinks.becomeAMember}
            data-open-in-church-center-modal='true'>
            Become A Member
          </Link>
        </motion.div>
      </motion.div>
    </CTAPanel>
  );
}
const CTAPanel = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  margin: 2rem 0 4rem;

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
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    flex: 1;
    &:not(:last-child) {
      border-right: 1px dashed var(--shadow-color);
    }
    a {
      color: var(--heading-color);
      margin: 2rem;
      font-weight: bold;
      &:hover {
        color: var(--blue);
      }
    }
    .line {
      background-color: var(--blue);
      width: 200px;
      height: 3px;
    }
  }

  @media screen and (max-width: 1024px) {
    .item {
      min-width: 320px;
    }
    .item:nth-child(1),
    .item:nth-child(2) {
      border-bottom: 1px dashed var(--shadow-color);
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
      border-bottom: 1px dashed var(--shadow-color);
    }
  }
`
