import styled from 'styled-components'

interface VideoProps {
  src: string
  width: string
  height: string
}

export default function IFrameVideo({ src, width, height }: VideoProps) {
  return (
    <VideoWrapper width={width} height={height}>
      <iframe
        width='100%'
        height='100%'
        src={src}
        title='iframe video player'
        frameBorder='0'
        // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        // allowFullscreen
      ></iframe>
    </VideoWrapper>
  )
}
const VideoWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
`
