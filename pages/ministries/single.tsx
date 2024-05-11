import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";
import { ImgWrapper } from "styles/GlobalStyle";
import { WomenContainer } from "./women";

const single = () => {
  const pageTitle = "Single's Ministry";
  const pageImage = "/img/single-img.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <SingleContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <span>
              “Jesus is the source. All youth must be plugged into the source”. ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              Equipped Singles Ministry is a community of single Christians committed to living wholly and victoriously
              in Christ Jesus. Our mission is to support single Christians at every stage of their journey in developing
              personally and spiritually, while connecting with one another and living life to the full!
            </p>
          </div>
          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/single.jpg"
                alt="single"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
        </div>
      </SingleContainer>
    </>
  );
};

const SingleContainer = styled(WomenContainer)``;

export default single;
