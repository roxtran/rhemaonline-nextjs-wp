import React from "react";
import Image from "next/image";
// import slider & slider styles
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import style
import { ImgWrapper } from "styles/GlobalStyle";
// import type
import SlideType from "types/slide";

interface propType {
  slides: SlideType[];
  dots?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  speed?: number;
  fade?: boolean;
}

export default function ImageSlider({
  slides,
  dots = true,
  autoplay = true,
  infinite = true,
  speed = 500,
  fade = true
}: propType) {
  return (
    <Slider dots={dots} autoplay={autoplay} infinite={infinite} speed={speed} fade={fade}>
      {slides.map((slide) => (
        <div key={slide.title}>
          <a href={slide.slideFields.ctaUrl} target="__blank">
            <ImgWrapper className="img-wrapper">
              <Image
                src={slide.featuredImage.node.sourceUrl}
                alt={slide.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }}
              />
            </ImgWrapper>
          </a>
        </div>
      ))}
    </Slider>
  );
}
