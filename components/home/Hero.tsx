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
  const [element, controls] = useScroll();
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const autoPlay = setTimeout(handleNextSlide, 10000);

    return () => {
      clearTimeout(autoPlay);
    };
  }, [current, length]);

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <StyledHero id="hero" variants={fade} initial="hidden" exit="exit" animate={controls} ref={element}>
      {slides.map((slide, index) => (
        <AnimatePresence key={index}>
          {length > 1 && (
            <>
              {index === 0 ? null : <IoIosArrowDropleftCircle className="arrow arrow-left" onClick={handlePrevSlide} />}
              {index === length - 1 ? null : (
                <IoIosArrowDroprightCircle className="arrow arrow-right" onClick={handleNextSlide} />
              )}
            </>
          )}
          {index === current && (
            <a
              href={slide.slideFields.ctaUrl}
              target={slide.slideFields.openLinkNewTab ? "_blank" : "_self"}
              data-open-in-church-center-modal={slide.slideFields.churchCenterModal ? "true" : "false"}
            >
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
      ))}
    </StyledHero>
  );
}

const StyledHero = styled(motion.section).attrs(() => ({
  initial: "hidden",
  variants: ""
}))`
  position: relative;
  top: 5rem;
  margin-bottom: 5rem;
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
    left: 2rem;
  }
  .arrow-right {
    right: 2rem;
  }
  .text-wrapper {
    /* background-color: rgba(255 255 255 / 25%); */
    /* padding: 2rem;
    border-radius: .5rem;
    backdrop-filter: blur(0.3125rem); */
    height: 100%;
    position: absolute;
    width: 36.875rem;
    max-width: 90vw;
    bottom: -45%;
    left: 10%;
    z-index: 4;
    text-shadow: 0 0 1.5rem rgb(0 0 0 / 15%);
    h1 {
      font-size: 2.5rem;
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
  @media screen and (max-width: 40rem) {
    .text-wrapper {
      left: 5%;
      bottom: -35%;
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 20rem) {
    .text-wrapper {
      bottom: -25%;
    }
  }
`;
