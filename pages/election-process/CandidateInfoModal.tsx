import { Dispatch, SetStateAction, useRef, MouseEvent } from "react";
import { ModalContainer } from "components/common/Modals/HomeModal";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { fade, slideDown } from "styles/animation";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CandidateInfoModal = ({ open, setOpen }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) setOpen(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <Container ref={modalRef} onClick={closeModal} variants={fade} initial="hidden" animate="show" exit="exit">
          <motion.div className="modal-dialog" variants={slideDown} initial="hidden" animate="show" exit="exit">
            <div className="modal-content">
              <div className="modal-header">
                <a onClick={() => setOpen(false)} className="closeBtn">
                  <IoClose />
                </a>
              </div>
              <div className="modal-body">
                <h4>Candidate Eligibility</h4>
                <p>Candidates must:</p>
                <ul>
                  <li>
                    be members in <b>good standing for at least two (2) years</b> and
                  </li>
                  <li>
                    have demonstrated <b>prior involvement in organizational activities</b>.
                  </li>
                </ul>
                <p>
                  They must also <b>submit a personal statement</b> outlining their vision and qualifications.
                </p>
                <h4>Candidate Criteria </h4>
                <p>All candidates must meet the eligibility requirements as defined in governing documents. </p>
                <ul>
                  <li>
                    Eligibility is determined by a candidate’s standing within the ministry, character, demonstrating
                    alignment with the organization's mission and values, and professional and executive leadership
                    experience. Specifically, any individual seeking nomination must be a member in good standing. This
                    includes consistently supporting the ministry through active participation and verifiable financial
                    giving over the preceding year. Membership standing will be assessed based on attendance records,
                    contribution reports, and active involvement in ministry life.
                  </li>
                  <li>
                    Candidates must exhibit sound moral character, proven leadership capacity, and a demonstrated
                    commitment to the ministry’s spiritual and strategic goals. Individuals currently undergoing
                    disciplinary action are not eligible for nomination.
                  </li>
                  <li>
                    Nominated individuals are expected to possess the capacity to govern with discernment,
                    accountability and discretion. This includes collaborating effectively within a team, engaging
                    constructively in decision-making processes, and upholding the ministry's spiritual health and
                    organizational vision.
                  </li>
                </ul>
                <p>
                  Once a nomination is received, the Electoral Subcommittee will screen the candidates against these
                  established criteria. Working alongside the Board, the subcommittee will ensure the process is
                  transparent and free of bias.
                  <b>
                    Only those who meet all requirements will be shortlisted and formally approved to move forward as
                    candidates in the election
                  </b>
                  .
                </p>
                <p>
                  This structured approach ensures that those entrusted with leadership represent the best interests of
                  the ministry community and have both the spiritual maturity and administrative competence to govern
                  with integrity.
                </p>
                <h4>Candidate Nomination </h4>
                <p>
                  While the broader electoral cycle begins with the vetting and confirming of eligible voters, the
                  candidate nomination process begins explicitly with the official call for nominations. This moment
                  marks the formal commencement of the candidacy phase, during which individuals may submit their names
                  or be nominated to stand for election.
                </p>
                <p>
                  Persons wishing to participate in this process may nominate themselves;{" "}
                  <b>members may NOT submit the name of another member</b> they believe to be a suitable candidate. All
                  nominations must be submitted using the official Candidate Nomination Form, which is to be completed
                  in full and returned by the specified nomination deadline. The form collects essential information and
                  affirms the nominee’s willingness and ability to serve.
                </p>

                <p> Each nomination submission must include the following components: </p>
                <ul>
                  <li>
                    A <b>statement of intent</b>, outlining the nominee’s reasons for seeking election and their
                    willingness to serve the ministry in achieving its mission.{" "}
                  </li>
                  <li>
                    A <b>resume</b>, highlighting relevant qualifications, leadership experience, and the individual’s
                    history of involvement and service within the ministry.{" "}
                  </li>
                  <li>
                    The nominee’s <b>signed consent</b> to stand for election, confirming their awareness of the
                    responsibilities associated with board service and their willingness to be considered.{" "}
                  </li>
                </ul>
                <p>
                  Under the Constitution and By-laws, only members in good standing may self-nominate. This ensures that
                  the nomination process reflects the values and discernment of committed members actively supporting
                  the ministry's vision.
                </p>
                <p>
                  <b>
                    The Electoral Subcommittee, in partnership with the Board, will oversee the receipt and vetting of
                    all nomination forms
                  </b>
                  . The process is designed to be rigorous yet fair, ensuring that all nominated candidates are held to
                  consistent standards and evaluated within the same procedural framework.
                </p>
                <p>
                  The nomination phase is crucial in upholding the values of transparency, accountability, and spiritual
                  discernment as the ministry prepares to elect individuals to assume governance responsibilities.{" "}
                </p>
                <h4>Candidate Screening / Shortlisting </h4>
                <p>
                  Following the close of the nomination period and the receipt of completed Candidate Nomination Forms,
                  the Electoral Subcommittee shall commence the candidate screening process. This critical phase ensures
                  that all individuals being considered for election meet the eligibility requirements and align with
                  the expectations set out in the ministry’s Constitution and By-laws.
                </p>
                <p>
                  The screening process begins with an initial review to verify the completeness and accuracy of each
                  submission. The Electoral Subcommittee will then thoroughly assess each nominee’s qualifications based
                  on the established candidate criteria.
                </p>
                <p>This screening process includes, but is not limited to:</p>
                <ul>
                  <li>
                    <b>Verifying the nominee’s membership status</b> to ensure they are in good standing at the time of
                    nomination.
                  </li>
                  <li>
                    <b>Confirming a consistent history of financial support</b> to the ministry over the past year and
                    active participation in church life and ministry activities.
                  </li>
                  <li>
                    <b>Evaluating the nominee’s alignment</b> with the ministry’s mission, vision, and the spiritual and
                    governance responsibilities expected of Board members.
                  </li>
                  <li>
                    <b>Assessing executive leadership and professional experience</b>, considering the nominee’s
                    capacity to contribute meaningfully to Board-level decision-making, strategic planning, and
                    oversight.
                  </li>
                </ul>
                <p>
                  This evaluation is carried out impartially, confidentially, and with due diligence. The Electoral
                  Subcommittee ensures that no candidate is unfairly advantaged or disadvantaged during this process.
                </p>
                <p>
                  <b>
                    When the number of qualified nominees significantly EXCEEDS the number of available positions on the
                    Board, the Electoral Subcommittee reserves the right to implement a shortlisting process
                  </b>
                  . This process is conducted transparently and unbiasedly, focusing solely on the merits and readiness
                  of each nominee to serve effectively.
                </p>
                <p>
                  The goal of the shortlisting procedure is to present to the membership a slate of candidates who have
                  demonstrated the capacity, commitment, and spiritual maturity to govern the ministry with integrity
                  and excellence.
                </p>
                <h4>Candidate Acceptance </h4>
                <p>
                  Once screening is complete and a candidate is deemed eligible,{" "}
                  <b>the Electoral Officer will notify them of their formal acceptance</b>. At this point, the candidate
                  will be invited to participate in the campaign process by submitting their biography and photograph
                  for the official campaign materials.
                </p>
                <p>
                  Candidates will also be briefed on the campaign code of conduct and expectations for ethical
                  behaviour. Acceptance is contingent on ongoing compliance with all election guidelines throughout the
                  process.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export const Container = styled(ModalContainer)`
  height: 100%;
  text-align: left;

  .modal-dialog {
    margin: auto;
    height: 100%;

    @media (min-width: 576px) {
      max-width: 75vw;
    }
  }
  .modal-body {
    overflow-y: auto;

    > * {
      width: 100%;
    }
  }
`;

export default CandidateInfoModal;
