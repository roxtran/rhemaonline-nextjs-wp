import Image from 'next/image'
import styled from 'styled-components'

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <div className='image'>
        <Image
          src='/images/welcome-image.webp'
          alt='welcome image'
          width={533}
          height={300}
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
      </div>
    </WelcomeWrapper>
  )
}

export const WelcomeWrapper = styled.div`
  position: relative;
  margin: 420px auto 320px;
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1%;
  .image {
    box-shadow: -35px 35px 0 0 rgba(122, 207, 255, 0.3);
    &:hover {
      box-shadow: 0 0 0 0 rgba(122, 207, 255, 0.3);
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
  }
  @media screen and (max-width: 1024px) {
    padding: 0 5%;
    margin-bottom: 15rem;
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
    margin-top: 12rem;
    justify-content: flex-start;
    flex-direction: column;

    .text {
      margin-left: 0;
      padding: 0 10%;
    }
    h2 {
      margin-top: 4rem;
    }
  }
`
