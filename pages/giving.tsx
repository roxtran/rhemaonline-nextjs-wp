import HeadLine from '../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyle'
import Meta from '../components/common/meta'

export default function Giving() {
  return (
    <>
      <Meta title='Giving - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/giving-img.jpg' title='Make A Difference' />
      <GivingContainer>
        <div className='content-wrapper'>
          <div id='thank'>
            <p>
              Thank you everyone for your continued support in these times. We
              know that this too shall pass for our God is able to do more than
              we can ask think or imagine and he will bring us through unscathed
              in Jesus name.
            </p>
            <p>
              Here are a few ways you can continue to support the ministry
              whether we gather in person or online.
            </p>
          </div>
          <div className='items'>
            <div className='item'>
              <div className='type'>
                <h5>TELEPHONE / INTERNET BANKING:</h5>
              </div>
              <div className='desc'>
                <ul>
                  <li>Log into your bank account as you usually do</li>
                  <li>Select bill payment, and then choose “add new payee”</li>
                  <li>
                    Search and select Rhema Christian Ministries (Toronto or
                    Ottawa)
                  </li>
                  <li>
                    Use your Rhema membership number as the account number or
                    enter 9999 for non-members.
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='type'>
                <h5>E-TRANSFER:</h5>
              </div>
              <div className='desc'>
                <ul>
                  <li>
                    Send an E-Transfer to:{' '}
                    <a href='mailto:treasury@rhemaonline.ca'>
                      treasury@rhemaonline.ca
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='type'>
                <h5>TITHE.LY</h5>
              </div>
              <div className='desc'>
                <ul>
                  <li>
                    Go to{' '}
                    <a href='https://get.tithe.ly' target='_blank'>
                      https://get.tithe.ly
                    </a>
                  </li>
                  <li>
                    If you don’t have a Tithe.ly account, you can create one in
                    a few easy steps.
                  </li>
                  <li>
                    Complete the requested information one time, and then you
                    can start giving by Tithe.ly.
                  </li>
                  Or
                  <li>
                    Click on the Tithe.ly link below:
                    <span>
                      <a href='https://tithe.ly/give_new/www/#/tithely/give-one-time/645887?kiosk=1'>
                        https://tithe.ly/give_new/www/#/tithely/give-one-time/645887?kiosk=1
                      </a>
                    </span>
                    and follow the instructions to give by credit card or visa
                    debit card
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='type'>
                <h5>TEXT GIVING</h5>
              </div>
              <div className='desc'>
                <ul>
                  <li>
                    Text the word <span>“Give”</span> to 1-844-542-0003.
                  </li>
                  <li>You will receive a reply with a link.</li>
                  <li>
                    Click on the link which will allow you to provide the
                    information required to complete the process.
                  </li>
                  <li>
                    To send future gifts, text the dollar amount, and the
                    category, ex. ($100 Tithes).
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='type'>
                <h5>PAYPAL</h5>
              </div>
              <div className='desc'>
                <ul>
                  <li>
                    Go to{' '}
                    <a href='https://www.paypal.com' target='_blank'>
                      https://www.paypal.com
                    </a>
                  </li>
                  <li>
                    If you don’t have a paypal account, you can create one in a
                    few easy steps.
                  </li>
                  <li>
                    Click on personal, then click on “get a Paypal account”.
                  </li>
                  <li>
                    Complete the requested information one time, and then you
                    can start giving by Paypal.
                  </li>
                  Or
                  <li>
                    Click on the Paypal link below:
                    <span>
                      <a
                        href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDLQA7QHSMMEC&source=url'
                        target='_blank'
                      >
                        https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZDLQA7QHSMMEC&source=url
                      </a>
                    </span>
                    and follow the instructions to give by credit card or visa
                    debit card
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h3>
            May God remember your offerings and keep you and your family during
            this season.
          </h3>
        </div>
      </GivingContainer>
    </>
  )
}
const GivingContainer = styled(Container)`
  .content-wrapper {
    width: 1100px;
    max-width: 90vw;
  }
  #thank {
    text-align: center;
    margin-bottom: 4rem;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    padding: 3rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    h5 {
      letter-spacing: 1px;
    }
    li {
      line-height: 1.75;
    }
    a {
      text-decoration: underline;
      word-break: break-all;
    }
    span {
      display: block;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;

      li {
        margin-left: 20px;
      }
    }
  }
  .item:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  h3 {
    padding: 6rem;
    text-align: center;
    @media screen and (max-width: 640px) {
      padding: 3rem 1rem;
    }
  }
`
