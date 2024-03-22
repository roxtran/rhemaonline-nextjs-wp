import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { ModalContainer } from "./HomeModal";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeaderType from "types/leader";
import Image from "next/image";
import { ImgWrapper, def } from "styles/GlobalStyle";
import { fade, slideDown } from "styles/animation";
import { useRef } from "react";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  leader: LeaderType | null;
}

export default function LeaderModal({ openModal, setOpenModal, leader }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) setOpenModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && leader && (
        <StyledModal ref={modalRef} onClick={closeModal} variants={fade} initial="hidden" animate="show" exit="exit">
          <motion.div className="modal-dialog" variants={slideDown} initial="hidden" animate="show" exit="exit">
            <div className="modal-content">
              <div className="modal-header">
                <a onClick={() => setOpenModal(false)} className="closeBtn">
                  <IoClose />
                </a>
              </div>
              <div className="modal-body">
                <div className="modal-left">
                  <ImgWrapper>
                    <Image
                      src={leader.featuredImage.node.sourceUrl}
                      alt={leader.title}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top"
                      }}
                    />
                  </ImgWrapper>
                  <h2 className="name">{leader.title}</h2>
                  <div className="line"></div>
                </div>
                <div className="modal-right">
                  <div className="bio" dangerouslySetInnerHTML={{ __html: leader.content }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </StyledModal>
      )}
    </AnimatePresence>
  );
}

const StyledModal = styled(ModalContainer)`
  background: rgb(0 0 0 / 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-dialog {
    background: #fff;
    position: relative;
    width: ${def.wrapper.width};
    max-width: 90vw;
    border-radius: var(--border-radius);
  }

  .modal-body {
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5% 0 5% 5%;
    @media screen and (max-width: 40rem) {
      padding-top: 5% !important;
      flex-direction: column;
      padding-top: 3rem;
      overflow: hidden;
      overflow-y: auto;
    }
  }
  .modal-left {
    display: flex;
    flex-direction: column;
    flex: 40%;
    margin-right: 3rem;
    .line {
      background: var(--grey-line);
      height: 0.0625rem;
      width: 50%;
      margin: 0.5rem 0;
    }
    h2 {
      color: var(--blue);
      font-size: 2rem;
    }
    @media screen and (max-width: 40rem) {
      margin-right: 0;
      width: 100%;
      padding-right: 5%;
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.15rem;
      }
      .line {
        margin: 0.25rem 0;
      }
    }
  }
  ${ImgWrapper} {
    width: 100%;
    height: 31.25rem;
    margin-bottom: 0.5rem;
    box-shadow: -0.25rem 0.3125rem 0.9375rem -0.625rem rgb(0 0 0 / 0.5);
    @media screen and (max-width: 40rem) {
      height: 12.5rem;
      width: 12.5rem;
    }
  }
  .modal-right {
    flex: 50%;
    padding-right: 5%;
    overflow: hidden;
    overflow-y: auto;
    @media screen and (max-width: 40rem) {
      overflow: visible;
    }
  }
`;
