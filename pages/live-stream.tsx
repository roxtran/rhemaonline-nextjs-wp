import { SocialIcons } from "components/common/Footer";
import HeadLine from "components/common/HeadLine";
import IframeVideo from "components/common/IFrameVideo";
import Meta from "components/common/meta";
import styled from "styled-components";
import Image from "next/image";
import paths from "paths";

interface LiveStreamProps {
  src: string;
  width: string;
  height: string;
}

export default function LiveStream({ src, width, height }: LiveStreamProps) {
  return (
    <>
      <Meta title="Live Stream - Rhema - Changing & Affecting Lives!" />{" "}
      <HeadLine
        imgUrl="/img/live-stream.jpg"
        title="Live Stream"
        desc="Sundays - 11am & Wednesdays - 7pm"
        height="480px"
        top="50px"
        blur="blur(4px)"
      />
      <LiveStreamWrapper>
        <IframeVideo
          src="https://www.youtube.com/embed/FE4p8e6JvZo?modestbranding=1&autoplay=1&controls=0&rel=0"
          width="80vw"
          height="720px"
        />
      </LiveStreamWrapper>
      <ExperienceWrapper>
        <h2>Experience the live stream</h2>
        <div className="text-wrapper">
          Share with your friends all the places we'll be streaming
          <div className="sub-text">View or listen on all platforms listed below:</div>
        </div>
        <SocialIcons>
          <a title="YouTube" href={paths.youtubeChannel} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/youtube-icon.svg"
                alt="youtube icon"
                width={50}
                height={50}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </a>
          <a title="YouTube" href={paths.facebookPage} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/facebook-icon.svg"
                alt="youtube icon"
                width={50}
                height={50}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </a>
          <a title="YouTube" href={paths.spotify} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/spotify.svg"
                alt="youtube icon"
                width={60}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </a>
          <a title="YouTube" href={paths.applePodcast} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/apple.svg"
                alt="youtube icon"
                width={60}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </a>
        </SocialIcons>
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
    box-shadow: -1px 4px 12px 0 rgb(181 217 238);
  }
`;

const ExperienceWrapper = styled.div`
  margin: 2rem 0 4rem;
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
`;
