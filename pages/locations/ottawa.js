import styled from 'styled-components'
import Video from '../../components/common/Video'
import Image from 'next/image'
import { Container } from '../../styles/GlobalStyle'
import Meta from '../../components/common/seo-meta'

export default function Ottawa() {
  return (
    <>
      <Meta
        title='Ottawa Location - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <VideoWrapper>
        <Video src='/video/Rhema-Toronto.mp4' width='100%' height='75vh' />
      </VideoWrapper>
      <LocationContainer>
        <div className='content-wrapper'>
          <h1>Ottawa Campus</h1>
          <div className='line'></div>
          <div className='icon-info'>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/phone-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Phone</h4>
                <p>(613) 321-1781</p>
              </div>
            </div>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/fax-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Fax</h4>
                <p>(613) 321-2910</p>
              </div>
            </div>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/email-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Email</h4>
                <p>info@rhemaonline.ca</p>
              </div>
            </div>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/hours-icon.png' width={60} height={60} />
              </div>
              <div className='text'>
                <h4>Hours</h4>
                <p>Mon - Thurs</p>
                <p>9:00am - 3:00pm</p>
              </div>
            </div>
          </div>
          <div className='map-group'>
            <div className='text-wrapper'>
              <div className='text-border'>
                <h2>Our Location</h2>
                <p>
                  <span>Worship Service:</span> Sundays – 11:00am
                </p>
                <p>
                  <span>Bible Study:</span> Wednesday 7pm
                </p>
                <span>
                  RA Center: <br /> 2451 Riverside Dr., Ottawa, ON K1H 7X7
                </span>
              </div>
            </div>
            <div className='map-wrapper'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.3677853442805!2d-75.68654018444528!3d45.381751279100115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0609e36febf7%3A0x840991e9373515c1!2sRA%20Centre%2C%202451%20Riverside%20Dr.%2C%20Ottawa%2C%20ON%20K1H%207X7!5e0!3m2!1sen!2sca!4v1620364823544!5m2!1sen!2sca'
                width='1000'
                height='420'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </LocationContainer>
    </>
  )
}
const LocationContainer = styled(Container)`
  .content-wrapper {
    width: 1100px;
    max-width: 90vw;
  }
  h1 {
    text-align: center;
  }
  .line {
    margin: 1rem auto;
    width: 10vw;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
  }
  .icon-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  .icon-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem 2.5rem;
  }
  .icon {
    width: 125px;
    height: 125px;
    box-shadow: 0 0 28px 10px rgba(122, 207, 255, 0.4);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem 0;
    /* filter: hue-rotate(-20deg); */
  }
  .map-group {
    display: flex;
    margin: 2rem 0 4rem 0;
    justify-content: space-between;
  }
  .text-wrapper {
    background: var(--blue);
    color: var(--white);
    padding: 3rem 3.5rem 3.5rem 3.5rem;
    border-radius: 5px;
    height: 100%;
    width: 550px;
    z-index: 1;
    .text-border {
      width: 370px;
      max-width: 28vw;
    }
    span {
      font-weight: bold;
    }
    p {
      margin: 1.3rem 0;
    }
  }

  .map-wrapper {
    z-index: 2;
    width: 650px;
    height: 100%;
    margin-left: -100px;
    margin-top: 90px;
    box-shadow: var(--shadow);
    border-radius: 5px;
    overflow: hidden;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    .icon-info {
      justify-content: center;
    }
    .map-group {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text-wrapper {
        max-width: 80vw;
      }
      .text-border {
        width: 100%;
        max-width: 100%;
      }
      .map-wrapper {
        margin-left: 0;
        margin-top: 0;
        max-width: 80vw;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .text-wrapper {
      padding: 2.75rem;
    }
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.9rem;
    }
  }
`
const VideoWrapper = styled.div`
  @media screen and (max-width: 640px) {
    Video {
      height: 60vh;
    }
  }
`
