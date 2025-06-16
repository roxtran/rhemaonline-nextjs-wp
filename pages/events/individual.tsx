import { Button, ImgWrapper } from "styles/GlobalStyle";
import { EventPageContainer, participants } from "./2025-walk-a-thon";

import Image from "next/image";
import Meta from "components/common/meta";
import styled from "styled-components";

const item = (text: string) => (
  <div className="item">
    <ImgWrapper>
      <Image
        src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/donation-icon.png"
        alt="icon"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </ImgWrapper>
    <div className="text-wrapper" dangerouslySetInnerHTML={{ __html: text }}></div>
  </div>
);

export default function Individual() {
  const pageTitle = "";
  const pageImage =
    "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/walkathon-main-banner-scaled.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />

      <StyledContainer>
        <div className="wrapper">
          <h3>I, Danielle Hugh, commits to do a 3 km Walk-a-thon to support this fundraising event.</h3>
          <div className="main bottom-line">
            <div className="content">
              <ImgWrapper className="photo">
                <Image
                  src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/walkathon-individual-page-placeholder-banner.jpg"
                  alt="individual"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
              <div className="sub-text-wrapper bottom-line d-flex mt-4 mb-4 w-100">
                <ImgWrapper className="logo">
                  <Image
                    src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/rhema-icon.png"
                    alt="individual"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </ImgWrapper>
                <div className="sub-text">
                  <a href="/events/2025-walk-a-thon">2025 Walkathon</a> fundraising initiative is organized by Rhema.
                  All funds raised will go toward <a href="/fund-raising">Rhema’s church building fund</a>.
                </div>
              </div>
              <div className="letter">
                <p>Hi everyone, my name is Danielle Hugh.</p>
                <p>Want to join me in making a difference?</p>
                <p>
                  On August 19, I will be doing a 3 km walk to support our fundraising campaign. My goal is to raise
                  $1,000, and I’m seeking your support in helping me reach this target.
                </p>
                <p>
                  Your donations will enable us to secure a space that reflects the heart of God through Rhema Christian
                  Ministries: building community, offering hope, and advancing God’s Kingdom.
                </p>
                Thank you for partnering with us on this exciting journey!
                <div className="cover flex-column justify-content-center align-items-center">
                  <ImgWrapper className="one">
                    <Image
                      src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/arrow.png"
                      alt="individual"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </ImgWrapper>
                  <ImgWrapper className="two">
                    <Image
                      src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/arrow.png"
                      alt="individual"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </ImgWrapper>
                </div>
              </div>
            </div>
            <div className="side">
              <div className="raised-wrapper">
                <div className="text">
                  <h4>$735 raised</h4>
                  <div>
                    $1,000 goal・17 donations <br /> I committed to do 3 km walk
                  </div>
                </div>
                <div className="percentage">
                  <h4>74%</h4>
                </div>
              </div>
              <div className="button-wrapper flex-column">
                <Button href="#" data-open-in-church-center-modal="true">
                  Share
                </Button>
                <Button href="#" data-open-in-church-center-modal="true">
                  Donate Now
                </Button>
              </div>
              <div className="items flex-column">
                {item(`Danielle Foucault <br /><b>$20</b>・5 days ago`)}
                {item(`Jeannie Yantha <br /><b>$50</b>・7 days ago`)}
                {item(`Anonymous donor <br /><b>$60</b>・1 mon ago`)}
                {item(`Anonymous donor <br /><b>$120</b>・2 days ago`)}
                <Button className="white" href="#" data-open-in-church-center-modal="true">
                  See all
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper bottom-line pb-5">
          <p>
            More information about{" "}
            <b>
              <i>Rhema Christian Ministries 2025 Walkathon</i>
            </b>
            : ・ <a href="/events/2025-walk-a-thon">https://rhemaonline.ca/events/2025-walk-a-thon</a>
          </p>
          <p>
            As we seek to fulfill our God-given mandate to change and affect lives, we invite you to support and
            participate in our 2025 walkathon. All funds raised from this fundraising initiative will go toward our
            church building fund. We envision a space that supports our ministry work, nurtures families, provides
            resources for children and youth to thrive, ensures older adults are cared for with dignity, and sustains
            initiatives like our weekly food bank and Christmas toy drive.
          </p>
          Your donations will enable us to secure a space that reflects the heart of God through Rhema Christian
          Ministries: building community, offering hope, and advancing God’s Kingdom.
        </div>
        <div className="wrapper support">
          <h4>Words of support</h4>Please donate to share words of support.
          <div className="items d-flex flex-wrap mb-4">
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
            {item(`"You've got this—so proud of you!"<br>- Anonymous donor --`)}
          </div>
        </div>
        {participants}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(EventPageContainer)`
  padding-top: 6rem;

  .wrapper {
    margin-bottom: 3rem;
  }

  .bottom-line {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid black;
  }

  .content {
    ${ImgWrapper} {
      &.photo {
        width: 100%;
        height: 20rem;
        border-radius: 1rem;
      }
    }
    .sub-text-wrapper {
      gap: 1rem;
      overflow: unset;

      ${ImgWrapper} {
        width: 6rem;
        height: 3rem;
      }
    }

    .cover {
      gap: 0;
      background: #ffffff;
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
      margin-top: -2rem;
      position: relative;

      ${ImgWrapper} {
        width: 1rem;
        height: 2rem;
        transform: rotate(90deg);
        &.two {
          margin-top: -1.25rem;
        }
      }
    }
  }
  .side {
    border: 2px solid var(--blue);
    border-radius: 1rem;
    padding: 2rem;

    .raised-wrapper {
      display: flex;
      margin-bottom: 1rem;

      h4 {
        padding: 0 0 0.5rem 0;
      }

      .percentage {
        border: 2px solid var(--blue);
        border-radius: 5rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 4rem;
        h4 {
          padding: 0;
        }
      }
    }
  }
  .items {
    margin-top: 2rem;
    gap: 1.5rem;
    .item {
      display: flex;
      gap: 1rem;
      ${ImgWrapper} {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .support .items {
    gap: 2rem;
    .item {
      width: 48%;
    }
  }
`;
