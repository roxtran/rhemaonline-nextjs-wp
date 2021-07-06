import Image from 'next/image'
import styled from 'styled-components'
import { Button, Container, ImgWrapper } from '../../styles/GlobalStyle'
import newsletters from '../../data/newsletters'

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <div className='text'>
        <h2>Our Weekly Newsletter</h2>
        <p>
          This is our way of keeping you up to date on all our events,
          activities, and relevant news. We invite you to check out what’s
          happing @ Rhema this week.
        </p>
        <Button href={newsletters[0].link} target='_blank' className='btn'>
          Learn More
        </Button>
      </div>
      <div className='newsletters'>
        {newsletters.map((newsletter) => (
          <a
            key={newsletter.link}
            className='newsletter'
            href={newsletter.link}
            target='_blank'
          >
            <ImgWrapper>
              <Image
                src={newsletter.imgUrl}
                alt='newsletter image'
                layout='fill'
                objectFit='cover'
              />
            </ImgWrapper>
          </a>
        ))}
      </div>
    </NewsletterWrapper>
  )
}

export default Newsletter

const NewsletterWrapper = styled(Container)`
  width: 1200px;
  max-width: 80vw;
  margin: auto;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  .text {
    width: 740px;
    margin-right: 3rem;
    .btn {
      margin: 0.55rem 0 3.25rem;
    }
  }
  .newsletters {
    width: 400px;
    /* height: 400px; */
    display: flex;
    flex-flow: row wrap;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 12px 36px 0px rgb(0 0 0 / 25%);
    /* gap: 0.15rem; */
  }
  .newsletter {
    width: calc(100% / 2);
    /* flex-shrink: 1; */
    flex-grow: 1;
    overflow: hidden;
  }
  ${ImgWrapper} {
    border-radius: 0;
    cursor: pointer;
    min-width: calc(400px / 3);
    min-height: calc(400px / 3);
    transition-duration: 0.2s;
    &:hover {
      opacity: 0.65;
    }
  }
  @media screen and (max-width: 640px) {
    padding-bottom: 0;
    .text {
      margin-right: 0;
    }
    ${ImgWrapper} {
      min-width: calc(300px / 3);
      min-height: calc(300px / 3);
    }
  }
`
