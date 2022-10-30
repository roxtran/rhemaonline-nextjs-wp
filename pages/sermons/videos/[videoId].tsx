import Meta from 'components/common/meta'
import styled from 'styled-components'
import { Container, rem } from 'styles/GlobalStyle'
import Link from 'next/link'
import Image from 'next/image'
import popularVideos from 'data/popular-videos'
import recentVideos from 'data/recent-videos'
import VideoType from 'types/video'
import { IoArrowBackOutline } from 'react-icons/io5'
import paths from 'paths'

interface Props {
  video: VideoType
}

type Params = {
  params: {
    videoId: string
  }
}

export default function Sermons({ video }: Props) {
  return (
    <>
      <Meta title='Sermons - Rhema - Changing & Affecting Lives!' />
      <VideoContainer>
        <div className='wrapper'>
          <Link href={paths.sermons}>
            <a className='btn-back'>
              <IoArrowBackOutline className='icon-back' /> Go back
            </a>
          </Link>
          <VideoWrapper>
            <iframe
              width='1140'
              height='650'
              src={`https://www.youtube.com/embed/${video[0].videoId}?rel=0&showinfo=1&autoplay=1&loop=0`}
              title='iframe video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </VideoWrapper>
          <div className='text-wrapper'>
            <h3 className='title'>{video[0].title}</h3>
            <div className='subtitle'>Rhema Christian Ministries</div>
            <div className='desc'>
              Thank you for supporting Rhema Christian Ministries.
              <br /> If you're looking for ways to give, simply click here:{' '}
              <Link href='https://rhemaonline.ca/giving/'>
                <a>https://rhemaonline.ca/giving/</a>
              </Link>
            </div>
          </div>
          <div className='button-wrapper'>
            <Link href='https://tithe.ly/give_new/www/#/tithely/give-one-time/645887?kiosk=1'>
              <a target='__blank'>
                <div className='icon give-icon'>
                  <Image src='/img/icons/give.png' width={48} height={48} alt='give' objectFit='cover' />
                </div>
              </a>
            </Link>
            <Link href='https://visitor.r20.constantcontact.com/manage/optin?v=001BRl1GnvqHBSmpUgt0bWkn1MfFFgc1eWZnLBSjeq8hPkIyEhXoERcP_p-E94Tuo8i-n6WMjixEVWfoTusoH241Xry9A65AaaC8uzGvinLhOc%3D'>
              <a target='__blank'>
                <div className='icon subscribe-icon'>
                  <Image src='/img/icons/subscribe.png' width={48} height={48} alt='subscribe' objectFit='cover' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </VideoContainer>
    </>
  )
}

const VideoContainer = styled(Container)`
  background-color: #000;

  .wrapper {
    max-width: ${rem(1140)};
    margin-top: 4rem;
  }

  .btn-back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .icon-back {
    font-size: 1.2rem;
  }

  a {
    color: #fff;
  }

  .text-wrapper {
    max-width: 800px;
  }

  .title {
    width: 100%;
    color: #fff;
  }
  .subtitle {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    margin: -1rem 0 0.5rem;
  }
  .desc {
    color: #fff;
  }
  .button-wrapper {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }
  .icon {
    width: ${rem(35)};

    &:hover {
      transform: scale(1.05);
    }
  }

  .video-wrapper:hover {
    transform: scale(1.025);
  }
`

const VideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  overflow: hidden;
  position: relative;
`

const videos = popularVideos
videos.push(...recentVideos)

export const getStaticProps = async ({ params }: Params) => {
  const { videoId } = params
  const video = videos.filter((video) => video.videoId === videoId)

  return {
    props: {
      video: video
    }
  }
}

export const getStaticPaths = async () => {
  const paths = videos.map((video: { videoId: string }) => ({
    params: { videoId: video.videoId }
  }))
  // console.log('!! paths', paths)
  return { paths, fallback: false }
}
