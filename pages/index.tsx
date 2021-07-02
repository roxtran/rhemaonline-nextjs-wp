import Meta from '../components/common/meta'
import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <>
      <Meta title='Home - Rhema - Changing & Affecting Lives!' />
      <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' />
      <MiddleMenu />
      <Welcome />
      <Subscribe />
      <Newsletter />
    </>
  )
}

export default Home
