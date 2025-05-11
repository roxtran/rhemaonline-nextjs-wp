import { Dispatch, SetStateAction, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fade, slideDown } from "styles/animation";

import { Container } from "./CandidateInfoModal";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EarlyVoterModal = ({ open, setOpen }: Props) => {
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
                <h4>Early Voters </h4>
                <p>
                  <b>Purpose:</b> The Early Voting process accommodates members who may be unable to attend the AGM but
                  still wish to participate fully in the board election.
                </p>
                <p>
                  <b>Eligibility and Access:</b> Only those who selected the early voting option during voter
                  registration will receive a secure, single-use electronic voting token. This token is non-transferable
                  and becomes inactive once used.
                </p>
                <p>
                  <b>Voting Window and Method: The early voting period will open before the AGM</b>. Voters may cast
                  their ballot at any time during this designated window using their device from a location of their
                  choice.
                </p>
                <p>
                  <b>Support for Assisted Voting:</b> To further support accessibility,{" "}
                  <b>three in-person opportunities</b>
                  will be provided on designated Sundays leading up to the AGM. These sessions will allow individuals
                  needing help with technology to access the voting portal with guided assistance from support staff.
                  These opportunities will be held at the ministry site, and walk-in assistance will be available.
                </p>
                <p>
                  <b>Integrity Note:</b> Once a voting token is used, it cannot be reused or reactivated. Voters who opt
                  for early voting will be unable to vote again on the day of the AGM or at any other time.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default EarlyVoterModal;
