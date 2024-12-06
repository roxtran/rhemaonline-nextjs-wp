import { slideLeft, slideRight, slideUp } from "styles/animation";

import { motion } from "framer-motion";
import Link from "next/link";
import paths from "paths";
import styled from "styled-components";

const items = {
  show: {
    // boxShadow: '0 0.4375rem 0.625rem 0 rgba(122, 207, 255, 0.3)',
    // border: '0.25rem solid rgb(16, 97, 162)',
    borderRadius: "0.625rem",
    overflow: "hidden",
    transition: { duration: 0.01, type: "spring", when: "afterChildren" },
  },
};

export default function MiddleMenu() {
  return (
    <CTAPanel>
      <motion.div className="items" variants={items} initial="hidden" animate="show" exit="exit">
        <motion.div
          className="item"
          variants={slideRight}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.25,
            damping: 8,
          }}
        >
          <Link href={paths.giving}>Giving</Link>
          <div className="line"></div>
          <Link href={paths.ministries}>Ministries</Link>
        </motion.div>
        <motion.div
          className="item"
          variants={slideUp}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.15,
            damping: 8,
          }}
        >
          <Link href={paths.connect}>The Care Centre Services</Link>
          <div className="line"></div>
          <Link href={paths.formLinks.prayerRequest} data-open-in-church-center-modal="true">
            Prayer Request
          </Link>
        </motion.div>
        <motion.div
          className="item"
          variants={slideLeft}
          transition={{
            duration: 0.25,
            type: "spring",
            delay: 0.15,
            damping: 8,
          }}
        >
          <Link href={`${paths.getConnected}#get-involved`}>Get Involved</Link>
          <div className="line"></div>
          <Link href={paths.formLinks.becomeAMember} data-open-in-church-center-modal="true">
            Become A Member
          </Link>
        </motion.div>
      </motion.div>
    </CTAPanel>
  );
}
const CTAPanel = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  margin: 2rem 0;

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
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    flex: 1;
    &:not(:last-child) {
      border-right: 0.0625rem dashed var(--shadow-color);
    }
    a {
      color: var(--heading-color);
      margin: 2rem;
      font-weight: bold;
      &:hover {
        color: var(--blue);
      }
    }
    .line {
      background-color: var(--blue);
      width: 12.5rem;
      height: 0.25rem;
    }
  }

  @media screen and (max-width: 64rem) {
    .item {
      min-width: 20rem;
    }
    .item:nth-child(1),
    .item:nth-child(2) {
      border-bottom: 0.0625rem dashed var(--shadow-color);
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
      border-bottom: 0.0625rem dashed var(--shadow-color);
    }
  }
`;
