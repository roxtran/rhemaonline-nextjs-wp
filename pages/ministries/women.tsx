import { Container, ImgWrapper } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";

const women = () => {
  const pageTitle = "Women's Ministry";
  const pageImage = "/img/ministries/women2.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(0.3125rem)" />
      <WomenContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <p>
              The Women's Ministry is a cross-border social network for women focusing on critical issues affecting
              women today and the role of God’s Kingdom in addressing these challenges. Our objective includes
              developing programs that promote healthy relationships, purposeful living, work-life balance, and
              mentorship for the next generation.
            </p>
            <p>
              The Women's Ministry offers women from diverse backgrounds opportunities to grow, pray, and serve
              together. We promote a supportive community where women can cultivate authentic relationships and find
              rest, redemption, and renewal in Christ through various activities and service opportunities.
            </p>
            <div className="icons">
              <a title="wecare@rhemaonline.ca" href="mailto:wecare@rhemaonline.ca">
                <div className="icon">
                  <Image
                    src="/img/social/email-icon-blue.svg"
                    alt="email icon"
                    width={42}
                    height={42}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </a>
              <a title="Toronto" href="https://twitter.com/ELUToronto" target="_blank">
                <div className="icon">
                  <Image
                    src="/img/social/twitter-icon-blue.svg"
                    alt="twitter icon"
                    width={42}
                    height={42}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/ministries/women3.jpg"
                alt="women"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
        </div>
      </WomenContainer>
    </>
  );
};

export const WomenContainer = styled(Container)`
  .wrapper {
    width: 100%;
    max-width: 90vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    width: 50%;
    q {
      color: var(--blue);
      font-size: 2rem;
      font-style: italic;
    }
    .icons {
      display: flex;
      margin-bottom: 2rem;
    }
    .icon {
      margin: 0.5rem;
      &:hover {
        transform: translateY(-0.3125rem);
      }
    }
  }
  .right-wrapper {
    width: 47%;
    margin-left: 2rem;
  }
  ${ImgWrapper} {
    width: 100%;
    height: 25rem;
  }
  p {
    margin: 1.5rem 0;
  }
  @media screen and (max-width: 64rem) {
    .wrapper {
      flex-direction: column;
    }
    .content-wrapper {
      width: 100%;
    }
    .right-wrapper {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export default women;
