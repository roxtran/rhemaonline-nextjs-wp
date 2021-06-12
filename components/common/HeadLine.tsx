import Image from 'next/image'
import styled from 'styled-components'
import { Button } from '../../styles/GlobalStyle'

interface HeadLineProps {
  imgUrl: string
  title: string
  blur?: string
  desc?: string
  btnText?: string
  btnLink?: string
  height?: string
}

export default function HeadLine({
  imgUrl,
  title,
  blur,
  desc,
  btnText,
  btnLink,
  height
}: HeadLineProps) {
  return (
    <HeadLineWrapper height={height || '450px'}>
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
    </HeadLineWrapper>
  )
}
const HeadLineWrapper = styled.div<{ height: string }>`
  position: relative;
  height: ${(props) => props.height};
  Image {
    z-index: 0;
  }
  h1 {
    color: #fff;
    text-shadow: var(--text-shadow);
    margin-bottom: 0.5rem;
  }
  .content-wrapper {
    max-width: 90vw;
    position: absolute;
    text-align: center;
    color: #fff;
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-shadow: var(--text-shadow);
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
const Blur = styled.div<{ blur: string }>`
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
  padding: 0.75rem 2.75rem;
`
