import { Container, ImgWrapper } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";

const women = () => {
  const pageTitle = "Women's Ministry";
  const pageImage = "/img/women-img.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <WomenContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <p>
              <q>
                The Empowered Ladies’ Union (ELU) exists to create opportunities for women from all backgrounds to grow,
                pray and serve together.
              </q>
            </p>
            <p>
              Empowered Ladies Union (ELU) is a social network of ladies stretching across Canada with a mandate to
              explore critical issues facing women of all ages in the 21st century and the role that God’s Kingdom plays
              in bringing solutions to these issues. The ELU is also tasked with developing and executing programs that
              ensure that women are building healthy relationships, pursuing purpose while maintaining a proper
              work-life balance, and providing mentorship and nurturing for the daughters of the next generation.
            </p>
            <p>
              The Empowered Ladies’ Union (ELU) exists to create opportunities for women from all backgrounds to grow,
              pray and serve together. We are an oasis in an often-hectic world, and through a variety of activities and
              service opportunities, we help women cultivate authentic relationships and find rest, redemption and
              renewal in Christ.
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
              <a title="elu@rhemaonline.ca" href="mailto:elu@rhemaonline.ca">
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
              <a title="Ottawa" href="https://twitter.com/eluottawa?lang=en" target="_blank">
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
                src="/img/women-bw.jpg"
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
