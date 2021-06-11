import { useState } from 'react'
import Meta from '../components/common/meta'
import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Newsletter from '../components/home/Newsletter'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'

const Home = () => {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <Meta title='Home - Rhema - Changing & Affecting Lives!' />
      {/* <HomeModal openModal={openModal} setOpenModal={setOpenModal} /> */}
      <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' />
      <MiddleMenu />
      <Welcome />
      <Subscribe />
      <Newsletter />
    </>
  )
}

export default Home
