import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import { fade, slideDown } from "styles/animation";

import { IoClose } from "react-icons/io5";
import styled from "styled-components";

interface HomeModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const HomeModal = ({ openModal, setOpenModal }: HomeModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) setOpenModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && (
        <ModalContainer ref={modalRef} onClick={closeModal} variants={fade} initial="hidden" animate="show" exit="exit">
          <motion.div className="modal-dialog" variants={slideDown} initial="hidden" animate="show" exit="exit">
            <div className="modal-content">
              <div className="modal-header">
                <a onClick={() => setOpenModal(false)} className="closeBtn">
                  <IoClose />
                </a>
              </div>
              <div className="modal-body">
                <h3>🔒 Website Notice: Fraud Alert – Please Read Carefully</h3>
                <b>SCAM ALERT: PROTECT YOURSELF AND STAY VIGILANT</b>
                <p>
                  Rhema Christian Ministries has been made aware of recent fraudulent activity involving individuals
                  falsely using the name of our ministry and Pastor Meikle in online scams. This is the{" "}
                  <b>second known incident</b>, and we are taking this matter seriously.
                </p>

                <p>
                  We urge all parishioners and members of the public to exercise <b>extreme caution</b> when approached
                  by unknown individuals or unverified third parties, particularly those offering deals or opportunities
                  that seem "too good to be true." These types of scams are unfortunately on the rise, and{" "}
                  <b>no one is immune</b>.
                </p>

                <p>
                  <strong>Please note:</strong>
                </p>
                <ul>
                  <li>
                    <b>
                      Rhema Christian Ministries will never solicit funds or personal information through unofficial
                      channels or social media ads.
                    </b>
                  </li>
                  <li>
                    <b>
                      Any official outreach from the ministry will come through trusted, verified communication
                      platforms.
                    </b>
                  </li>
                </ul>

                <p>
                  <strong>We strongly encourage everyone to:</strong>
                </p>
                <ul>
                  <li>
                    <b>Verify the legitimacy</b> of any suspicious communication
                  </li>
                  <li>
                    <b>Avoid sharing personal or financial information</b> with unverified contacts
                  </li>
                  <li>
                    <b>Report any suspicious activity to local authorities immediately</b>
                  </li>
                </ul>

                <p>
                  Your vigilance protects not only you, but also others in our community. If you see something, say
                  something—it could happen to anyone.
                </p>

                <p>Thank you for helping us safeguard our community.</p>
                <p>
                  <strong>— Communications Team </strong>
                  <br />
                  Rhema Christian Ministries
                </p>

                <h4>🛑 Newsletter Version: SCAM ALERT – Please Read Carefully</h4>
                <h4>Protecting Our Rhema Community</h4>
                <p>
                  <b>Dear Rhema Family</b>,
                </p>
                <p>
                  We want to bring to your attention two recent incidents involving the fraudulent use of our ministry
                  and Pastor Meikle's name in online scams. While we believed the issue had been resolved, we regret to
                  report that it has resurfaced.
                </p>

                <p>
                  These scams are becoming more frequent, and <b>no one is immune</b>. We encourage every member of our
                  community to be <b>extra vigilant</b> when interacting with unknown individuals or third parties,
                  especially those offering deals or opportunities that seem “too good to be true.”
                </p>

                <h4>⚠️ What You Need to Know</h4>
                <ul>
                  <li>
                    Rhema Christian Ministries <b>does not request donations, personal, or financial information</b>{" "}
                    through unofficial channels.
                  </li>
                  <li>
                    All official communication will come through <b>verified sources</b> such as our website, email, or
                    official social media pages.
                  </li>
                  <li>
                    <b>Do not respond</b> to or engage with suspicious messages, phone calls, or social media posts.
                  </li>
                </ul>

                <h4>✅ How You Can Protect Yourself</h4>
                <ul>
                  <li>
                    <b>Be cautious</b> and verify the source before sharing any personal information.
                  </li>
                  <li>
                    <b>Trust your instincts</b>—if something feels off, it probably is.
                  </li>
                  <li>
                    <b>Report all suspicious activity</b> to the appropriate authorities.
                  </li>
                </ul>

                <h4>👀 See Something? Say Something.</h4>
                <p>
                  Your vigilance could protect someone else. Scams thrive in silence—
                  <b>let’s not give them the chance</b>.
                </p>
                <p>Thank you for staying alert and helping us keep our community safe.</p>

                <p>
                  <b>In faith and service,</b>
                  <br />
                  Communications Team
                  <br />
                  <b>Rhema Christian Ministries</b>
                </p>

                <h4>📣 Social Media Version: Public Scam Alert Post</h4>
                <p>
                  🚨 <b>SCAM ALERT</b> 🚨
                </p>
                <p>
                  We’ve been made aware of <b>fraudulent activity using the name of our ministry and Pastor Meikle</b>.
                </p>

                <ul>
                  <li>
                    ❗️ Please be <b>extra vigilant</b>.
                  </li>
                  <li>❌ If an offer seems too good to be true, it likely is.</li>
                  <li>
                    🔒 Do <b>not</b> share personal or financial info with unknown or unverified parties.
                  </li>
                  <li>
                    📞 Report anything suspicious to the <b>authorities immediately</b>.
                  </li>
                </ul>

                <p>
                  Scams are on the rise, and <b>no one is immune</b>. Stay alert. Stay safe.
                </p>
                <p>
                  <strong>#RhemaOnline #ScamAlert #ProtectYourself #CommunitySafety</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export const ModalContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: left;
  height: 100%;
  /* overflow-y: initial !important; */
  .modal-dialog {
    background: #fff;
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    margin: auto;
    height: 100%;

    @media (min-width: 576px) {
      max-width: 50vw;
    }
  }
  .modal-content {
    height: 100%;
  }
  .modal-header {
    padding: 1.5rem 2.5rem;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.2);
    .closeBtn {
      position: absolute;
      top: -0.25rem;
      right: 0.125rem;
      font-size: 2rem;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .modal-body {
    overflow-y: auto;
    padding: 1rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    h3 {
      /* color: var(--blue); */
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 40rem) {
    .modal-header {
      padding: 1.5rem;
    }
    h3 {
      line-height: 1.2;
    }
  }
`;

export default HomeModal;
