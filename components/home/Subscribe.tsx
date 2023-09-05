import styled from "styled-components";
import paths from "paths";
import { Button } from "styles/GlobalStyle";
import SocialShare from "components/common/SocialShare";
import Image from "next/image";

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <Image
        className="letter"
        src="/img/subscribe-icon.png"
        width={90}
        height={90}
        alt="give"
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover"
        }}
      />
      <h2>Stay connected with us</h2>
      <Button className="white" href={paths.subscribe} target="_blank">
        Subscribe
      </Button>
      <SocialShare />
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

  img.letter {
    filter: brightness(0) invert(1);
  }

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
    filter: brightness(0) invert(1);
  }
`;
