import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";
import { ImgWrapper } from "styles/GlobalStyle";
import { WomenContainer } from "./women";

const men = () => {
  const pageTitle = "Men's Ministry";
  const pageImage = "/img/men-img.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <MenContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <p>
              <q>Jesus is the source. All youth must be plugged into the source.</q> ~ Plugged In Youth Adult Ministry
            </p>
            <p>
              Men of Valor is a social network of men across Canada with a mandate to explore critical issues facing men
              of all ages in the 21st century and the role that God’s Kingdom plays in bringing solutions to these
              issues. The fellowship is also tasked with developing and executing programs that ensure that men are
              building healthy relationships, pursuing purpose with a good understanding of work-life balance, and
              providing opportunities for mentoring and nurturing the sons of the next generation.
            </p>
            <div className="icons">
              <a title="men@rhemaonline.ca" href="mailto:men@rhemaonline.ca">
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
          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/men.jpg"
                alt="men icon"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
        </div>
      </MenContainer>
    </>
  );
};

const MenContainer = styled(WomenContainer)``;

export default men;
