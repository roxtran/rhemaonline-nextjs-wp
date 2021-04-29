import styled from 'styled-components'

export default function Video({ src, width, height }) {
  const VideoWrapper = styled.div`
    video {
      width: ${width};
      height: ${height};
      object-fit: cover;
    }
  `
  return (
    <VideoWrapper>
      <video loop muted autoPlay>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}
