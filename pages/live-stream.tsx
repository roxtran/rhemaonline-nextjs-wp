import HeadLine from "components/common/HeadLine";
import Image from "next/image";
import { ImgWrapper } from "styles/GlobalStyle";
import Meta from "components/common/meta";
import styled from "styled-components";
import useWindowDimensions from "utils/useWindowDimension";

// import IframeVideo from "components/common/IFrameVideo";

// import SocialShare from "components/common/SocialShare";

export default function LiveStream() {
  const { width } = useWindowDimensions();

  const pageTitle = "Live Stream";
  const pageImage = "/img/live-stream.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title={pageTitle}
        desc="Sunday - <s>11am</s>"
        height="30rem"
        titlePosition="3.125rem"
        blur="blur(0.25rem)"
      />
      <LiveStreamWrapper width={width}>
        {width && (
          // <IframeVideo
          //   src="https://www.youtube.com/embed/FE4p8e6JvZo?modestbranding=1&autoplay=1&controls=0&rel=0"
          //   width={width >= 1024 ? "50vw" : "80vw"}
          //   height={width >= 768 ? "32.5rem" : "20rem"}
          // />

          <ImgWrapper className="img-wrapper">
            <Image
              src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2024/12/banner.jpg"
              alt="live stream"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </ImgWrapper>
        )}
      </LiveStreamWrapper>
      <ExperienceWrapper>
        <h3>Important Notice To Online Viewers</h3>
        <p className="text-wrapper">
          Starting this Sunday, December 08, 2024,
          <br />
          our Sunday Worship will be scheduled for in-person attendance only.
          <br />
          From 10:00 am to 12:00 pm. Doors will open at 9:00 am.
        </p>
        <p>***Live streaming will not be available at this time.***</p>
        {/* <SocialShare /> */}
      </ExperienceWrapper>
    </>
  );
}

const LiveStreamWrapper = styled.section<{
  width?: any;
}>`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: -7rem;
  z-index: 1;

  .img-wrapper {
    z-index: 1;
    border: 0.5rem solid white;
    background-color: #fff;
    box-shadow: -0.0625rem 0.25rem 0.75rem 0 rgb(181 217 238);

    //   width={width >= 1024 ? "50vw" : "80vw"}
    //   height={width >= 768 ? "32.5rem" : "20rem"}

    width: ${(props) => (props.width >= 1024 ? "60vw" : "90vw")};
    height: ${(props) => (props.width >= 1024 ? "27vw" : "44vw")};
  }
`;

const ExperienceWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
`;
