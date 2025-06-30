import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";

const participant = (
  <div className="item flex-column">
    <ImgWrapper>
      <Image
        src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/donation-icon.png"
        alt="icon"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </ImgWrapper>
    <div className="name">Elen Gene</div>
    <div className="raised">♡ $1,526 Raised</div>
    <Button href="#" target="_blank">
      Support
    </Button>
  </div>
);
export const participants = (
  <div className="participants">
    <div className="wrapper flex-column">
      <h3>Find out about participants that inspire you.</h3>
      <input type="text" placeholder="Search other participant(s)" />
      <div className="items">
        {participant}
        {participant}
        {participant}
      </div>
    </div>
  </div>
);

export default function Index() {
  const pageTitle = "2025 Walk-a-thon";
  const pageImage =
    "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/walkathon-main-banner-scaled.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title=""
        height="26rem"
        mbHeight="22rem"
        maxWidth={def.wrapper.width}
        borderRadius="0.5rem"
        isUnderMenu={false}
      />

      <EventPageContainer>
        <div className="wrapper main">
          <div className="content">
            <div className="date">August 9, 2025</div>
            <h2 id="title">
              Rhema Christian Ministries - 2025 Walkathon - Church Picnic & Community Fun.
            </h2>
            <br />
            <p>Dear friends,</p>
            <p>
              As we seek to fulfill our God-given mandate to change and affect lives, we invite you to support and
              participate in our <b>2025 walkathon</b>. All funds raised from this fundraising initiative will go toward
              our church building fund.
            </p>
            <p>
              By registering to participate, you commit to completing a 3 km or 5 km walk and to solicit pledges through
              your customized fundraising page.
            </p>
            <p>
              <b>Our goal for this initiative is to raise $15,000.</b> <br />
              However, you will determine the individual goal you will set for yourself.
            </p>
          </div>
          <div className="side flex-column">
            <div className="goal">
              <h3>Goal: $15,000</h3>
              <p>This fundraising initiative is organized by Rhema Christian Ministries.</p>
              <div className="button-wrapper flex-column">
                <Button href="https://myevent.com/rhemaonline/register" target="_blank">
                  Register
                </Button>
                <Button href="https://myevent.com/rhemaonline/donate" target="_blank">
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="date-time">
              <div className="date flex-column">
                <h4>Date</h4>
                August <br /> <h3>09</h3>
              </div>
              <div className="time flex-column">
                <h4>Time</h4>
                <span>
                  from <b>09:00am</b> <br /> to <b>02:00pm</b>
                </span>
              </div>
            </div>
            <div className="location">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.759233186875!2d-79.33397399999999!3d33.7535966!2m3!1f0!2f0!3f0!3m2!1i1023!2i768!4f13.1!3m3!1m2!1s0x882b32799efeee95%3A0x712d6f43fcb5fc3a!2s4169%20Bathurst%20St%2C%20Toronto%2C%20ON%20M3H%202R6!5e0!3m2!1sen!2sca!4v1749152507868!5m2!1sen!2sca"
                width="320"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="address">
                <ImgWrapper>
                  <Image
                    src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/location-icon.png"
                    alt="location icon"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </ImgWrapper>
                Earl Bales Park <br /> 4169 Bathurst St, North York, M3H 3P7
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper info">
          <div className="item flex-column">
            <div className="icon">
              <ImgWrapper>
                <Image
                  src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/calendar-icon.png"
                  alt="calendar icon"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
            </div>
            <div className="title">Date & time</div>
            <div className="text">Saturday August 9, 2025 Starting at 9:00 am</div>
          </div>
          <div className="item flex-column">
            <div className="icon">
              <ImgWrapper>
                <Image
                  src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/location-icon.png"
                  alt="location icon"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
            </div>
            <div className="title">Location</div>
            <div className="text">Earl Bales Park 4169 Bathurst St, North York, M3H 3P7</div>
          </div>
          <div className="item flex-column">
            <div className="icon">
              <ImgWrapper>
                <Image
                  src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/foot-path-icon.png"
                  alt="foot path icon"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
            </div>
            <div className="title">Distance</div>
            <div className="text">3 - 5 km Decided by each participant</div>
          </div>
          <div className="item flex-column">
            <div className="icon">
              <ImgWrapper>
                <Image
                  src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/money-icon.png"
                  alt="money icon"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
            </div>
            <div className="title">Goal</div>
            <div className="text">$15,000 Each participant will set their own target</div>
          </div>
        </div>
        <div className="wrapper progress">
          <div className="color"></div>
          <div className="content">
            <h4 className="goal">1% of Goal</h4>
            <h4 className="target">Target: $15,000</h4>
          </div>
          <ImgWrapper>
            <Image
              src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/walking-person.gif"
              alt="walking person icon"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </ImgWrapper>
        </div>
        <div className="wrapper raised">
          <h3>
            <u>$20</u> has been raised
          </h3>
        </div>
        <div className="wrapper help">
          <h2>YOU CAN HELP FINISH IT!</h2>
          <div className="text-wrapper">
            <div className="become">
              <h4>Become A Participant</h4>
              <div className="text">Sign up today with a monthly donation amount that is meaningful to you.</div>
            </div>
            <div className="donate">
              <h4>Donate To Participants</h4>
              <div className="text">Sign up today with a monthly donation amount that is meaningful to you.</div>
            </div>
          </div>
        </div>
        <div className="wrapper page">
          <h3>Sign up to participate and start to set up your fundraising page.</h3>
          <p>
            By registering to participate, <b>(1)</b> you commit to completing a 3 km or 5 km walk and <b>(2)</b> to
            solicit pledges through your own customized fundraising page.
          </p>
          <p>
            You will determine the individual goal you will set for yourself. For example, you could choose to raise:
          </p>
          <ul>
            <li>
              <b>$1,000</b>: this could be 20 pledges of $50 each
            </li>
            <li>
              <b>$500</b>: this could be 20 pledges of $25 each
            </li>
            <li>
              <b>$250</b>: this could be 10 pledges of $25 each
            </li>
            <li>
              <b>$100</b>: this could be 10 pledges of $10 each
            </li>
          </ul>
          <p>
            These are just some examples of how you can manage your fundraising goals. Your donations will enable us to
            secure a space that reflects the heart of God through Rhema Christian Ministries: building community,
            offering hope, and advancing God’s Kingdom.
          </p>
          <p>
            <b> To participate, simply complete and submit the Registration Form below.</b>
            <br />
            Register to start your personal fundraising page to collect your donations and track your progress. Or stop
            by the Care Desk after service on any Sunday to pick up a pledge form.
          </p>
          <p>
            Show your support by reaching out to your friends, family and coworkers for donations. Share pictures,
            videos and comments on social media using the hashtag <a href="#Change&AffectLives">#Change&AffectLives</a>.
          </p>
          <p>Have fun supporting a great cause!</p>
          <Button href="https://myevent.com/rhemaonline/register" target="_blank">
            Register
          </Button>
        </div>
        {/* {participants} */}
      </EventPageContainer>
    </>
  );
}

export const EventPageContainer = styled(Container)`
  padding-top: 1rem;
  @media screen and (min-width: 48rem) {
    padding-top: 3rem;
  }
  .wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    margin-bottom: 4rem;
  }
  .flex-column {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
  .main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media screen and (min-width: 48rem) {
      grid-template-columns: 1.75fr 1fr;
      align-items: start;
    }

    .side {
      gap: 1.5rem;

      .goal {
        border: 0.25rem solid var(--light-blue);
        border-radius: 0.75rem;
        padding: 1rem 2rem 2rem;
      }
      .date-time {
        display: flex;
        gap: 1.5rem;

        > div {
          border: 0.15rem solid rgba(0, 0, 0, 0.25);
          border-radius: 0.75rem;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 1rem 0.5rem;
          gap: 0;
        }

        h4 {
          border-bottom: 0.1rem solid;
          padding: 0.25rem;
          margin-bottom: 0.25rem;
        }
        h3 {
          padding: 0;
        }
      }
      .location {
        .map {
          width: 100%;
          border: 0.15rem solid rgba(0, 0, 0, 0.25) !important;
          border-radius: 0.75rem;
        }
        .address {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          align-items: center;
          margin: 0.5rem 0;
          font-size: 0.875rem;

          ${ImgWrapper} {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    text-align: center;

    @media screen and (min-width: 48rem) {
      grid-template-columns: repeat(4, 1fr);
    }

    > div {
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    .title {
      text-transform: uppercase;
      font-weight: bold;
    }

    ${ImgWrapper} {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  .progress {
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-radius: 1.5rem;
    position: relative;
    overflow: visible;
    height: 2rem;
    z-index: 0;
    .color {
      background: #d0fcd9;
      background: linear-gradient(90deg, rgba(208, 252, 217, 1) 0%, rgba(155, 186, 254, 1) 80%);
      height: 100%;
      width: 47%;
      border-radius: 1.5rem;
      position: absolute;
      z-index: 1;
      display: none;
    }
    ${ImgWrapper} {
      width: 1.6875rem;
      height: 3.125rem;
      transform: scaleX(-1);
      position: absolute;
      left: 0%;
      bottom: 50%;
      z-index: 3;
    }
    .content {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      z-index: 2;

      h4 {
        padding: 0;
      }
    }
  }
  .raised {
    text-align: center;
  }
  .help {
    background: rgb(249, 239, 244);
    border-radius: 2rem;
    padding: 1rem 2rem 2rem;
    text-align: center;

    .text-wrapper {
      display: flex;
      gap: 2rem;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;

      > div {
        max-width: 15rem;
      }
    }
  }
  .participants {
    width: 100%;
    background: #d0fcd9;
    background: linear-gradient(90deg, rgba(208, 252, 217, 1) 0%, rgba(155, 186, 254, 1) 80%);
    padding: 2rem 2rem 4rem;

    > div {
      margin: 0 auto;
      justify-content: center;
      align-items: center;
    }

    h3 {
      text-align: center;
    }

    input {
      width: 22rem;
      padding: 0.25rem 0.5rem;
      text-align: center;
      border-radius: 2rem;

      background-image: url("https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/search-icon.png");
      background-size: 1rem;
      background-position: 0.75rem;
      background-repeat: no-repeat;
    }

    .items {
      display: flex;
      gap: 2rem;
      margin-top: 3rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      > div {
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        background: #fff;
        padding: 2rem 3rem;
        border-radius: 1rem;
        width: unset;

        ${ImgWrapper} {
          width: 6rem;
          height: 6rem;
        }
        .name {
          font-weight: bold;
        }
        .raised {
          margin: 0.5rem 0;
        }
        a {
          border-radius: 2rem;
        }
      }
    }
  }
`;
