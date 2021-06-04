import { Dispatch, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'
import { ModalContainer } from './HomeModal0'

interface ContactModalProps {
  openContactModal: boolean
  setOpenContactModal: Dispatch<SetStateAction<boolean>>
}

const ContactUsModal = ({
  openContactModal,
  setOpenContactModal
}: ContactModalProps) => {
  if (!openContactModal) return null
  return (
    <BibleContainer>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <a onClick={() => setOpenContactModal(false)} className='closeBtn'>
              <IoClose />
            </a>
          </div>
          <iframe
            className='modal-body'
            src='https://rhemachristianministries.churchcenter.com/people/forms/59260'
            width='100%'
            height='100%'
          ></iframe>
        </div>
      </div>
    </BibleContainer>
  )
}

const BibleContainer = styled(ModalContainer)`
  .modal-body {
    padding: 0 !important;
  }
`

export default ContactUsModal
