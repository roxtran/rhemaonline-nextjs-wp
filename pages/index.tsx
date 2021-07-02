import Meta from '../components/common/meta'
import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'
import Newsletter from '../components/home/Newsletter'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Meta title='Home - Rhema - Changing & Affecting Lives!' />
      {/* <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' /> */}
      <VideoWrapper>
        <video loop muted autoPlay>
          <source src='/video/RCM-Homepage-Teaser2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
      <MiddleMenu />
      <Welcome />
      <Subscribe />
      <Newsletter />
    </>
  )
}

export default Home

const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: 80vh;
    object-fit: cover;

    @media screen and (max-width: 640px) {
      height: 70vh;
    }
  }
`
