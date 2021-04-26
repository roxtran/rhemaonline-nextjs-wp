import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <div className='copyright'>©{new Date().getFullYear()} Rhema Canada.</div>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
  height: 550px;

  .copyright {
    text-align: center;
  }
`
