import Link from 'next/link'
import Image from 'next/image'
import paths from 'paths'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import style
import { ImgWrapper } from 'styles/GlobalStyle'
// import type
import VideoType from 'types/video'

interface propType {
  slides: VideoType[]
}

export default function PopularVideoSlider({ slides }: propType) {
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
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <Link href={`${paths.sermons}/videos/${slide.id.videoId}`} key={slide.id.videoId}>
          <a>
            <div className='video-wrapper'>
              <ImgWrapper className='img-wrapper'>
                <Image
                  src={`https://i.ytimg.com/vi/${slide.id.videoId}/hqdefault.jpg`}
                  layout='fill'
                  objectFit='cover'
                />
              </ImgWrapper>
              <div className='popular-video-text'>
                <h4>{slide.snippet.title.substring(0, 50)}...</h4>
                <div className='speaker'>{slide.snippet.publishedAt.substring(0, 10)}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </Slider>
  )
}
