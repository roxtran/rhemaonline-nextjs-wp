import { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface HomeModalProps {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const HomeModal = ({ openModal, setOpenModal }: HomeModalProps) => {
  if (!openModal) return null
  return (
    <ModalContainer>
      <div className='modal-dialog'>
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
      </div>
    </ModalContainer>
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
    .line {
      width: 100%;
      height: 1px;
      margin: 2rem 0;
      background: rgba(0, 0, 0, 0.2);
    }
    p {
      margin-bottom: 1rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
    ul {
      margin-left: 2rem;
      margin-bottom: 2rem;
    }
    .vaccines {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 1;
      }
    }
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
      padding: 1.5rem;
      height: 75vh;
    }
    .vaccines {
      flex-direction: column;
    }
  }
`

export default HomeModal
