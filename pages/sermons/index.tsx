import Meta from 'components/common/meta'
import styled from 'styled-components'
import { Container, rem } from 'styles/GlobalStyle'
import FeatureVideo from 'components/common/FeatureVideo'
import { useState } from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import PopularVideoSlider from './videos/PopularVideoSlider'
import RecentVideoSlider from './videos/RecentVideoSlider'
import popularVideos from 'data/popular-videos'
import recentVideos from 'data/recent-videos'
import Link from 'next/link'
import paths from 'paths'

export default function Sermons() {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Meta title='Sermons - Rhema - Changing & Affecting Lives!' />
      <SermonsContainer>
        <div className='wrapper'>
          <h2 className='title'>Sermons</h2>
          <FeaturedWrapper onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link href={`${paths.sermons}/videos/YFh_QFskIck`}>
              <a>
                <FeatureVideo
                  hover={hover}
                  videoId='YFh_QFskIck'
                  width='1140'
                  height='650'
                  thumbnailQuality='maxresdefault'
                />
              </a>
            </Link>
            <BsPlayCircleFill className='play-icon' />
            <div className='video-text'>
              <div className='tag'>Latest Video</div>
              <h3>The Rhema Experience Online: The Excellence Series – Part 3A</h3>
            </div>
          </FeaturedWrapper>
          <PopularVideoWrapper>
            <h4>Popular Sermons</h4>
            <PopularVideoSlider slides={popularVideos} />
          </PopularVideoWrapper>
          <RecentVideoWrapper>
            <h4>Recent Sermons</h4>
            <RecentVideoSlider slides={recentVideos} />
          </RecentVideoWrapper>
        </div>
      </SermonsContainer>
    </>
  )
}

const SermonsContainer = styled(Container)`
  .wrapper {
    max-width: ${rem(1140)};
    padding: 0 1rem;
  }

  .title {
    width: 100%;
    margin: 2.5rem 0 1.5rem;
    color: #000;
  }

  .video-wrapper:hover {
    transform: scale(1.025);
  }

  @media (max-width: ${rem(1140)}) {
    .wrapper {
      width: 95vw;
    }
  }
`

const FeaturedWrapper = styled.div`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${rem(1140)}) {
    height: calc(95vw * 9 / 16);
  }
  @media (min-width: ${rem(1140)}) {
    height: fit-content;
  }

  &:hover {
    transform: scale(1.025);
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .video-text {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    color: #fff;

    .tag {
      background: rgba(255, 255, 255, 0.3);
      width: fit-content;
      padding: 0.25rem 1rem;
      border-radius: 2rem;
      font-size: 1.1rem;
    }

    h3 {
      color: #fff;
    }
  }
`

const PopularVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .img-wrapper {
    width: ${rem(320)};
    height: ${rem(180)};
    border-radius: 0.5rem;
  }
  .speaker {
    margin-top: -0.75rem;
    font-weight: 600;
    font-size: 0.86rem;
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
  .slick-arrow {
    margin-top: -2rem;
  }
`

const RecentVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .video-wrapper {
    width: ${rem(320)};
    height: 6rem;

    display: flex;
    align-items: center;
  }
  .img-wrapper {
    width: ${rem(120)};
    height: ${rem(60)};
    border-radius: 0.5rem;
  }
  .video-title {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: var(--heading-color);
    margin-left: 1rem;
    max-width: ${rem(160)};
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
`
