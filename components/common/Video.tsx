import styled from 'styled-components'

interface VideoProps {
  src: string
  width: string
  height: string
}

export default function Video({ src, width, height }: VideoProps) {
  return (
    <VideoWrapper width={width} height={height}>
      <video loop muted autoPlay>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}
const VideoWrapper = styled.div<{ width: string; height: string }>`
  video {
    width: ${({ width }) => width && width};
    height: ${({ height }) => height && height};
    object-fit: cover;
  }
`
