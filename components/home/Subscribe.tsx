import styled from 'styled-components';
import paths from '../../paths';
import { Button } from '../../styles/GlobalStyle';

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <Button className='white' href={paths.subscribe} target='_blank'>
        Subscribe
      </Button>
    </SubscribeWrapper>
  );
}
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
  z-index: 0;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 90vw;
    color: #fff;
  }

  .white {
    width: 200px;
    height: 50px;
    padding: 0.75rem 1.375rem;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;
