import HeadLine from "components/common/HeadLine";
import ImageSlider from "components/common/ImageSlider";
import Meta from "components/common/meta";
import Image from "next/image";
import { VideoWrapper } from "pages/sermons/styles";
import styled from "styled-components";
import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

const slides = [
  {
    title: "slide 1",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (1).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 2",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (2).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 3",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (3).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 4",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (4).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 5",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (5).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 6",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (6).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 7",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (7).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 8",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (8).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 9",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (9).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 10",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (10).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 11",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (11).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 12",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (12).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 13",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (13).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 14",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (14).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 15",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (15).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 16",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (16).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 17",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (17).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 18",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (18).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 19",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (19).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 20",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (20).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 21",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (21).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 22",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (22).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 23",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (23).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 24",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (24).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 25",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (25).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 26",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (26).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 27",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (27).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 28",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (28).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 29",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (29).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  },
  {
    title: "slide 30",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "/img/election/slides/election-slide (30).jpg"
      }
    },
    slideFields: {
      ctaUrl: ""
    }
  }
];

export default function Index() {
  const pageTitle = "Election Process";
  const pageImage = "/img/election/board-members.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
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
              member to participate, and ensure that all candidates are given an equal opportunity to be considered. It
              reflects our shared commitment to good governance, member representation, and spiritual stewardship.{" "}
              <a href="/election-process/faqs">Click here to read more</a>
            </p>
          </div>
          <div className="right-wrapper">
            <div className="date">
              May <br /> 07
            </div>
            <div>
              <b>Candidate submission Deadline</b>
            </div>
            <div>Only submissions by this date will be valid.</div>
          </div>
          <div className="left-wrapper">
            <h2>Important Dates</h2>
            <p>
              <b>Nomination Period</b>
            </p>
            <ul>
              <li>April 17 to May 7, 2025: Candidate Submission</li>
              <li> May 8 to May 28, 2028: Candidate Screening</li>
            </ul>
            <p>
              <b>Campaigning Period</b> - June 12, 2025 to July 12, 2025
            </p>
            <p>
              <b>Voting Period</b> - July 13 - 30, 2025
            </p>
          </div>
          <div className="right-wrapper">
            <h3>Early Voters</h3>
            <p>Here’s what you need to know if you have registered to vote early</p>
            <div className="button-wrapper">
              <Button href="#">Important Details</Button>
            </div>
          </div>
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
        <div id="information-session" className="wrapper">
          <h2>Information session slides</h2>
          <ImageSlider slides={slides} dots={false} autoplay={false} />
        </div>
        <div id="road-map" className="wrapper">
          <h2>2025 Election Road Map</h2>
          <ImgWrapper>
            <Image
              src="/img/election/road-map.jpeg"
              alt="introduction1"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }}
            />
          </ImgWrapper>
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
  h2 {
    text-align: center;
  }
  ${Button} {
    background: #ffde59;
    color: var(--text-color);
  }
  ${ImgWrapper} {
    width: 100%;
    height: 22rem;
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
      grid-template-columns: 3fr 1fr;
    }

    > div {
      background-color: #f1f4f9;
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
    .right-wrapper {
      text-align: center;
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
  #by-laws {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
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
    background-color: #f0f4f9;
    padding: 2rem 0;
  }
  .button-wrapper.faq {
    margin: 2rem 0;

    ${Button} {
      font-weight: bold;
    }
  }
`;
