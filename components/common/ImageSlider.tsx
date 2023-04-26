import React from "react";
import Image from "next/image";
// import slider & slider styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import style
import { ImgWrapper } from "styles/GlobalStyle";
// import type
import SlideType from "types/slide";

interface propType {
  slides: SlideType[];
}

export default function ImageSlider({ slides }: propType) {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.title}>
          <a href={slide.slideFields.ctaUrl} target='__blank'>
          <ImgWrapper className="img-wrapper">
            <Image
              src={slide.featuredImage.node.sourceUrl}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
          </ImgWrapper>
          </a>
        </div>
      ))}
    </Slider>
  );
}
