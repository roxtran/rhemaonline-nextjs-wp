import styled from 'styled-components'

export default function Subscribe() {
  return (
    <SubscribeWrapper>
      <h2>Stay connected with us</h2>
      <a
        href='https://visitor.r20.constantcontact.com/manage/optin?v=001BRl1GnvqHBSmpUgt0bWkn1MfFFgc1eWZnLBSjeq8hPkIyEhXoERcP_p-E94Tuo8i-n6WMjixEVWfoTusoH241Xry9A65AaaC8uzGvinLhOc%3D'
        target='_blank'
      >
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
  }

  a {
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
    text-align: center;
    text-transform: capitalize;

    &:hover {
      background: var(--blue);
      color: white;
    }
  }
`
