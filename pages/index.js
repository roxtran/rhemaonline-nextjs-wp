import { useState } from 'react'
import HomeModal from '../components/common/Modals/HomeModal'
import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'

const Home = () => {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <HomeModal openModal={openModal} setOpenModal={setOpenModal} />
      <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' />
      <MiddleMenu />
      <Welcome />
      <Subscribe />
    </>
  )
}

export default Home
