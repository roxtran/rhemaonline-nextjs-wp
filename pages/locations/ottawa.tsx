import HeadLine from 'components/common/HeadLine'
import Head from 'next/head'
import Image from 'next/image'
import Meta from '../../components/common/meta'
import { Button } from '../../styles/GlobalStyle'
import { LocationContainer, VideoWrapper } from './toronto'

export default function Ottawa() {
  return (
    <>
      <Meta title='Ottawa Location - Rhema - Changing & Affecting Lives!' />
      <Head>
        <script src='https://js.churchcenter.com/modal/v1'></script>
      </Head>
      <HeadLine imgUrl='/img/ottawa.jpg' title='Ottawa' blur='blur(10px)' />
      <LocationContainer>
        <div className='content-wrapper'>
          <h1>Ottawa Campus</h1>
          <div className='line'></div>
          <div className='icon-info'>
            <a href='tel:6133211781' className='icon-group'>
              <div className='icon'>
                <Image src='/img/phone-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Phone</h4>
                <p>(613) 321-1781</p>
              </div>
            </a>
            <div className='icon-group'>
              <div className='icon'>
                <Image src='/img/fax-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Fax</h4>
                <p>(613) 321-2910</p>
              </div>
            </div>
            <a href='mailto:info@rhemaonline.ca' className='icon-group'>
              <div className='icon'>
                <Image src='/img/email-icon.png' width={75} height={75} />
              </div>
              <div className='text'>
                <h4>Email</h4>
                <p>info@rhemaonline.ca</p>
              </div>
            </a>
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
                loading='lazy'
              ></iframe>
            </div>
          </div>
          <div className='btn-wrapper'>
            <div className='btn-bg'>
              <Button
                className='btn'
                href='https://rhemachristianministries.churchcenter.com/people/forms/59260'
                data-open-in-church-center-modal='true'
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </LocationContainer>
    </>
  )
}
