import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0 })
  view ? controls.start('show') : ''
  return [element, controls]
}
