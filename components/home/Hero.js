import styled from 'styled-components'

export default function Hero() {
  return (
    <VideoWrapper>
      <video loop muted autoPlay>
        <source src='/videos/RCM-Homepage-Teaser2.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}

export const VideoWrapper = styled.div`
  width: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: -1;

  video {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`
