import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Image from "next/image";
import ImageSlider from "components/common/ImageSlider";
import Meta from "components/common/meta";
import { VideoWrapper } from "pages/sermons/styles";
import styled from "styled-components";

const slides = [
  {
    title: "slide 1",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_3082-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 2",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_3031-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 3",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2985-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 4",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2965-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 5",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2886-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 6",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2878-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 7",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2846-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 8",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2790-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 9",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_2789-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
];

export default function Index() {
  const pageTitle = "Together we build to change lives";
  const pageImage = "/img/fund-raising/slide.jpg";

  const giveBtn = (
    <div className="button-wrapper give">
      <Button
        href="https://rhemachristianministries.churchcenter.com/giving/to/other-income-fundraisers"
        data-open-in-church-center-modal="true"
      >
        Support this project
      </Button>
    </div>
  );

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(0.0625rem)" height="46rem" mbHeight="22rem" />
      <PageContainer>
        <h1 id="title">Let's Build to Serve and Transform Together</h1>
        <p className="description highlight">
          Join us in building a house where worship, spiritual growth, and God’s presence thrive.
        </p>
        <div className="wrapper build">
          <div className="left-wrapper flex-column">
            <ImgWrapper>
              <Image
                src="/img/fund-raising/bricks.png"
                alt="building"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="item-list">
              <div className="item">
                <a href="https://rhemacanada.ca/" target="_blank">
                  <img className="icon" width={32} src="/img/fund-raising/rhema-icon.jpeg" alt="Rhema Canada" />
                  <div className="text">Rhema Canada</div>
                </a>
              </div>
              <div className="item">
                <a href="#" target="_blank">
                  <img className="icon" width={32} src="/img/fund-raising/funding-icon.png" alt="Location Funding" />
                  <div className="text">Location Funding</div>
                </a>
              </div>
              <div className="item">
                <a
                  href="https://rhemaonline.ca/visit-us
"
                  target="_blank"
                >
                  <img
                    className="icon"
                    width={32}
                    src="/img/fund-raising/location-icon.png"
                    alt="Toronto, Ontario, CA"
                  />
                  <div className="text">Toronto, Ontario, CA</div>
                </a>
              </div>
            </div>
          </div>
          <div className="right-wrapper flex-column highlight-border-top">
            <div className="target">
              <span className="number highlight">CA$ 2,000,000</span> - Target Goal
            </div>
            <p>funded amount as of today: $8,000</p>
            <p className="gift">Every gift, big or small, brings us closer to funding our new home!</p>
            {giveBtn}
            <div className="share-wrapper">
              <p>Share with friends:</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/Rhemachristianministries/" target="_blank">
                  <img src="/img/fund-raising/facebook-icon.jpeg" alt="Facebook" />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Frhemacanada" target="_blank">
                  <img src="/img/fund-raising/twitter-icon.jpeg" alt="Twitter" />
                </a>
                <a href="mailto:info@rhemaonline.ca">
                  <img src="/img/fund-raising/email-icon.jpeg" alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="message" className="wrapper pastor introduction">
          <div className="left-wrapper">
            <h2 className="highlight">From our senior pastor</h2>
            <p>
              For over 25 years, we have been dedicated to changing and affecting lives, serving families, children, and
              older adults in the Greater Toronto Area. Take a look at some of our work...
            </p>
          </div>

          <div className="right-wrapper">
            <VideoWrapper>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4tNHqncqVFE?autoplay=0&mute=0&loop=0&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
                title="iframe video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </VideoWrapper>
            <div className="pastor-name">
              <span>Orim M. Meikle</span> <br />
              Senior Pastor of Rhema Canada
            </div>
          </div>
        </div>
        <div id="the-reason" className="wrapper reason">
          <div className="reason-wrapper">
            <h2>The reason for this fundraising</h2>
            <p>
              Rhema Christian Ministries (RCM) is seeking the perfect place to call our home to expand our mission of
              changing lives in the Greater Toronto Area. For the past 25 years, we’ve served families, children, and
              older adults through vital programs like our food bank, that provides essential aid to those in need. This
              new space will allow us to continue this work while creating a hub for community growth and
              transformation.
            </p>
            <p>
              We invite you to partner with us on this exciting journey. Our goal is to raise $2 million, divided into
              four manageable phases, allowing us to focus on each milestone as we progress. Your support will help us
              reach these targets, ensuring we secure a space that reflects the heart of God through Rhema Christian
              Ministries: building community, offering hope, and advancing God’s Kingdom. Let’s grow together as we
              build together.
            </p>
          </div>
        </div>
        <div id="the-numbers" className="wrapper numbers">
          <div className="expected-goal flex-column">
            <div className="number highlight">2026</div>
            <div className="subtitle">
              <b>Expected Goal Reached</b>
              <br /> by the next 2 years
            </div>
            <div className="copy">
              2025 Goals: As our campaign gains momentum, we’ll unite our community through outreach events such as
              dinner gatherings, bus trips, and more.
            </div>
            <div className="line"></div>
          </div>
          <div className="funded-amount flex-column">
            <div className="number highlight">$25K</div>
            <div className="subtitle">
              <b>Funded Amount</b>
              <br /> to be raised in Phase 1
            </div>
            <div className="copy">
              At the same time, we’ll keep our church members engaged and informed through social media, email updates,
              and pledge drives, ensuring everyone can participate in this exciting journey.
            </div>
            <div className="line"></div>
          </div>
          <div className="funded-raised flex-column">
            <div className="number highlight">$8K+</div>
            <div className="subtitle">
              <b>Fund Raised</b>
              <br /> as of Jan 10, 2025
            </div>
            <div className="copy">
              Together, we can achieve this vision. Every act of giving is a testament to the power of unity and shared
              purpose, reminding us that no gift is too small when it comes from the heart.
            </div>
            <div className="line"></div>
          </div>
        </div>
        {/* <div id="give" className="wrapper give">
          <iframe
            src="https://rhemachristianministries.churchcenter.com/giving/to/other-income-fundraisers"
            className=""
            frameBorder="0"
          ></iframe>
        </div> */}
        <div className="divider"></div>
        <div id="our-project" className="wrapper flex-column">
          <h2 className="read-more">Read more about our project</h2>
          <div className="button-wrapper">
            <Button href="#introduction">Introduction</Button>
            <Button href="#message">Message from our Senior Pastor</Button>
            <Button href="#goals">2025 Goals</Button>
          </div>
        </div>
        <div id="introduction" className="wrapper introduction">
          <div className="left-wrapper">
            <h2 className="highlight">Introduction</h2>
            <p>
              <i>“We’re Building for the Future – Together We Build!”</i> – Rhema Christian Ministries
            </p>
            <p>
              At Rhema Christian Ministries, we are on a journey to find the perfect place to call our home—a dwelling
              that will allow us to expand our ministry and meet the needs of the communities we serve in the Greater
              Toronto Area.
            </p>
            <p>
              For over 20 years, our mission has been to change and affect lives through the power of God’s love,
              serving families—children, young and older adults alike—with care and compassion. A cornerstone of this
              mission is our food bank, which provides essential support to individuals and families in need. This vital
              service has been a lifeline for so many, and we are committed to continuing this work unhindered.
            </p>
          </div>

          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/fund-raising/introduction.jpeg"
                alt="introduction"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
        </div>
        <div className="wrapper introduction">
          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/fund-raising/introduction1.jpeg"
                alt="introduction1"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
          <div className="left-wrapper">
            <p>
              We envision a space where we can do even more: a home that supports our ministry work, nurtures families,
              provides resources for children and youth to thrive, ensures our older adults are cared for with dignity,
              and sustains our food bank, Christmas community dinner and Christmas toy drive as a beacon of hope for our
              local communities.
            </p>
            <p>
              This new home will be a hub of transformation, a place where lives are changed, and communities are
              strengthened. Together, we will build a foundation for growth, hope, and impact—one brick at a time.
            </p>
            <p>
              We invite you to partner with us in this exciting endeavor. Your support will help us secure and develop a
              space that reflects the heart of God through Rhema Christian Ministries: changing lives, building
              community, and advancing the Kingdom of God.
            </p>
            <p>Let’s grow together as we build together!</p>
          </div>
        </div>
        <div id="goals" className="wrapper goals">
          <h2 className="highlight">2025 Goals</h2>
          <p className="description">
            As the campaign gains momentum, we'll host community outreach events, including dinner gatherings and other
            activities and events while continuing to engage church members through social media, email updates, and
            pledge drives.
          </p>
          <ImageSlider slides={slides} />
        </div>

        <div className="divider"></div>

        <div className="wrapper help-us flex-column">
          <p className="description">Help us move closer to creating a lasting legacy</p>
          <h2 className="">Together we build the house of God</h2>
          {giveBtn}
          <ImgWrapper>
            <Image
              src="/img/fund-raising/bottom-image.jpeg"
              alt="introduction"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </ImgWrapper>
        </div>
      </PageContainer>
    </>
  );
}

const PageContainer = styled(Container)`
  background: #181426;
  color: #ffffff;
  padding-top: 3rem;
  font-family: "Calibri", sans-serif;

  .highlight {
    color: #9168e4;
  }
  h1 {
    color: #fff;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    margin-bottom: -1rem;
    font-size: 3.5rem;
    max-width: 90vw;

    @media screen and (min-width: 48rem) {
      font-size: 4rem;
    }
  }
  h2 {
    color: #fff;
    font-family: "League Spartan", sans-serif;
    margin-bottom: -1rem;
    font-size: 3.5rem;
  }
  .description {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    text-align: center;
    max-width: 90vw;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 1.35rem;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 5rem;

    > div {
      min-width: 22rem;
    }
  }

  ${ImgWrapper} {
    width: 100%;
    height: 22rem;
  }

  .give {
    ${Button} {
      background-color: #9168e4;
      font-size: 1.85rem;
      margin: 1rem 0 2rem;
      border-radius: 1rem;
      border: 2px solid #9888c4;
      padding: 0.5rem 2rem;

      &:hover {
        box-shadow: unset;
      }
    }
  }

  .left-wrapper {
    flex: 1;

    .item-list,
    .item > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
      gap: 0.5rem;
      color: #fff;
    }
  }
  .highlight-border-top {
    border-top: 0.5rem solid #9168e4;
    padding-top: 2rem;
  }
  .right-wrapper {
    flex: 1;

    .target {
      font-weight: 600;
      font-family: "League Spartan", sans-serif;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 1.75rem;
      gap: 0.5rem;

      .number {
        font-size: 3.25rem;
        min-width: 15rem;
        line-height: 1;
      }
    }

    p {
      font-size: 1.75rem;
      line-height: 1.1;
      margin: 0 0 1rem;
    }
    p.gift {
      font-size: 2.15rem;
    }

    .share-wrapper {
      display: flex;
      gap: 1rem;

      .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  .reason-wrapper {
    background-color: #40325e;
    margin: 3rem 1.5rem 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
  .wrapper.numbers {
    display: flex;
    gap: 2rem;
    margin: 2rem 0 4rem;
    align-items: stretch;

    > div {
      flex: 1 1 30%;
      align-items: center;
      text-align: center;
      padding: 1rem;
      min-width: 15.625rem;
    }
    .number {
      font-size: 4rem;
      font-weight: 600;
    }
    .subtitle {
      margin: -1rem 0 2.5rem;
      font-size: 1.25rem;
      line-height: 1.3;
    }
    .line {
      border-bottom: 0.25rem solid #9168e4;
      width: 25%;
      padding-top: 2rem;
    }
  }
  .wrapper.give {
    width: 100%;
    position: relative;
    display: block;
    max-width: ${def.wrapper.width};
    margin: auto;
    /* height: 75vh; */

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    @media screen and (max-width: 64rem) {
      max-width: 90vw;
    }
  }
  .divider {
    border-bottom: 0.125rem solid #493a69;
    width: 65%;
  }
  #our-project {
    align-items: center;
    gap: 1.5rem;

    h2.read-more {
      margin-top: 1.5rem;
    }

    .button-wrapper {
      display: flex;
      gap: 2rem;
      margin-bottom: 5rem;
      flex-wrap: wrap;
      justify-content: center;

      ${Button} {
        background-color: #40325e;
        font-size: 1.25rem;
        border-radius: 5rem;
        border-color: #fff;
        padding: 0.5rem 4rem;
        border: 2px solid #493a69;

        &:hover {
          box-shadow: unset;
        }
      }
    }
  }
  .wrapper.introduction {
    align-items: center;
    gap: 3rem;
    margin-bottom: 5rem;

    ${ImgWrapper} {
      width: 100%;
      height: 35rem;
    }
  }

  .wrapper.goals {
    align-items: center;
    gap: 1rem;
    margin: 2rem 0 5rem;

    h2 {
      text-align: center;
      width: 100%;
    }

    .description {
      font-size: 1.5rem;
    }

    ${ImgWrapper} {
      max-width: unset;
      height: 44rem;
    }
  }

  .wrapper.pastor {
    margin: 8rem 0 5rem;

    h2 {
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.75rem;
    }

    .left-wrapper {
      flex: 1 1 40%;
    }
    .right-wrapper {
      flex: 1 1 50%;
      overflow: hidden;

      .pastor-name {
        text-align: center;
        font-size: 1.25rem;

        span {
          font-size: 1.75rem;
          font-weight: bold;
        }
      }
    }

    ${VideoWrapper} {
      width: 100%;
      height: 20rem;
      margin-bottom: 1rem;
    }
  }

  .wrapper.help-us {
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0;
    margin: 3rem 0 2rem;

    h2 {
      line-height: 1;
    }
    p {
      margin: 0;
      letter-spacing: 0.0625rem;
    }
    ${ImgWrapper} {
      min-width: unset;
      width: 18rem;
      height: 7rem;
    }
  }
`;
