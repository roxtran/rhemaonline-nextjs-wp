import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { slides } from 'data/slides'
import SlideType from "types/slide";
import { ImgWrapper } from "styles/GlobalStyle";
import Image from "next/image";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "utils/useScroll";
import { fade, slideUp } from "styles/animation";

interface Props {
  slides: SlideType[];
}

const staggering = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } }
};

export default function Hero({ slides }: Props) {
  // console.log('!! slides', slides)
  const [element, controls] = useScroll();

  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  useEffect(() => {
    const autoPlay = setTimeout(handleNextSlide, 10000);

    return () => {
      clearTimeout(autoPlay);
    };
  });

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <StyledHero id="hero" variants={fade} initial="hidden" exit="exit" animate={controls} ref={element}>
      <IoIosArrowDropleftCircle className="arrow arrow-left" onClick={handlePrevSlide} />
      <IoIosArrowDroprightCircle className="arrow arrow-right" onClick={handleNextSlide} />
      {slides.map((slide, index) => {
        return (
          <AnimatePresence key={index}>
            {index === current && (
              <a href={slide.slideFields.ctaUrl} target="__blank">
                <ImgWrapper
                  initial={{ scale: 1.15, zIndex: 2, opacity: 0.5 }}
                  animate={{ scale: 1, zIndex: 1, opacity: 1 }}
                  exit={{ scale: 0.8, zIndex: 0, opacity: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={slide.featuredImage.node.sourceUrl}
                    alt="slide-item"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
                  />
                </ImgWrapper>
                <div className="img-overlay"></div>
                {/* <motion.div
                  className="text-wrapper"
                  variants={staggering}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.h1 variants={slideUp}>{slide.h1}</motion.h1>
                  <motion.p variants={slideUp}>{slide.p}</motion.p>
                </motion.div> */}
              </a>
            )}
          </AnimatePresence>
        );
      })}
    </StyledHero>
  );
}

const StyledHero = styled(motion.section).attrs(() => ({
  initial: "hidden",
  variants: ""
}))`
  position: relative;
  top: 80px;
  margin-bottom: 80px;
  z-index: 0;
  overflow: hidden;
  width: 100vw;
  height: calc(0.416 * 100vw);
  ${ImgWrapper} {
    position: absolute;
    width: 100vw;
    height: calc(0.416 * 100vw);
  }
  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .arrow {
    position: absolute;
    top: 50%;
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.15);
    z-index: 5;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .arrow-left {
    left: 32px;
  }
  .arrow-right {
    right: 32px;
  }
  .text-wrapper {
    /* background-color: rgba(255 255 255 / 25%); */
    /* padding: 2rem;
    border-radius: 10px;
    backdrop-filter: blur(5px); */
    height: 100%;
    position: absolute;
    width: 590px;
    max-width: 90vw;
    bottom: -45%;
    left: 10%;
    z-index: 4;
    text-shadow: 0 0 24px rgb(0 0 0 / 15%);
    h1 {
      font-size: 2.5rem;
      /* margin-bottom: 0.15rem; */
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
    h1,
    p {
      color: #fff;
    }
  }
  @media screen and (max-width: 640px) {
    .text-wrapper {
      left: 5%;
      bottom: -35%;
      h1 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 320px) {
    .text-wrapper {
      bottom: -25%;
    }
  }
`;
