import { Container, def, rem } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import Link from "next/link";
import paths from "paths";
import styled from "styled-components";

export default function Giving() {
  const pageTitle = "Giving";
  const pageImage = "/img/giving-img.jpg";
  const pageDesc = "Make A Difference!";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} desc={pageDesc} />
      <HeadLine imgUrl={pageImage} title={pageDesc} />
      <GivingContainer>
        <div id="thank">
          <p>
            Thank you everyone for your continued support in these times. We know that this too shall pass for our God
            is able to do more than we can ask think or imagine and he will bring us through unscathed in Jesus name.
          </p>
          <p>Here are a few ways you can continue to support the ministry whether we gather in person or online.</p>
        </div>
        <div className="content-wrapper">
          <h2 className="title">Ways to give</h2>
          <div className="items">
            <div className="item e-transfer">
              <div className="type">
                <div className="icon-full">
                  <Image
                    src="/img/give/e-transfer.png"
                    width={112}
                    height={48}
                    alt="telephone"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="desc">
                <ul>
                  <li>
                    Send an E-Transfer to: <Link href={paths.givingLinks.eTransfer}>treasury@rhemaonline.ca</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item telephone">
              <div className="type">
                <div className="icon">
                  <Image
                    src="/img/give/telephone.png"
                    width={48}
                    height={48}
                    alt="telephone"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="type-name">
                  TELEPHONE / <br />
                  INTERNET BANKING
                </h5>
              </div>
              <div className="desc">
                <ul>
                  <li>Log into your bank account as you usually do.</li>
                  <li>
                    Select bill payment, and then choose <span className="bold">“add new payee”</span>.
                  </li>
                  <li>
                    Search and select <span className="bold">Rhema Christian Ministries (Toronto or Ottawa)</span>.
                  </li>
                  <li>
                    Use your Rhema membership number as the account number or enter <span className="bold">9999</span>{" "}
                    for non-members.
                  </li>
                </ul>
              </div>
            </div>
            <div className="item tithe-ly">
              <div className="type">
                <div className="icon-full">
                  <Image
                    src="/img/give/tithe-ly.png"
                    width={176}
                    height={48}
                    alt="telephone"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="desc">
                <ul>
                  <li>
                    Go to <Link href="https://get.tithe.ly">https://get.tithe.ly</Link>
                  </li>
                  <li>If you don’t have a Tithe.ly account, you can create one in a few easy steps.</li>
                  <li>Complete the requested information one time, and then you can start giving by Tithe.ly.</li>
                  <li>
                    Or <Link href={paths.givingLinks.titheLy}>click here</Link>
                  </li>
                  <li>and follow the instructions to give by credit card or visa debit card.</li>
                </ul>
              </div>
            </div>
            <div className="item text-giving">
              <div className="type">
                <div className="icon">
                  <Image
                    src="/img/give/telephone.png"
                    width={48}
                    height={48}
                    alt="telephone"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="type-name">Text Giving</h5>
              </div>
              <div className="desc">
                <ul>
                  <li>
                    Text the word <span className="bold">'Give'</span> to <span className="bold">1-844-542-0003</span>.
                  </li>
                  <li>You will receive a reply with a link.</li>
                  <li>
                    Click on the link which will allow you to provide the information required to complete the process.
                  </li>
                  <li>To send future gifts, text the dollar amount, and the category, ex. ($100 Tithes).</li>
                </ul>
              </div>
            </div>
            <div className="item paypal">
              <div className="type">
                <div className="icon-full">
                  <Image
                    src="/img/give/paypal.png"
                    width={190}
                    height={48}
                    alt="telephone"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="desc">
                <ul>
                  <li>
                    Go to <Link href="https://www.paypal.com">https://www.paypal.com</Link>
                  </li>
                  <li>If you don’t have a paypal account, you can create one in a few easy steps.</li>
                  <li>
                    Click on personal, then click on <span className="bold">“get a Paypal account”</span>.
                  </li>
                  <li>Complete the requested information one time, and then you can start giving by Paypal.</li>
                  <li>
                    Or <Link href={paths.givingLinks.paypal}>click here</Link>
                  </li>
                  <li>and follow the instructions to give by credit card or visa debit card.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 className="end-text">May God remember your offerings and keep you and your family during this season.</h3>
      </GivingContainer>
    </>
  );
}
const GivingContainer = styled(Container)`
  a {
    word-wrap: break-word;
  }
  .bold {
    font-weight: 600;
  }
  #thank {
    width: ${rem(1250)};
    max-width: 80vw;
    text-align: center;
    margin-bottom: 2rem;
  }
  .content-wrapper {
    background: var(--light-grey-bg);
    width: 100vw;
    padding: 2rem;
  }
  .title {
    text-align: center;
    color: var(--highlight);
  }
  .items {
    margin: 2rem auto;
    width: 100%;
    max-width: ${def.wrapper.width};

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (min-width: ${rem(1280)}) {
      flex-flow: column wrap;
      max-height: ${rem(1000)};
    }
  }
  .item {
    min-width: ${rem(280)};
    max-width: ${rem(400)};
    background: #fff;
    padding: 2rem 1.5rem 0;
    border-radius: ${rem(10)};

    .type {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 1rem;

      .icon {
        width: ${rem(60)};
      }
      .icon-full {
        width: 100%;
      }

      .type-name {
        margin-left: 0.5rem;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }

    .desc {
      border-top: ${rem(1)} solid rgba(0, 0, 0, 0.1);
      padding: 1.5rem 1rem 1rem;

      li {
        margin-bottom: 1rem;
      }
    }
  }

  .end-text {
    text-align: center;
    max-width: 90vw;
    margin-top: 2.5rem;
  }
`;
