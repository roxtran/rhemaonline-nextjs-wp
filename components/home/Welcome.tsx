import { Button, ImgWrapper } from "styles/GlobalStyle";

import { motion } from "framer-motion";
import Image from "next/image";
import paths from "paths";
import styled from "styled-components";

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <ImgWrapper>
        <Image
          src="/img/welcome-img.jpg"
          alt="welcome image"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </ImgWrapper>
      <motion.div className="text">
        <h2>Rhema Christian Ministries</h2>
        <p className="quote">
          Welcome to Rhema Christian Ministries Canada Inc., a place where we <b>change & affect lives</b>. We are a
          vibrant Spirit-filled community, with services and gatherings designed to connect people to Jesus and to each
          other through authentic relationships. Our dynamic combination of worship and word, coupled with a wide array
          of cutting-edge ministries enhance the spiritual development of our members and guest propelling each person
          to Christian maturity. Here at Rhema there is a special place for you and your family, and I look forward to
          welcoming you in person at your next visit.
          <br /> With love,
        </p>
        <p>
          Orim M. Meikle
          <br /> Senior Pastor
        </p>
        <Button href={paths.about}>More about us</Button>
      </motion.div>
    </WelcomeWrapper>
  );
}

export const WelcomeWrapper = styled(motion.section)`
  position: relative;
  width: 75rem;
  max-width: 80vw;
  margin: 0 auto 5rem;
  padding-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${Button} {
    width: fit-content;
  }
  ${ImgWrapper} {
    flex: 1;
    height: 25rem;
    box-shadow: -2.5rem 2.5rem 0 0 rgba(122, 207, 255, 0.3);
    &:hover {
      box-shadow: none;
    }
    @media screen and (max-width: 48rem) {
      flex: none;
      width: 75vw;
      height: 25rem;
      margin-bottom: 1rem;
    }
  }
  .text {
    flex: 1;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    h2 {
      color: var(--blue);
    }
    p.quote {
      font-style: italic;
    }
    span {
      font-weight: bold;
    }
    a {
      min-width: 11rem;
    }
  }

  @media screen and (max-width: 64rem) {
    .image {
      box-shadow: 0 0 0 0 rgba(122, 207, 255, 0.3);
    }
    .text {
      margin-left: 3rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 48rem) {
    justify-content: flex-start;
    flex-direction: column;
    .text {
      margin-left: 0;
    }
    h2 {
      margin-top: 3rem;
    }
  }
`;
