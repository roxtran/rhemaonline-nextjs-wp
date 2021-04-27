import styled from 'styled-components'

export default function LiveStream() {
  return (
    <LiveStreamWrapper>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/VyNqzqMePdE?modestbranding=1&autoplay=1&controls=0&rel=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        // allowfullscreen
      ></iframe>
    </LiveStreamWrapper>
  )
}

const LiveStreamWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
