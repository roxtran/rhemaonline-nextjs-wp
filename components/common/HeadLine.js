import Image from 'next/image'
import styled from 'styled-components'
import { Button } from '../../styles/GlobalStyle'

export default function HeadLine({
  imgUrl,
  title,
  blur,
  desc,
  btnText,
  btnLink,
  height
}) {
  return (
    <HeadLineWraper height={height}>
      <Image
        src={imgUrl}
        alt='headline image'
        layout='fill'
        objectFit='cover'
      />
      {blur && <Blur blur={blur}></Blur>}
      <div className='content-wrapper'>
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
        {btnText && (
          <HeadLineBtn className='white' href={btnLink} target='_blank'>
            {btnText}
          </HeadLineBtn>
        )}
      </div>
    </HeadLineWraper>
  )
}
const HeadLineWraper = styled.div`
  position: relative;
  height: ${(props) => (props.height ? props.height : '450px')};
  Image {
    z-index: 0;
  }
  .content-wrapper {
    max-width: 90vw;
    position: absolute;
    text-align: center;
    color: var(--white);
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  h1 {
    text-shadow: var(--textShadow);
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-shadow: var(--textShadow);
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`
const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
  backdrop-filter: ${(props) => (props.blur ? props.blur : null)};
`
const HeadLineBtn = styled(Button)`
  font-weight: bold;
  border-radius: 50px;
  font-size: 1.1rem;
  padding: 12px 44px;
`
