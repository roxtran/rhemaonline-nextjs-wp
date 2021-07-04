import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { ModalContainer } from './HomeModal'
import { Dispatch, SetStateAction, useRef, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fade, slideDown } from '../../../styles/animation'

interface BibleModalProps {
  openBible: boolean
  setOpenBible: Dispatch<SetStateAction<boolean>>
}

const BibleModal = ({ openBible, setOpenBible }: BibleModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) setOpenBible(false)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {openBible && (
        <BibleContainer
          ref={modalRef}
          onClick={closeModal}
          variants={fade}
          initial='hidden'
          animate='show'
          exit='exit'
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

export const BibleContainer = styled(ModalContainer)`
  .modal-dialog {
    margin: auto;
  }
  .modal-body {
    padding: 0 !important;
  }
`

export default BibleModal
