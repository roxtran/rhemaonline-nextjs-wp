import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const youth = () => {
  const pageTitle = "Plugged In Youth";
  const pageImage = "/img/youth-img.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <YouthContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <p>
              <q>Jesus is the source. All youth must be plugged into the source.</q> ~ Plugged In Youth Adult Ministry
            </p>
            <p>
              <b>Plugged In</b> is a social network of youth stretching across Canada with a mandate to explore critical
              issues facing youth and young adults between the ages of 12 – 23 and the role that God’s Kingdom plays in
              bringing solutions to these issues. The Fellowship is also tasked with developing and executing programs
              that ensure that youth are spiritually and educationally empowered, building healthy relationships, and
              engaging in wholesome activities.
            </p>
            <div className="icons">
              <a title="@pluggedInRhema" href="https://www.instagram.com/pluggedInRhema/" target="_blank">
                <div className="icon">
                  <Image
                    src="/img/social/instagram-icon-blue.svg"
                    alt="instagram icon"
                    width={42}
                    height={42}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </a>

              <a title="pluggedin@rhemaonline.ca" href="mailto:pluggedin@rhemaonline.ca">
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
            </div>
          </div>
          <div className="video-wrapper">
            <ReactPlayer width="100%" height="100%" url="https://fb.watch/5i-27tUbZC/" />
          </div>
        </div>
      </YouthContainer>
    </>
  );
};

const YouthContainer = styled(Container)`
  .wrapper {
    width: 100%;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    width: 50%;
    q {
      color: var(--blue);
      font-size: 2rem;
      text-align: center;
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
  .video-wrapper {
    width: 47%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  p {
    margin: 1.5rem 0;
  }
  @media screen and (max-width: 64rem) {
    flex-flow: column;
    .content-wrapper,
    .video-wrapper {
      width: 100%;
    }
  }
`;

export default youth;
