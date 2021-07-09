import { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import styled from 'styled-components'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { fade, slideDown, slideUp } from '../styles/animation'

function Chatbot() {
  const [showBot, setShowBot] = useState(false)

  return (
    <StyledChat>
      <div className='wrapper'>
        {showBot && (
          <motion.div
            variants={fade}
            initial='hidden'
            animate='show'
            className='bot-wrapper'
          >
            <ChatBot
              headerTitle='Chatbot'
              steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
              ]}
            />
          </motion.div>
        )}
        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          className='btn-chat'
          onClick={() => setShowBot(!showBot)}
        >
          <IoChatbubbleEllipses />
        </motion.a>
      </div>
    </StyledChat>
  )
}

export default Chatbot

const StyledChat = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 25;
  .wrapper {
    position: absolute;
    bottom: 3rem;
    right: 5rem;
    display: flex;
    flex-direction: column;
    /* justify-content: end; */
    align-items: flex-end;
  }
  .btn-chat {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    background-color: var(--blue);
    border-radius: 50%;
    color: #fff;
    &:hover {
      box-shadow: -5px 4px 12px 0 rgb(181 217 238);
    }
  }
  .rsc-header,
  .rsc-ts-bubble,
  .rsc-os-option-element {
    background-color: var(--blue);
    color: #fff;
  }
  .rsc-header-title {
    color: #fff;
    padding-top: 0;
  }
  @media screen and (max-width: 768px) {
    /* display: none; */
    .wrapper {
      bottom: 1.5rem;
      right: 1.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    /* display: none; */
    .bot-wrapper {
      width: 85vw;
    }
  }
`
