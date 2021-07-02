import styled from 'styled-components'
import { motion } from 'framer-motion'

interface VideoProps {
  src: string
  width: string
  height: string
}

export default function Video({ src, width, height }: VideoProps) {
  return (
    <motion.div
      className='wrapper'
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 1 }}
    >
      <VideoWrapper width={width} height={height}>
        <video loop muted autoPlay>
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
    </motion.div>
  )
}
const VideoWrapper = styled.div<{ width: string; height: string }>`
  video {
    width: ${({ width }) => width && width};
    height: ${({ height }) => height && height};
    object-fit: cover;
  }
`
