import IframeVideo from '../components/common/IFrameVideo'

export default function LiveStream({ src, width, height }) {
  return (
    <>
      <IframeVideo
        src='https://www.youtube.com/embed/VyNqzqMePdE?modestbranding=1&autoplay=1&controls=0&rel=0'
        width='100vw'
        height='100vh'
      />
    </>
  )
}
