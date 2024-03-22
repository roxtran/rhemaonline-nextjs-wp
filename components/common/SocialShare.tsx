import paths from "paths";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  isSubSection?: boolean;
}

export default function SocialShare({ isSubSection = false }: Props) {
  return (
    <SocialIconsWrapper>
      {isSubSection && (
        <a title="YouTube" href={paths.subscribe} target="_blank">
          <div className="icon">
            <Image
              src="/img/subscribe-icon.png"
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
      )}
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
      <a title="Facebook" href={paths.facebookPage} target="_blank">
        <div className="icon">
          <Image
            src="/img/social/facebook-icon.svg"
            alt="Facebook icon"
            width={50}
            height={50}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </div>
      </a>
      <a title="Spotify" href={paths.spotify} target="_blank">
        <div className="icon">
          <Image
            src="/img/social/spotify.svg"
            alt="Spotify icon"
            width={60}
            height={60}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </div>
      </a>
      <a title="Apple" href={paths.applePodcast} target="_blank">
        <div className="icon">
          <Image
            src="/img/social/apple.svg"
            alt="Apple icon"
            width={60}
            height={60}
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </div>
      </a>
    </SocialIconsWrapper>
  );
}

const SocialIconsWrapper = styled.div`
  margin: 1.25rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .icon {
    cursor: pointer;
    margin: 0.75rem;
    &:hover {
      transform: translateY(-0.25rem);
    }
  }
`;
