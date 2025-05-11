import { Dispatch, SetStateAction, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fade, slideDown } from "styles/animation";

import { Container } from "./CandidateInfoModal";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const VotingGuideModal = ({ open, setOpen }: Props) => {
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
                <h4>Electronic Voting </h4>
                <p>
                  All voting shall be conducted electronically through a secure platform, and members will receive a
                  unique voting key via email, ensuring confidentiality. Each member is entitled to one (1) vote per
                  position.
                </p>
                <h4>Voting Timeline </h4>
                <p>
                  The voting period shall be communicated in advance. No extensions shall be granted unless due to a
                  system failure or unforeseen circumstances.
                </p>
                <h4>Voting Procedures </h4>
                <p>
                  The election process is designed to provide secure, accessible, and inclusive opportunities for
                  eligible members to participate in the selection of board members. Voting will be conducted
                  electronically using unique voting tokens tied to each registered voter's declared voting
                  preference—either during the <b>Early Voting</b> window or{" "}
                  <b>on the Annual General Meeting (AGM) day</b>. Once a vote is cast, it is final and cannot be
                  duplicated or resubmitted.
                </p>
                <ol>
                  <li>
                    Early Voting
                    <ul>
                      <li>
                        <b>Purpose:</b> The Early Voting process accommodates{" "}
                        <b>members who may be unable to attend the AGM</b> but still wish to participate fully in the
                        board election.
                      </li>
                      <li>
                        <b>Eligibility and Access:</b> Only those who selected the early voting option during voter
                        registration will receive a secure, single-use electronic voting token. This token is
                        non-transferable and becomes inactive once used.
                      </li>
                      <li>
                        <b>Voting Window and Method: The early voting period will open before the AGM</b>. Voters may
                        cast their ballot at any time during this designated window using their device from a location
                        of their choice.
                      </li>
                      <li>
                        <b>Support for Assisted Voting:</b> To further support accessibility,{" "}
                        <b>three (3) in-person opportunities</b> will be provided on designated Sundays leading up to
                        the AGM. These sessions will allow individuals needing help with technology to access the voting
                        portal with guided assistance from support staff. These opportunities will be held at the
                        ministry site, and walk-in assistance will be available.
                      </li>
                      <li>
                        <b>Integrity Note:</b> Once a voting token is used, it cannot be reused or reactivated. Voters
                        who opt for early voting will be unable to vote again on the day of the AGM or at any other
                        time.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Voting During the AGM
                    <ul>
                      <li>
                        <b>Purpose:</b> This voting option is for <b>registered voters who plan to participate</b>{" "}
                        during the Annual General Meeting.
                      </li>
                      <li>
                        <b>Eligibility and Access:</b> Members who selected AGM Day Voting on their registration form
                        will be issued a unique, single-use voting token for use <b>only during the AGM</b>. These
                        tokens will be distributed digitally just before the voting segment of the meeting.
                      </li>
                      <li>
                        <b>Technical Support:</b> An IT support team will be on-site and on standby throughout the AGM
                        to assist any voter experiencing technical difficulties during the voting process.
                      </li>
                      <li>
                        <b>Integrity Note:</b> AGM tokens are non-transferable and may only be used once. Voters who
                        selected this option will not have access to the early voting portal and must cast their vote
                        during the designated voting time on AGM Day.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  <b>Note on Voting Finality:</b> In both cases—early voting or voting during the AGM—once a vote is
                  submitted using a valid token, the token becomes inactive, and the vote is recorded. Duplicate
                  submissions are impossible; no alternative or backup vote will be permitted.
                </p>
                <h4>Voting Accessibility and Inclusivity</h4>
                <p>
                  Members who require assistance shall have access to technical support. The voting system shall be
                  optimized for accessibility, ensuring inclusivity for members with technical challenges.{" "}
                </p>
                <h4>Voter Screening </h4>
                <p>
                  The procedure outlines the steps to validate and approve eligible voters for the upcoming Board
                  election, ensuring a transparent, fair, and accountable process. Voter screening is a critical
                  component of the election process, safeguarding the integrity of participation and ensuring that only
                  members in good standing are entitled to cast their votes.{" "}
                </p>
                <p>
                  The process is governed by the Board and supported by a designated Electoral Subcommittee. This team
                  is appointed to manage the voter screening process, working collaboratively with leadership and
                  relevant administrative personnel to ensure accuracy, fairness, and alignment with the organization’s
                  governance framework.{" "}
                </p>
                <p>
                  <b>
                    To be eligible to vote in the election, individuals must be registered members of the ministry and
                    demonstrate that they are in good standing
                  </b>
                  . Good standing is defined by three criteria: active membership, consistent attendance, and faithful
                  financial support of the ministry within the past twelve months. Voter eligibility is not based on
                  popularity or perceived influence but on a member's commitment to the ministry's mission and ongoing
                  involvement in the church's life.{" "}
                </p>
                <p>
                  The screening process begins with generating a master list of all registered members. From this list,
                  the Electoral Subcommittee begins a thorough review. Each member’s record is examined to confirm
                  active participation in services and ministry events, and financial contributions are recorded over
                  the past year. The ministry’s treasury department uses the administrative tools and databases as a
                  reference.{" "}
                </p>
                <p>
                  Subcommittee members are assigned specific portions of the list to vet. They are responsible for
                  verifying the members on their assigned list and flagging any entries that require further
                  clarification or review. Any member whose records are incomplete, unclear, or disputed will be
                  escalated for discussion among the full Subcommittee and, where necessary, brought to the attention of
                  the Board for a final decision.{" "}
                </p>
                <p>
                  All efforts are made to ensure the process is inclusive and without bias. The Electoral Subcommittee
                  is mandated to be rigorous, yet respectful, recognizing the dignity of each member.{" "}
                  <b>
                    When a member appears ineligible, a follow-up is conducted to provide clarity and an opportunity for
                    verification where applicable
                  </b>
                  .{" "}
                </p>
                <p>
                  Once screening is complete, the Board compiles and approves a final list of eligible voters. This list
                  forms the basis for voter registration and access to the electronic voting platform. Members not
                  included on the final list are respectfully informed, with a brief explanation and guidance for future
                  eligibility.{" "}
                </p>
                <p>
                  Throughout this process, confidentiality is maintained. Personal financial records should not be
                  shared with the subcommittee or the Board. The treasurer holds this information in confidence and only
                  verifies whether a member is in good standing, as in giving regularly over a specified period. This
                  procedure affirms the ministry’s commitment to integrity, stewardship, and orderly governance as it
                  seeks to engage its members in meaningful, values-driven leadership selection.{" "}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default VotingGuideModal;
