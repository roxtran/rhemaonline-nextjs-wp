import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'

export default function Home() {
  return (
    <>
      <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' />
      <MiddleMenu />
      <Welcome />
      <Subscribe />
    </>
  )
}
