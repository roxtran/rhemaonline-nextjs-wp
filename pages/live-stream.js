import IframeVideo from '../components/common/IFrameVideo'
import Meta from '../components/common/seo-meta'

export default function LiveStream({ src, width, height }) {
  return (
    <>
      <Meta
        title='Live Stream - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <IframeVideo
        src='https://www.youtube.com/embed/VyNqzqMePdE?modestbranding=1&autoplay=1&controls=0&rel=0'
        width='100vw'
        height='100vh'
      />
    </>
  )
}
