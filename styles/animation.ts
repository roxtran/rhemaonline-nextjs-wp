export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0 },
}

export const slideDown = {
  hidden: { y: -200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } },
  exit: { opacity: 1, y: 400 },
}

export const slideRight = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1 },
  exit: { opacity: 1, x: 200 },
}

export const slideLeft = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1 },
  exit: { opacity: 1, x: -200 },
}
