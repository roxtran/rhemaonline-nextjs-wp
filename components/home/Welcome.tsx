import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'
import { Button } from '../../styles/GlobalStyle'

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <div className='img-wrapper'>
        <Image
          src='/img/welcome-img.jpg'
          alt='welcome image'
          layout='fill'
          objectFit='cover'
          // width={625}
          // height={360}
        />
      </div>
      <div className='text'>
        <h2>Welcome to Rhema</h2>
        <p className='quote'>
          “We are a church that believes in Jesus Christ; a church that loves
          God and His people."
        </p>
        <p>
          <span>Rhema Christian Ministries</span> is a vibrant Spirit-filled
          church community designed to connect people to Jesus and to each other
          through authentic relationships. Through a dynamic combination of
          worship and word, we seek to Change and Affect Lives by equipping the
          whole person with sound biblical and spiritual truths and practical
          encouragement.
        </p>
        <Link href={paths.about}>
          <Button>More about us</Button>
        </Link>
      </div>
    </WelcomeWrapper>
  )
}
const WelcomeWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 320px auto 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .img-wrapper {
    flex: 1;
    position: relative;
    height: 380px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: -35px 35px 0 0 rgba(122, 207, 255, 0.3);
    &:hover {
      box-shadow: 0 0 0 0 rgba(122, 207, 255, 0.3);
    }
    @media screen and (max-width: 768px) {
      flex: none;
      width: 75vw;
      height: 300px;
      margin-bottom: 20px;
    }
  }
  .text {
    flex: 1;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    h2 {
      color: var(--blue);
      margin-bottom: 1rem;
    }
    p.quote {
      font-weight: bold;
      font-style: italic;
      margin-bottom: 1rem;
    }
    span {
      font-weight: bold;
    }
    a {
      width: 170px;
      margin-top: 1.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0 5%;
    margin: 300px auto 220px;
    .image {
      box-shadow: 0 0 0 0 rgba(122, 207, 255, 0.3);
    }
    .text {
      margin-left: 3rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 200px auto 100px;
    justify-content: flex-start;
    flex-direction: column;
    .text {
      margin-left: 0;
      padding: 0 5%;
    }
    h2 {
      margin-top: 3rem;
    }
  }

  @media screen and (orientation: portrait) {
  }
`
