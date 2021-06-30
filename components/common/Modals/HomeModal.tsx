import { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { slideDown } from './BibleModal'

interface HomeModalProps {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const HomeModal = ({ openModal, setOpenModal }: HomeModalProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && (
        <ModalContainer
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
                <a onClick={() => setOpenModal(false)} className='closeBtn'>
                  <IoClose />
                </a>
              </div>
              <iframe
                className='modal-body'
                src='https://rhemaonline.surveysparrow.com/s/Feedback-Survey-for-Management-Stakeholders-/tt-e016f9'
                width='100%'
                height='100%'
              ></iframe>
            </div>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}

export const ModalContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow-y: initial !important; */
  .modal-dialog {
    background: #fff;
    position: relative;
    width: 1100px;
    max-width: 90vw;
    height: 80vh;
    border-radius: 5px;
    overflow: hidden;
  }
  .modal-content {
    height: 100%;
  }
  .modal-header {
    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .closeBtn {
      position: absolute;
      top: -5px;
      right: 2px;
      font-size: 2rem;
      &:hover {
        transform: scale(1.2);
      }
    }
    h3 {
      color: var(--blue);
      margin-bottom: 0;
    }
  }
  .modal-body {
    height: 71vh;
    overflow-y: auto;
    padding: 0;
  }
  @media screen and (max-width: 640px) {
    .modal-dialog {
      height: 90vh;
    }
    .modal-header {
      padding: 1.5rem;
    }
    h3 {
      line-height: 1.2;
    }
    .modal-body {
      height: 75vh;
    }
    .vaccines {
      flex-direction: column;
    }
  }
`

export default HomeModal
