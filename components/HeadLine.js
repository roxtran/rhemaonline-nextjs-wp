import Image from 'next/image'
import styled from 'styled-components'

export default function HeadLine() {
  return (
    <HeadLineWraper>
      <Image
        src='/img/events-image.webp'
        alt='headline image'
        layout='fill'
        objectFit='cover'
      />
      <div className='text'>
        <h1>Events</h1>
      </div>
    </HeadLineWraper>
  )
}

const HeadLineWraper = styled.div`
  position: relative;
  height: 450px;

  .text {
    position: absolute;
    color: var(--white);
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      text-shadow: var(--textShadow);
    }
  }
`

const ImageWrapper = styled.div``
