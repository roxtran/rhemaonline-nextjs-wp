import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { Roadmap } from "components/election-process/Roadmap";
import { useState } from "react";
import styled from "styled-components";
import CandidateInfoModal from "./CandidateInfoModal";
import EarlyVoterModal from "./EarlyVoterModal";
import VotingGuideModal from "./VotingGuideModal";

const slides = [
  {
    title: "slide 1",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (1).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 2",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (2).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 3",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (3).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 4",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (4).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 5",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (5).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 6",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (6).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 7",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (7).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 8",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (8).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 9",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (9).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 10",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (10).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 11",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (11).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 12",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (12).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 13",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (13).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 14",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (14).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 15",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (15).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 16",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (16).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 17",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (17).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 18",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (18).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 19",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (19).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 20",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (20).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 21",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (21).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 22",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (22).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 23",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (23).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 24",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (24).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 25",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (25).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 26",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (26).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 27",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (27).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 28",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (28).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 29",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (29).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
  {
    title: "slide 30",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (30).jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
];

export default function Index() {
  const [openCandidateInfo, setOpenCandidateInfo] = useState(false);
  const [openVotingGuide, setOpenVotingGuide] = useState(false);
  const [openEarlyVoter, setOpenEarlyVoter] = useState(false);

  const pageTitle = "Election Process";
  const pageImage = "/img/election/board-members.jpg";

  return (
    <>
      <CandidateInfoModal open={openCandidateInfo} setOpen={setOpenCandidateInfo} />
      <VotingGuideModal open={openVotingGuide} setOpen={setOpenVotingGuide} />
      <EarlyVoterModal open={openEarlyVoter} setOpen={setOpenEarlyVoter} />

      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title=""
        blur="blur(0.0625rem)"
        height="30rem"
        mbHeight="12rem"
        isUnderMenu={false}
      />
      <PageContainer>
        <h1 id="title">Rhema Board Election</h1>
        <div id="procedure" className="wrapper">
          <div className="left-wrapper">
            <h2>Election Procedure</h2>
            <p>
              The election procedure is designed to uphold the integrity of our process, protect the rights of every
              member to participate, and{" "}
              <b>ensure that all candidates are given an equal opportunity to be considered</b>. It reflects our shared
              commitment to good governance, member representation, and spiritual stewardship.
            </p>
          </div>
          <div className="right-wrapper">
            <h3>Important Dates</h3>
            <p>
              <b>Nomination -</b> June 01 to 28
            </p>
            <p>
              <b>Screening -</b> June 29 to 30
            </p>
            <p>
              <b>Voting Period -</b> July 13 to 29
            </p>
          </div>
        </div>
        <div id="the-3-section" className="wrapper">
          <div>
            <h3>Candidate Info</h3>
            <p>Check out the guideline if you intend to nominate any potential candidates.</p>
            <div className="button-wrapper">
              <Button
                onClick={() => {
                  setOpenCandidateInfo(true);
                }}
              >
                Candidate Guide
              </Button>
            </div>
            <a
              href="https://rhemachristianministries.churchcenter.com/people/forms/1238803"
              data-open-in-church-center-modal="true"
            >
              Candidate Registration Form
            </a>
          </div>
          <div>
            <h3>Voter Info</h3>
            <p>Read the voter guide to learn about and understand your voting rights and procedures.</p>
            <div className="button-wrapper">
              <Button
                onClick={() => {
                  setOpenVotingGuide(true);
                }}
              >
                Voting Guide
              </Button>
            </div>
            <a
              href="https://rhemachristianministries.churchcenter.com/people/forms/1229634"
              data-open-in-church-center-modal="true"
            >
              Voter Registration Form
            </a>
          </div>
          {/* <div>
            <h3>Early Voters</h3>
            <p>Here’s what you need to know if you have registered to vote early.</p>
            <div className="button-wrapper">
              <Button
                onClick={() => {
                  setOpenEarlyVoter(true);
                }}
              >
                Important Details
              </Button>
            </div>
          </div> */}
        </div>
        <div id="by-laws" className="wrapper">
          <div className="divider" />
          <h2>Read more about our constitution & by-laws</h2>
          <div className="button-wrapper">
            <Button href="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/04/RCM-of-Canada-Inc_Constitution_Final_20240130_V1.3-1.pdf">
              Constitution
            </Button>
            <Button href="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/04/RCM-of-Canada-Inc_By-Law_Final-20240718_V1.6-1.pdf">
              By-laws
            </Button>
          </div>
          <div className="divider" />
        </div>
        <div id="road-map" className="wrapper">
          <Roadmap />
        </div>
        {/* <div id="candidate-information" className="wrapper">
          <h2>Candidate Information</h2>
          <ImgWrapper>
            <Image
              src="/img/election/candidates.jpeg"
              alt="introduction1"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }}
            />
          </ImgWrapper>
        </div> */}
        <div className="divider" />
        <div className="button-wrapper faq">
          <Button href="/election-process/faqs">Election FAQs</Button>
        </div>
      </PageContainer>
    </>
  );
}

const PageContainer = styled(Container)`
  padding-top: 3rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    max-width: 90vw;
  }
  ${Button} {
    background: #ffde59;
    color: var(--text-color);
  }
  ${ImgWrapper} {
    width: 100%;
    height: 50rem;
  }

  .wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    margin-bottom: 4rem;
  }

  .divider {
    border-bottom: 0.125rem solid var(--text-color);
    width: 90vw;
    margin: 1rem 0;
  }

  #procedure {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media screen and (min-width: 1024px) {
      grid-template-columns: 3fr 1.25fr;
    }

    > div {
      background-color: #f1f4f9;
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
    .date {
      font-size: 3rem;
      line-height: 1.1;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .button-wrapper {
      margin-bottom: 1rem;
    }
  }
  #the-3-section {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      background-color: #f1f4f9;
      padding: 1rem 2rem;
      border-radius: 1rem;
      min-width: 280px;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    p {
      margin-bottom: 0.5rem;
    }

    .button-wrapper {
      margin-bottom: 1rem;
    }
  }
  #by-laws {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 0rem;

    .button-wrapper {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
  #information-session {
    ${ImgWrapper} {
      max-width: 90vw;
      height: 12rem;

      @media screen and (min-width: 768px) {
        height: 20rem;
      }
      @media screen and (min-width: 1024px) {
        height: 30rem;
      }
      @media screen and (min-width: 1280px) {
        height: 40rem;
      }
    }
  }
  #road-map {
    padding: 2rem 0;
  }
  .button-wrapper.faq {
    margin: 2rem 0;

    ${Button} {
      font-weight: bold;
    }
  }
`;
