import IframeVideo from '../components/common/IFrameVideo'
import Meta from '../components/common/meta'

interface LiveStreamProps {
  src: string
  width: string
  height: string
}

export default function LiveStream({ src, width, height }: LiveStreamProps) {
  return (
    <>
      <Meta title='Live Stream - Rhema - Changing & Affecting Lives!' />
      <IframeVideo
        src='https://www.youtube.com/embed/VyNqzqMePdE?modestbranding=1&autoplay=1&controls=0&rel=0'
        width='100vw'
        height='100vh'
      />
    </>
  )
}
