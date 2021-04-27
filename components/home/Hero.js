import styled from 'styled-components'

export default function Hero() {
  return (
    <VideoWrapper>
      <video loop muted autoPlay>
        <source src='/video/RCM-Homepage-Teaser2.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}

export const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
