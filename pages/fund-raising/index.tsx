import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import Meta from "components/common/meta";
import Hero from "components/home/Hero";
import Image from "next/image";
import { VideoWrapper } from "pages/sermons/styles";
import styled from "styled-components";
import SlideType from "types/slide";

const goalSlides = [
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

interface Props {
  slides: SlideType[];
}

export default function Index({ slides }: Props) {
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
      <Meta title={pageTitle} ogImage={pageImage} />
      {/* <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(0.0625rem)" height="46rem" mbHeight="22rem" /> */}
      <Hero slides={slides} />

      <PageContainer>
        <h1 id="title">Let's Build to Serve and Transform Together</h1>
        <p className="description highlight">
          Join us as we invest in initiatives that strengthen families, support our community, and advance our mission.
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
              <span className="number highlight">CA$ 100,000</span> - 2026 Target Goal
            </div>
            <p>Funds Raised in 2025: $100,000</p>
            <p className="gift">Every contribution advances the work we are called to do.</p>
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
              For over 2 decades, we have been dedicated to changing and affecting lives, serving families, children,
              and older adults in the Greater Toronto Area. Take a look at some of our work...
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
              Rhema Christian Ministries is committed to serving families, youth, and older adults throughout the
              Greater Toronto Area. For over two decades, we have provided essential programs that strengthen lives,
              uplift communities, and share God’s love in meaningful ways.
            </p>
            <p>
              Our 2026 fundraising goal of $100,000 will empower us to expand these efforts, enhance our outreach, and
              continue serving with excellence. Your support helps ensure that our ministry remains a source of hope,
              care, and transformation.
            </p>
          </div>
        </div>
        <div id="the-numbers" className="wrapper numbers">
          <div className="expected-goal flex-column">
            <div className="number highlight">2026</div>
            <div className="subtitle">Target Goal: $100,000</div>
            {/* <div className="copy">
              2025 Goals: As our campaign gains momentum, we’ll unite our community through outreach events such as
              dinner gatherings, bus trips, and more.
            </div> */}
            <div className="line"></div>
          </div>
          <div className="funded-amount flex-column">
            <div className="number highlight">2025</div>
            <div className="subtitle">Funds Raised: $100,000</div>
            {/* <div className="copy">
              At the same time, we’ll keep our church members engaged and informed through social media, email updates,
              and pledge drives, ensuring everyone can participate in this exciting journey.
            </div> */}
            <div className="line"></div>
          </div>
          {/* <div className="funded-raised flex-column">
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
          </div> */}
        </div>
        <p>Your generosity makes this work possible. Every gift contributes to lasting impact.</p>
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
            <Button href="https://webte.my.canva.site/2025-year-in-review">2025 Year in Review</Button>
          </div>
        </div>
        <div id="introduction" className="wrapper introduction">
          <div className="left-wrapper">
            <h2 className="highlight">Introduction</h2>
            <p>
              <i>“We’re Building for the Future – Together We Build!”</i> – Rhema Christian Ministries
            </p>
            <p>
              At Rhema Christian Ministries, our mission is to transform lives through the power of God’s love. We serve
              children, youth, adults, and seniors through programs designed to uplift, equip, and support individuals
              and families in our community.
            </p>
            <p>
              For over two decades, our food bank, seasonal outreach initiatives, youth programs, and family support
              services have met critical needs. With your partnership, we continue this work and expand our reach to
              those who need it most.
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
              We envision a ministry that continues to grow, serve, and respond to the needs of our community. Through
              your support, we are able to strengthen families, empower young people, care for older adults with
              dignity, and offer practical help through our outreach and compassion programs.
            </p>
            <p>
              Your partnership helps us build a foundation for ongoing impact—one initiative, one act of service, and
              one transformed life at a time.
            </p>

            <p>Let’s grow together as we build together!</p>
          </div>
        </div>
        {/* <div id="goals" className="wrapper goals">
          <h2 className="highlight">2025 Goals</h2>
          <p className="description">
            As the campaign gains momentum, we'll host community outreach events, including dinner gatherings and other
            activities and events while continuing to engage church members through social media, email updates, and
            pledge drives.
          </p>
          <ImageSlider slides={goalSlides} />
        </div> */}

        {/* <iframe src="https://webte.my.canva.site/2025-year-in-review/" frameborder={0}></iframe> */}

        <div className="divider"></div>

        <div className="wrapper help-us flex-column">
          <p className="description">Help us move closer to creating a lasting legacy</p>
          <h2 className="">Together we build the house of God</h2>
          {giveBtn}
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getData {
        slides(where: { tag: "fund-raising", orderby: { field: SLUG, order: ASC } }) {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            slideFields {
              ctaUrl
              openLinkNewTab
              churchCenterModal
            }
          }
        }
      }
    `,
  });

  return {
    props: { slides: data?.slides?.nodes },
    revalidate: 10,
  };
}
