import React from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Button, Container, ImgWrapper } from '../styles/GlobalStyle'
import Image from 'next/image'

export default function FoodbankSlider() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-1.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-2.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-3.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-4.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-5.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-6.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-7.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
      <div>
        <ImgWrapper className='img-wrapper'>
          <Image
            src='/img/foodbank/foodbank-slide-8.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImgWrapper>
      </div>
    </Slider>
  )
}
