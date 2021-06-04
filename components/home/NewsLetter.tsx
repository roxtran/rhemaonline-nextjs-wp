import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Button, Container, ImgWrapper } from '../../styles/GlobalStyle'

const NewsLetter = () => {
  return (
    <NewsLetterWrapper>
      <div className='text'>
        <h2>Our Weekly NewsLetter</h2>
        <p>
          orem ipsum dolor sit amet consectetur adipiscing elit per, vivamus
          potenti morbi egestas facilisis class tempus dictumst malesuada,
          semper pulvinar auctor tristique mattis himenaeos dapibus.
        </p>
        <Button
          href='https://myemail.constantcontact.com/This-Week---Rhema.html?soid=1101184914406&aid=S98FghfAf14'
          target='_blank'
          className='btn'
        >
          Call to Action
        </Button>
      </div>
      <a
        href='https://myemail.constantcontact.com/This-Week---Rhema.html?soid=1101184914406&aid=S98FghfAf14'
        target='_blank'
      >
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/newsletter/Annotation-2021-04-12 113911.png'
            alt='welcome image'
            layout='fill'
            objectFit='cover'
            // width={625}
            // height={360}
          />
        </ImgWrapper>
      </a>
    </NewsLetterWrapper>
  )
}

export default NewsLetter

const NewsLetterWrapper = styled(Container)`
  flex-direction: row;
  width: 1200px;
  max-width: 80vw;
  margin: auto;
  flex-wrap: wrap;
  .text {
    flex: 2;
    margin-right: 3rem;
    .btn {
      margin: 0.8rem 0 3.5rem;
    }
  }
  .img-wrapper {
    cursor: pointer;
    flex: 1;
    width: 400px;
    max-width: 100vw;
    height: 400px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
    &:hover {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 640px) {
    padding-bottom: 0;
    .text {
      margin-right: 0;
    }
  }
`
