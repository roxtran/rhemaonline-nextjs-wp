import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import { IoArrowBackOutline } from "react-icons/io5";
import Meta from "components/common/meta";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "slide 1",
    content: "",
    featuredImage: {
      node: {
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_3082-scaled.jpg",
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
        sourceUrl: "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/03/NIK_3031-scaled.jpg",
      },
    },
    slideFields: {
      ctaUrl: "",
    },
  },
];

export default function Index() {
  const pageTitle = "Election Process - FAQs";
  const pageImage = "/img/election/board-members.jpg";
  const router = useRouter();

  return (
    <>
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
        <a className="btn-back" type="button" onClick={() => router.back()}>
          <IoArrowBackOutline className="icon-back" />
          Go back
        </a>
        <h2 id="title">Election FAQs</h2>
        <div className="wrapper">
          <ol>
            <li>
              <strong>What is the purpose of this election?</strong>
              <br />
              The election is being held to select board members who will help guide the direction of our organization,
              ensuring strong leadership and accountability.
            </li>
            <li>
              <strong>Who is eligible to vote?</strong>
              <br />
              All members in good standing who have met the eligibility criteria outlined in our bylaws are eligible to
              vote. Members must also complete the Voter Registration Form before the election.
            </li>
            <li>
              <strong>Why do members have to register to vote?</strong>
              <br />
              To ensure only active members play a role in determining membership on the Board.
            </li>
            <li>
              <strong>How do I register to vote?</strong>
              <br />
              You can register by completing the Voter Registration Form available on our designated election platform.
              This ensures your information is up-to-date and confirms your eligibility to participate.
            </li>
            <li>
              <strong>When will voting take place?</strong>
              <br />
              The official voting period will be announced following the nomination process. There are two (2) voting
              periods as follows:
              <ul>
                <li>
                  <strong>Early Voting:</strong> Begins on July 13th at 12:00am and ends on July 27th at 11:59pm.
                </li>
                <li>
                  <strong>Final Voting Day:</strong> July 31st during the AGM.
                </li>
              </ul>
            </li>
            <li>
              <strong>How can I cast my vote?</strong>
              <br />
              You can vote electronically through our secure online voting platform using a unique key that has been
              generated for each person. This unique key will be forwarded to you via a secure online mode.
            </li>
            <h4>Electronic Voting FAQs</h4>
            <li>
              <strong>How does the electronic voting process work?</strong>
              <br />
              Once the voting period opens, you will receive a secure link via email or through the election platform.
              Simply follow the instructions to cast your vote online.
            </li>
            <li>
              <strong>Is my electronic vote secure?</strong>
              <br />
              Yes, we are using a secure and confidential voting system to protect the integrity of the election and
              ensure that votes remain anonymous.
            </li>
            <li>
              <strong>What if I experience technical difficulties while voting online?</strong>
              <br />
              If you encounter any issues, please contact our election support team for assistance. Support details will
              be available on the election platform.
            </li>
            <h4>Candidate & Nomination FAQs</h4>
            <li>
              <strong>How can I become a candidate for the election?</strong>
              <br />
              All aspiring Candidate can be nominated by completing the Nomination Form and meeting the eligibility
              requirements. More details on eligibility criteria and the submission process are available on our
              election platform.
            </li>
            <li>
              <strong>Can I nominate a candidate for the election?</strong>
              <br />
              No, but you can encourage members you believe to be qualified to apply.
            </li>
            <li>
              <strong>How does Gender Parity play a part in our election?</strong>
              <br />
              Our by-laws provide guidance around gender parity, encouraging the participation of both qualified men and
              women in the Ministry. That said, directors of the Board must first meet the eligibility criteria for
              membership.
            </li>
            <li>
              <strong>Are we only accepting nominations from male candidates?</strong>
              <br />
              No, we are encouraging male members to self-nominate as the current Board is largely made up of women, but
              all qualified candidates will be put forward with members ultimately deciding who sits on the Board.
            </li>
            <li>
              <strong>What is the primary responsibility of the Board?</strong>
              <br />
              Fiduciary/budgetary oversight.
            </li>
            <li>
              <strong>What are the qualifications for a board member?</strong>
              <br />
              Candidates must be members in good standing, have a history of involvement with the organization, and meet
              any additional criteria specified in the nomination guidelines.
            </li>
            <li>
              <strong>How will I learn more about the candidates?</strong>
              <br />
              Once nominations are finalized, candidate bios and statements of intent will be available on our election
              platform, allowing members to review their backgrounds and vision before casting their votes.
            </li>
            <h4>Accessibility & Inclusivity FAQs </h4>
            <li>
              <strong>Are there accommodations for members with electronic apprehensions?</strong>
              <br />
              Yes, we are committed to ensuring accessibility for all members. If you require assistance, please reach
              out to our election support team for assistance.
            </li>

            <li>
              <strong>Can I request assistance in casting my vote?</strong>
              <br />
              Yes, assistance will be available for those who need it, ensuring that every member can participate in the
              election process.
            </li>

            <h4>Election Integrity & Transparency FAQs </h4>
            <li>
              <strong>How is the election process being kept fair and unbiased?</strong>
              <br />
              We have implemented safeguards, including secure voting methods, and clear eligibility requirements, to
              ensure a transparent and impartial process.
            </li>

            <li>
              <strong>How are disputes or irregularities handled?</strong>
              <br />
              Any concerns about the election process should be formally submitted to the Election Committee. A clear
              procedure is in place to review and address any disputes.
            </li>

            <li>
              <strong>Will the results be audited?</strong>
              <br />
              Yes, a review process will be conducted to validate election results and ensure accuracy before they are
              officially announced.
            </li>

            <h4>Additional FAQs </h4>
            <li>
              <strong>Where can I find updates about the election?</strong>
              <br />
              All election-related updates, timelines, and important announcements will be posted on our designated
              election platform.
            </li>

            <li>
              <strong>Can I change my vote after submission?</strong>
              <br />
              No, once your vote is submitted, it is final to maintain election integrity.
            </li>

            <li>
              <strong>Who can I contact if I have further questions?</strong>
              <br />
              If you have additional questions, please reach out to the Election Committee through the contact details
              provided on the election platform.
            </li>
          </ol>
          <a className="btn-back" type="button" onClick={() => router.back()}>
            <IoArrowBackOutline className="icon-back" />
            Go back
          </a>
        </div>
      </PageContainer>
    </>
  );
}

const PageContainer = styled(Container)`
  padding-top: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    max-width: 90vw;
  }
  h2 {
    text-align: center;
  }
  h4 {
    margin-left: -1.5rem;
  }
  ol {
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 0.5rem;
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
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .divider {
    border-bottom: 0.125rem solid var(--text-color);
    width: 90vw;
    margin: 1rem 0;
  }

  #procedure {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
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
