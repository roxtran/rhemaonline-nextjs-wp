import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { ModalContainer } from './HomeModal'
import { Dispatch, SetStateAction } from 'react'

interface BibleModalProps {
  openBible: boolean
  setOpenBible: Dispatch<SetStateAction<boolean>>
}

const BibleModal = ({ openBible, setOpenBible }: BibleModalProps) => {
  if (!openBible) return null

  return (
    <BibleContainer>
      <div className='modal-dialog'>
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
      </div>
    </BibleContainer>
  )
}

const BibleContainer = styled(ModalContainer)`
  .modal-body {
    padding: 0 !important;
  }
`

export default BibleModal
