import Image from 'next/image'
import styled from 'styled-components'

export default function HeadLine({ imgUrl, title, blur }) {
  return (
    <HeadLineWraper>
      <Image
        src={imgUrl}
        alt='headline image'
        layout='fill'
        objectFit='cover'
      />
      {blur && <div id='blur'></div>}
      <h1>{title}</h1>
    </HeadLineWraper>
  )
}
const HeadLineWraper = styled.div`
  position: relative;
  height: 450px;
  Image {
    z-index: 0;
  }
  #blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 1;
    backdrop-filter: blur(30px);
  }
  h1 {
    position: absolute;
    text-align: center;
    color: var(--white);
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: var(--textShadow);
    z-index: 2;
  }
`