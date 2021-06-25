import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { ModalContainer } from './HomeModal0'
import { Dispatch, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideDown = {
  hidden: { y: -200, opacity: 0 },
  show: {
    y: [0, -50, 0],
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
  exit: {
    opacity: 1,
    y: 400,
    // transition: { duration: 0.25, ease: 'easeIn' },
  },
}

interface BibleModalProps {
  openBible: boolean
  setOpenBible: Dispatch<SetStateAction<boolean>>
}

const BibleModal = ({ openBible, setOpenBible }: BibleModalProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {openBible && (
        <BibleContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='modal-dialog'
            variants={slideDown}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            <div className='modal-content'>
              <div className='modal-header'>
                <a onClick={() => setOpenBible(false)} className='closeBtn'>
                  <IoClose />
                </a>
              </div>
              <iframe
                className='modal-body'
                src='https://www.bible.com'
                width='100%'
                height='100%'
              ></iframe>
            </div>
          </motion.div>
        </BibleContainer>
      )}
    </AnimatePresence>
  )
}

const BibleContainer = styled(ModalContainer)`
  .modal-dialog {
    margin: auto;
  }
  .modal-body {
    padding: 0 !important;
  }
`

export default BibleModal
