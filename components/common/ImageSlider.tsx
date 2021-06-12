import React from 'react'
import Image from 'next/image'
// import slider & slider styles
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import style
import { ImgWrapper } from '../../styles/GlobalStyle'
// import type
import SlideType from '../../types/slide'

interface Props {
  slides: SlideType[]
}

export default function ImageSlider({ slides }: Props) {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true
  }

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.title}>
          <ImgWrapper className='img-wrapper'>
            <Image src={slide.imgUrl} layout='fill' objectFit='cover' />
          </ImgWrapper>
        </div>
      ))}
    </Slider>
  )
}
