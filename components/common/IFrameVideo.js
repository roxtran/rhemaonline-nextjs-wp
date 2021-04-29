import styled from 'styled-components'

export default function IFrameVideo({ src, width, height }) {
  const VideoWrapper = styled.div`
    width: ${width};
    height: ${height};
  `
  return (
    <VideoWrapper>
      <iframe
        width='100%'
        height='100%'
        src={src}
        title='iframe video player'
        frameBorder='0'
        // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        // allowfullscreen
      ></iframe>
    </VideoWrapper>
  )
}
