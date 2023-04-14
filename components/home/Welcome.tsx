import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import paths from "paths";
import { Button, ImgWrapper } from "styles/GlobalStyle";
import { motion } from "framer-motion";
export default function Welcome() {
  return (
    <WelcomeWrapper>
      <ImgWrapper>
        <Image
          src="/img/welcome-img.jpg"
          alt="welcome image"
          layout="fill"
          objectFit="cover"
          // width={625}
          // height={360}
        />
      </ImgWrapper>
      <motion.div className="text">
        <h2>Welcome to Rhema</h2>
        <p className="quote">
          “We are a church that believes in Jesus Christ; a church that loves God and His people."
        </p>
        <p>
          <span>Rhema Christian Ministries</span> is a vibrant Spirit-filled church community
          designed to connect people to Jesus and to each other through authentic relationships.
          Through a dynamic combination of worship and word, we seek to Change and Affect Lives by
          equipping the whole person with sound biblical and spiritual truths and practical
          encouragement.
        </p>
        <Link href={paths.about}>
          <Button>More about us</Button>
        </Link>
      </motion.div>
    </WelcomeWrapper>
  );
}

export const WelcomeWrapper = styled(motion.div)`
  position: relative;
  width: 1200px;
  max-width: 80vw;
  margin: 0 auto 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${ImgWrapper} {
    flex: 1;
    height: 380px;
    box-shadow: -35px 35px 0 0 rgba(122, 207, 255, 0.3);
    &:hover {
      box-shadow: none;
    }
    @media screen and (max-width: 768px) {
      flex: none;
      width: 75vw;
      height: 300px;
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
      font-weight: bold;
      font-style: italic;
    }
    span {
      font-weight: bold;
    }
    a {
      width: 170px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 12.5rem auto 7.5rem;
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
  @media screen and (max-width: 768px) {
    margin: 200px auto 100px;
    justify-content: flex-start;
    flex-direction: column;
    .text {
      margin-left: 0;
    }
    h2 {
      margin-top: 3rem;
    }
  }

  @media screen and (orientation: portrait) {
  }
`;
