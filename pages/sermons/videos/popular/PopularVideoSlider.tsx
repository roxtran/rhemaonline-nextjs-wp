import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { formatDate, shortenString } from "utils/formatter";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ImgWrapper } from "styles/GlobalStyle";
import VideoType from "types/video";

// import style

// import type

interface propType {
  slides: VideoType[];
  videoPath: string;
}

export default function PopularVideoSlider({ slides, videoPath }: propType) {
  const settings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <Link href={`${videoPath}/videos/popular/${slide.id.videoId}`} key={slide.id.videoId}>
          <div className="video-wrapper">
            <ImgWrapper className="img-wrapper">
              <Image
                src={`https://i.ytimg.com/vi/${slide.id.videoId}/hqdefault.jpg`}
                alt={slide.snippet.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="popular-video-text">
              <h4 dangerouslySetInnerHTML={{ __html: shortenString(slide.snippet.title, 50) + "..." }} />
              <div className="date">{formatDate(slide.snippet.publishedAt)}</div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
