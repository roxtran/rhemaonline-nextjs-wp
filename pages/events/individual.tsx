import { Button, ImgWrapper } from "styles/GlobalStyle";
import { EventPageContainer, participants } from "./2025-walk-a-thon";

import Image from "next/image";
import Meta from "components/common/meta";
import styled from "styled-components";

export default function Individual() {
  const pageTitle = "";
  const pageImage =
    "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/walkathon-main-banner-scaled.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Walk-a-thon fundraising event`} ogImage={pageImage} />

      <StyledContainer>
        <div className="wrapper">
          <h3>I, Danielle Hugh, commits to do a 3 km Walk-a-thon to support this fundraising event.</h3>
          <div className="letter">
            <div className="content">
              <ImgWrapper>
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
            </div>
            <div className="side">
              <div className="text-wrapper">
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
            </div>
          </div>
        </div>
        {participants}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(EventPageContainer)`
  padding-top: 6rem;

  .content {
    ${ImgWrapper} {
      width: 100%;
      height: 20rem;
      border-radius: 1rem;
    }
  }
  .side {
    border: 2px solid var(--blue);
    border-radius: 1rem;
    padding: 2rem;

    .text-wrapper {
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
`;
