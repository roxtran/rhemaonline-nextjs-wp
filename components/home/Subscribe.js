import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <button href='/giving'>Giving</button>
    </SubscribeWrapper>
  )
}

export const SubscribeWrapper = styled.div`
  width: 100%;
  background-image: url('/images/subscribe-bg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  position: relative;
  margin: 0 auto;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 3rem;
  }

  button {
    width: 200px;
    height: 50px;
    background: var(--white);
    color: var(--textColor);
    font-weight: bold;
    padding: 12px 22px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      background: var(--blue);
      color: white;
    }
  }
`
