import styled from "styled-components";
import paths from "paths";
import { Button } from "styles/GlobalStyle";
import { SocialIcons } from "components/common/Footer";
import Image from "next/image";

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <Button className="white" href={paths.subscribe} target="_blank">
        Subscribe
      </Button>
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
    </SubscribeWrapper>
  );
}
const SubscribeWrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url("/img/subscribe-bg.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  position: relative;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 90vw;
    color: #fff;
  }

  .white {
    width: 200px;
    height: 50px;
    padding: 0.75rem 1.375rem;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  .icon img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(65deg) brightness(108%) contrast(101%);
  }
`;
