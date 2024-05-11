import HeadLine from "components/common/HeadLine";
import IframeVideo from "components/common/IFrameVideo";
import Meta from "components/common/meta";
import SocialShare from "components/common/SocialShare";
import styled from "styled-components";
import useWindowDimensions from "utils/useWindowDimension";

export default function LiveStream() {
  const { width } = useWindowDimensions();

  const pageTitle = "Live Stream";
  const pageImage = "/img/live-stream.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title={pageTitle}
        desc="Sundays - 11am"
        height="30rem"
        top="3.125rem"
        blur="blur(0.25rem)"
      />
      <LiveStreamWrapper>
        {width && (
          <IframeVideo
            src="https://www.youtube.com/embed/FE4p8e6JvZo?modestbranding=1&autoplay=1&controls=0&rel=0"
            width={width >= 1024 ? "50vw" : "80vw"}
            height={width >= 768 ? "32.5rem" : "20rem"}
          />
        )}
      </LiveStreamWrapper>
      <ExperienceWrapper>
        <h2>Experience the live stream</h2>
        <div className="text-wrapper">
          Share with your friends all the places we'll be streaming
          <div className="sub-text">View or listen on all platforms listed below:</div>
        </div>
        <SocialShare />
      </ExperienceWrapper>
    </>
  );
}

const LiveStreamWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: -7rem;
  z-index: 1;

  > div {
    z-index: 1;
    border: 0.5rem solid white;
    box-shadow: -0.0625rem 0.25rem 0.75rem 0 rgb(181 217 238);
  }
`;

const ExperienceWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
`;
