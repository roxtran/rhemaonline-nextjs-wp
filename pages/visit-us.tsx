import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Meta from "components/common/meta";
import Video from "components/common/Video";
import { Button, Container, def } from "styles/GlobalStyle";
import paths from "paths";
import { useState } from "react";

export default function Location() {
  const [displayServiceTime, setDisplayServiceTime] = useState(false);

  return (
    <>
      <Meta title="Visit Us - Rhema - Changing & Affecting Lives!" />
      <Head>
        <script src="https://js.churchcenter.com/modal/v1"></script>
      </Head>
      <VideoWrapper>
        <Video src="/video/toronto_location (1080p).mp4" width="100%" height="80vh" />
      </VideoWrapper>
      <LocationContainer>
        <div className="content-wrapper">
          <h1>Toronto Campus</h1>
          <div className="line"></div>
          <h2>Two Ways To Join Us</h2>
          <div className="two-ways-wrapper">
            <div className="in-person-wrapper">
              <Button
                onClick={() => {
                  setDisplayServiceTime(!displayServiceTime);
                }}
              >
                <Image
                  width={550}
                  height={300}
                  src="/img/in-person1.jpg"
                  alt="In person photo"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
                <div className="text-wrapper">
                  <h3>In Person</h3>
                  Service Times & Location
                </div>
              </Button>
            </div>
            <div className="online-wrapper">
              <Button href={paths.liveStream}>
                <Image
                  width={550}
                  height={300}
                  src="/img/live-stream-1.jpg"
                  alt="In person photo"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
                <div className="text-wrapper">
                  <h3>Online</h3>
                  Live Stream
                </div>
              </Button>
            </div>
          </div>

          {displayServiceTime && (
            <div className="map-group">
              <div className="text-wrapper">
                <div className="text-border">
                  <h3>Our Service Times</h3>
                  <p>
                    <span>Worship Service:</span> Sundays – 11am
                  </p>
                  <p>
                    <span>Bible Study:</span> 1st, 2nd, & 3rd Wednesdays of every month - 7 PM
                  </p>
                  <span>Bellevue Manor (The Library Hall) 8083 Jane Street, Concord ON L4K 2M7</span>
                </div>
              </div>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11518.215823818044!2d-79.525299!3d43.8028678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fa87c0454df%3A0x9c682da6c43b9a8d!2sBellvue%20Manor!5e0!3m2!1sen!2sca!4v1698716086699!5m2!1sen!2sca"
                  width="1000"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
          <h2>Contact Us</h2>
          <div className="icon-info">
            <div className="icon-group">
              <div className="icon">
                <Image
                  src="/img/fax-icon.png"
                  alt="fax icon"
                  width={75}
                  height={75}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <div className="text">
                <h4>Fax</h4>
                <p>(416) 496-1795</p>
              </div>
            </div>
            <a href="tel:4164961794" className="icon-group">
              <div className="icon">
                <Image
                  src="/img/phone-icon.png"
                  alt="phone icon"
                  width={75}
                  height={75}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <div className="text">
                <h4>Phone</h4>
                <p>(416) 496-1794</p>
              </div>
            </a>
            <a href="mailto:info@rhemaonline.ca" className="icon-group">
              <div className="icon">
                <Image
                  src="/img/email-icon.png"
                  alt="email icon"
                  width={75}
                  height={75}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>info@rhemaonline.ca</p>
              </div>
            </a>
            <a href={paths.formLinks.contactUs} data-open-in-church-center-modal="true" className="icon-group">
              <div className="icon">
                <Image
                  src="/img/request-form.png"
                  alt="email icon"
                  width={75}
                  height={75}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <div className="text">
                <h4>Request A Call</h4>
                <p>Fill Form</p>
              </div>
            </a>
            <div className="icon-group">
              <div className="icon">
                <Image
                  src="/img/hours-icon.png"
                  alt="hours icon"
                  width={60}
                  height={60}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
              <div className="text">
                <h4>Hours</h4>
                <p>Mon - Fri</p>
                <p>9:00am - 4:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </LocationContainer>
    </>
  );
}

export const LocationContainer = styled(Container)`
  position: relative;
  background: #fff;
  margin-top: -100px;
  padding-top: 2rem;

  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
  }
  h1,
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .line {
    margin: 1rem auto;
    width: 10vw;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
  }
  .two-ways-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    .in-person-wrapper,
    .online-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a {
      position: relative;
      padding: 0;

      img {
        filter: brightness(30%);
      }
      .text-wrapper {
        position: absolute;
        color: #fff;
        top: 50%;
        width: 100%;
        transform: translate(0, -50%);
        opacity: 100%;

        h3 {
          color: #fff;
        }
      }

      &:hover img {
        filter: brightness(100%);
      }
      &:hover .text-wrapper {
        opacity: 0%;
      }
    }
  }
  .map-group {
    display: flex;
    margin: 0 auto 4rem;
    justify-content: space-between;
    max-width: 72rem;

    .text-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 1.25rem;
    }
    .map-wrapper {
      overflow: hidden;
    }
  }
  .icon-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 0 2rem;
    p {
      margin-bottom: 0;
    }
    .icon-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0 2.5rem;
      .icon {
        width: 125px;
        height: 125px;
        box-shadow: 0 0 28px 10px rgba(122, 207, 255, 0.4);
        border-radius: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 1rem;
        /* filter: hue-rotate(-20deg); */
      }
    }
  }
  @media screen and (max-width: 1280px) {
    /* .two-ways-wrapper {
      gap: 1rem;
    } */
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
`;
export const VideoWrapper = styled.div`
  @media screen and (max-width: 640px) {
    video {
      height: 60vh;
    }
  }
`;
