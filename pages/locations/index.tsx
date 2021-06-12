import styled from 'styled-components'
import Video from '../../components/common/Video'
import Image from 'next/image'
import { Container } from '../../styles/GlobalStyle'
import Meta from '../../components/common/meta'

export default function Locations() {
  return (
    <>
      <Meta title='Toronto Location - Rhema - Changing & Affecting Lives!' />
      <VideoWrapper>
        <Video src='/video/Rhema-Toronto.mp4' width='100%' height='75vh' />
      </VideoWrapper>
      <LocationContainer>
        <div className='content-wrapper'>
          <h1>Toronto Campus</h1>
          <div className='line'></div>
          <div className='icon-info'>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/phone-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Phone</h4>
                <p>(416) 496-1794</p>
              </div>
            </div>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/fax-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Fax</h4>
                <p>(416) 496-1795</p>
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
                  <span>Worship Service:</span> Sundays – 8:30am & 11am
                </p>
                <p>
                  <span>Bible Study:</span> Starting Wed. March 18th, 2020 until
                  further notice, our weekly Bible Study will be a one hour
                  gathering of intense prayer for community and national
                  healing. Service time will be 7:00pm – 8:00pm
                </p>
                <span>49-40 Carl Hall Road, Toronto, ON, M3K 2C1</span>
              </div>
            </div>
            <div className='map-wrapper'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2156851747036!2d-79.48001688449921!3d43.74761767911818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b31f3db445a91%3A0xe4bdbb1f2de0ba9b!2s40%20Carl%20Hall%20Rd%20%2349%2C%20North%20York%2C%20ON%20M3K%202C1!5e0!3m2!1sen!2sca!4v1619679421572!5m2!1sen!2sca'
                width='1000'
                height='420'
                style={{ border: 0 }}
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
  h2 {
    color: #fff;
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
