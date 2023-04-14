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
import { shortenString } from 'utils/formatter'

interface propType {
  slides: VideoType[]
}

export default function PopularVideoSlider({ slides }: propType) {
  const settings = {
    arrows: true,
    slidesToShow: 3,
    rows: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2.4
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        (<Link href={`${paths.sermons}/videos/${slide.id.videoId}`} key={slide.id.videoId}>

          <div className='video-wrapper'>
            <ImgWrapper className='img-wrapper'>
              <Image
                src={`https://i.ytimg.com/vi/${slide.id.videoId}/hqdefault.jpg`}
                layout='fill'
                objectFit='cover'
              />
            </ImgWrapper>
            <div
              className='video-title'
              dangerouslySetInnerHTML={{ __html: shortenString(slide.snippet.title, 65) + '...' }}
            />
          </div>

        </Link>)
      ))}
    </Slider>
  );
}
