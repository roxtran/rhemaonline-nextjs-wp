import styled from 'styled-components'
import paths from '../../paths'

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <a className='btn' href={paths.subscribe} target='_blank'>
        Subscribe
      </a>
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
    text-align: center;
  }

  a.btn {
    width: 200px;
    height: 50px;
    background: var(--white);
    color: var(--textColor);
    font-weight: bold;
    padding: 12px 22px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 7px 10px 0 rgba(122, 207, 255, 0.3);

    &:hover {
      background: var(--blue);
      color: white;
    }
  }
`
