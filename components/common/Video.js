import styled from 'styled-components'

export default function Video({ src, width, height }) {
  return (
    <VideoWrapper width={width} height={height}>
      <video loop muted autoPlay>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}
const VideoWrapper = styled.div`
  video {
    width: ${({ width }) => width && width};
    height: ${({ height }) => height && height};
    object-fit: cover;
  }
`
