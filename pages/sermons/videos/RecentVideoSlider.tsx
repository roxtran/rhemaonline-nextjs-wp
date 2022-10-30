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
  const settings = { arrows: true, slidesToShow: 3, rows: 3, slidesToScroll: 3, infinite: false, speed: 500 }
  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <Link href={`${paths.sermons}/videos/${slide.videoId}`} key={slide.videoId}>
          <a>
            <div className='video-wrapper'>
              <ImgWrapper className='img-wrapper'>
                <Image src={`https://i.ytimg.com/vi/${slide.videoId}/hqdefault.jpg`} layout='fill' objectFit='cover' />
              </ImgWrapper>
              <div className='video-title'>{slide.title}</div>
            </div>
          </a>
        </Link>
      ))}
    </Slider>
  )
}
