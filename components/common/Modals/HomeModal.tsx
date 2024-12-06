import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import { fade, slideDown } from "styles/animation";

import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { Button } from "styles/GlobalStyle";

interface HomeModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const HomeModal = ({ openModal, setOpenModal }: HomeModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) setOpenModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && (
        <ModalContainer ref={modalRef} onClick={closeModal} variants={fade} initial="hidden" animate="show" exit="exit">
          <motion.div className="modal-dialog" variants={slideDown} initial="hidden" animate="show" exit="exit">
            <div className="modal-content">
              <div className="modal-header">
                <a onClick={() => setOpenModal(false)} className="closeBtn">
                  <IoClose />
                </a>
              </div>
              <div className="modal-body">
                <h3>A Letter From Our Senior Pastor</h3>
                <Button href="/letter">
                  <div className="text-wrapper">Click to Read</div>
                </Button>
              </div>
            </div>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

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
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  .modal-content {
    height: 100%;
  }
  .modal-header {
    padding: 1.5rem 2.5rem;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.2);
    .closeBtn {
      position: absolute;
      top: -0.25rem;
      right: 0.125rem;
      font-size: 2rem;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .modal-body {
    overflow-y: auto;
    padding: 1rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: var(--blue);
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 40rem) {
    .modal-header {
      padding: 1.5rem;
    }
    h3 {
      line-height: 1.2;
    }
  }
`;

export default HomeModal;
