import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import paths from "paths";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "styles/animation";

const items = {
  show: {
    boxShadow: "0 0.4375rem 0.625rem 0 rgba(122, 207, 255, 0.3)",
    borderRadius: "0.625rem",
    overflow: "hidden",
    transition: { duration: 0.1, type: "spring", when: "afterChildren" }
  }
};

export default function MiddleMenu() {
  return (
    <MiddleWrapper>
      <motion.div className="items" variants={items} initial="hidden" animate="show" exit="exit">
        <motion.div
          className="item"
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.25,
            damping: 8
          }}
        >
          <Link href={paths.leadership}>
            <Image
              src="/img/leadership-icon.svg"
              width={50}
              height={50}
              alt="leadership-icon"
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />
            <p>
              With a warm smile, the leaders of Rhema Christian Ministries are tasked with operational and
              ecclesiastical excellence.
            </p>
            <h4>Leadership</h4>
          </Link>
        </motion.div>
        <motion.div
          className="item"
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.15,
            damping: 8
          }}
        >
          <Link href={paths.beliefs}>
            <motion.div>
              <Image
                src="/img/beliefs-icon.svg"
                width={50}
                height={50}
                alt="beliefs-icon"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
              <p>At Rhema what we believe is important to us but not as much as the one in whom we believe.</p>
              <h4>Beliefs</h4>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className="item"
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.15,
            damping: 8
          }}
        >
          <Link href={paths.ministries}>
            <motion.div>
              <Image
                src="/img/ministries-icon.svg"
                width={57.5}
                height={50}
                alt="ministries-icon"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
              <p>From our family to yours.</p>
              <h4>Ministries</h4>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className="item"
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.25,
            damping: 8
          }}
        >
          <Link href={paths.grow}>
            <motion.div>
              <Image
                src="/img/grow-icon.svg"
                width={50}
                height={50}
                alt="grow-icon"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
              <p>
                We invite you to hear the voice of the Master calling you, even as “Deep calleth unto deep” (Psalm 42:7)
              </p>
              <h4>Grow</h4>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </MiddleWrapper>
  );
}
const MiddleWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  top: -10rem;

  .items {
    position: relative;
    margin: auto;
    width: 75rem;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
  }
  .item {
    background: rgba(255, 255, 255, 1);
    min-height: 18.75rem;
    min-width: 18.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 2.5rem 2.5rem;
    flex: 1;
    &:not(:last-child) {
      border-right: 0.0625rem dashed rgba(122, 207, 255, 0.3);
    }
    p {
      margin: 1.25rem 0;
    }
    h4 {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 64rem) {
    margin-bottom: -6.25rem;
    top: -0.25rem;

    .item {
      min-width: 20rem;
    }
    .item:nth-child(1),
    .item:nth-child(2) {
      border-bottom: 0.0625rem dashed rgba(122, 207, 255, 0.3);
    }
    .item:nth-child(2) {
      border-right: none;
    }
  }
  @media screen and (max-width: 40rem) {
    .item:nth-child(1),
    .item:nth-child(3) {
      border-right: none;
    }
    .item:nth-child(3) {
      border-bottom: 0.0625rem dashed rgba(122, 207, 255, 0.3);
    }
  }
`;
