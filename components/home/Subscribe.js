import styled from 'styled-components'
import paths from '../../paths'
import { Button } from '../../styles/GlobalStyle'

export default function Subscribe() {
  const SubscribeWrapper = styled.div`
    position: relative;
    width: 100%;
    background-image: url('/img/subscribe-bg.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
    position: relative;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: 3rem;
      text-align: center;
    }

    .white {
      width: 200px;
      height: 50px;
      padding: 12px 22px;
      border-radius: 30px;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: var(--shadow);
    }
  `
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <Button className='white' href={paths.subscribe} target='_blank'>
        Subscribe
      </Button>
    </SubscribeWrapper>
  )
}