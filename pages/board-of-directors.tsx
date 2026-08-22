import Image from "next/image";
import Meta from "components/common/meta";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

// ─── Types ───────────────────────────────────────────────────────────────────

type BoardMember = {
  name: string;
  title: string;
  image: string;
  bio?: string;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const boardMembers: BoardMember[] = [
  {
    name: "Joan Miller",
    title: "Chairperson",
    image: "/img/leaders/Amanda-Lovell-sm.jpg",
    bio:
      "Joan Miller serves as the Chairperson of the Board of Directors. She brings decades of experience in organizational leadership and governance, guiding Rhema Christian Ministries with wisdom and integrity.",
  },
  {
    name: "Patoucha Giguere-Sutherland",
    title: "Board Member",
    image: "/img/leaders/Patrice-Wilson-sm.jpg",
    bio:
      "Patoucha Giguere-Sutherland is a dedicated Board Member who contributes her expertise in community development and strategic planning to advance the ministry's mission.",
  },
  {
    name: "Giselle Contaste",
    title: "Board Member",
    image: "/img/leaders/Ephraim-Chiyangwa-sm.jpg",
    bio:
      "Giselle Contaste serves as a Board Member, bringing a passion for ministry excellence and a strong background in administrative leadership to the organization.",
  },
  {
    name: "Sheronette McKenzie",
    title: "Board Member",
    image: "/img/leaders/Daniel-Eriazel-sm.jpg",
    bio:
      "Sheronette McKenzie is a committed Board Member who brings her experience in finance and operations to support the long-term sustainability of Rhema Christian Ministries.",
  },
];

const reportingMembers: BoardMember[] = [
  {
    name: "Orim M. Meikle",
    title: "Senior Pastor",
    image: "/img/leaders/Orim-M-Meikle.jpg",
    bio:
      "Pastor Orim M. Meikle is the Senior Pastor of Rhema Christian Ministries, providing spiritual leadership and vision for the entire congregation and ministry.",
  },
  {
    name: "Valentine Akuazaoku",
    title: "Associate Pastor",
    image: "/img/leaders/Charles-Isiuwe-sm.jpg",
    bio:
      "Pastor Valentine Akuazaoku serves as Associate Pastor, working closely with the Senior Pastor to shepherd the congregation and lead various ministry departments.",
  },
  {
    name: "Akiwale Thompson",
    title: "Executive Director",
    image: "/img/leaders/Daniel-Eriazel-sm.jpg",
    bio:
      "Akiwale Thompson serves as Executive Director, overseeing the day-to-day operations of Rhema Christian Ministries and ensuring organizational effectiveness.",
  },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function BoardOfDirectors() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(
    null,
  );

  return (
    <>
      <Meta title="Board of Directors" ogImage="/img/leadership-img.webp" />
      {/* ── Hero Banner ── */}
      <HeroBanner>
        <h1>Board of Directors</h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Photos pinned to bottom of banner, overflowing below */}
        <PhotosRow>
          {boardMembers.map((m) => (
            <PhotoPin key={m.name}>
              <button
                className="img-btn"
                onClick={() => setSelectedMember(m)}
                aria-label={`View ${m.name}`}
              >
                <div className="circle">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={152}
                    height={152}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </button>
            </PhotoPin>
          ))}
        </PhotosRow>
      </HeroBanner>

      {/* ── Mobile-only member cards (2-col grid, no overlap effect) ── */}
      <MobileMembersGrid>
        {boardMembers.map((m) => (
          <MobileMemberCard key={m.name}>
            <button
              className="img-btn"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              onClick={() => setSelectedMember(m)}
              aria-label={`View ${m.name}`}
            >
              <div className="m-circle">
                <Image
                  src={m.image}
                  alt={m.name}
                  width={88}
                  height={88}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </button>
            <h3>{m.name}</h3>
            <p className="role">-{m.title}-</p>
            <button className="read-more" onClick={() => setSelectedMember(m)}>
              Read more
            </button>
          </MobileMemberCard>
        ))}
      </MobileMembersGrid>

      <PageShell>
        <ContentColumn>
          {/* ── Member text info (below banner, on grey) ── */}
          <MemberInfoRow>
            {boardMembers.map((m) => (
              <MemberInfo key={m.name}>
                <h3>{m.name}</h3>
                <p className="role">-{m.title}-</p>
                <p className="excerpt">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
                <button
                  className="read-more"
                  onClick={() => setSelectedMember(m)}
                >
                  Read more
                </button>
              </MemberInfo>
            ))}
          </MemberInfoRow>

          {/* ── Reporting Section ── */}
          <ReportingBox>
            <h2>Reporting To The Board</h2>
            <ReportingGrid>
              {reportingMembers.map((m) => (
                <ReportingCard
                  key={m.name}
                  onClick={() => setSelectedMember(m)}
                >
                  <div className="rcard-img">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={110}
                      height={110}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <h3>{m.name}</h3>
                  <p className="role">{m.title}</p>
                </ReportingCard>
              ))}
            </ReportingGrid>
          </ReportingBox>
        </ContentColumn>
      </PageShell>

      {/* ── Bio Modal ── */}
      <AnimatePresence>
        {selectedMember && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="modal-close-btn"
                className="close-btn"
                onClick={() => setSelectedMember(null)}
                aria-label="Close"
              >
                <IoClose />
              </button>
              <div className="modal-inner">
                <div className="modal-photo">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    width={200}
                    height={200}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="modal-text">
                  <h2>{selectedMember.name}</h2>
                  <p className="role-tag">{selectedMember.title}</p>
                  <hr className="divider" />
                  <p className="bio">{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Styled Components ────────────────────────────────────────────────────────

/** Outer shell — light grey page background */
const PageShell = styled.div`
  min-height: 100vh;
  padding: 2.5rem 1rem 5rem;

  @media (max-width: 767px) {
    padding: 0 0 3rem;
  }
`;

/** Centered column matching Canva reference proportions */
const ContentColumn = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`;

/** Blue banner with building background image */
const HeroBanner = styled.section`
  position: relative;
  background: linear-gradient(
      160deg,
      rgba(8, 32, 90, 0.88) 0%,
      rgba(18, 75, 170, 0.84) 100%
    ),
    url("/img/leadership-img.webp") center / cover no-repeat;
  border-radius: 6px 6px 0 0;
  padding: 5rem 3rem 5.5rem;
  text-align: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    margin: 0 0 1.25rem;
    padding: 0;
    letter-spacing: -0.01em;
  }

  .hero-desc {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    line-height: 1.75;
    margin: 0 auto;
    max-width: 640px;
  }

  /* On mobile: shorter banner, no bottom overflow needed */
  @media (max-width: 767px) {
    height: auto;
    padding: 2.5rem 1.25rem 2rem;
    border-radius: 0;

    h1 { font-size: 1.75rem; }
    .hero-desc { font-size: 0.9rem; }
  }
`;

/**
 * Row of circular photos pinned absolutely to the bottom of the banner
 * so they overlap into the grey area below — exactly half-in, half-out.
 * On mobile: hidden (photos are shown inside MobileMemberCards instead)
 */
const PhotosRow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* translateY(50%) moves photos exactly half their height below the banner edge */
  transform: translateY(50%);
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 0 1.5rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

const PhotoPin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
  }

  .circle {
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #a8c8f5;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);
    background: #c8daf5;
    transition: transform 0.22s ease, box-shadow 0.22s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
    }
  }
`;

/** Grey band below banner containing name/role/text for each member.
 *  Desktop: flex row (text aligns with overlapping photos above).
 *  Mobile: hidden — replaced by MobileMembersGrid below.
 */
const MemberInfoRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  /*
   * Top padding = half the photo height (11rem / 2 = 5.5rem) + breathing room
   */
  padding: 7rem 2rem 3rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

/**
 * Mobile-only grid: replaces the desktop photo-overlap + info-row combination.
 * Each card shows a circular photo + name/role/excerpt stacked vertically,
 * displayed in a 2-column grid.
 */
const MobileMembersGrid = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    padding: 1.5rem 1rem 2rem;
    background: #eef0f3;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const MobileMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  padding: 1.25rem 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .m-circle {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #a8c8f5;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.14);
    background: #c8daf5;
    margin-bottom: 0.75rem;
    flex-shrink: 0;
  }

  h3 {
    font-size: 0.82rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 0.2rem;
    padding: 0;
  }

  .role {
    font-size: 0.72rem;
    color: #888;
    margin: 0 0 0.4rem;
  }

  .read-more {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: #1a5cc8;
    text-decoration: underline;
    cursor: pointer;
    font-family: inherit;
  }
`;

const MemberInfo = styled.div`
  flex: 1;
  min-width: 0;
  text-align: center;
  padding: 0 1rem;
  max-width: 230px;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 0.35rem;
    padding: 0;
  }

  .role {
    font-size: 0.875rem;
    color: #888;
    margin: 0 0 0.6rem;
  }

  .excerpt {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.65;
    margin: 0 0 0.5rem;
  }

  .read-more {
    background: none;
    border: none;
    padding: 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #1a5cc8;
    text-decoration: underline;
    cursor: pointer;
    font-family: inherit;
    &:hover {
      color: #0d3a90;
    }
  }
`;

/** Grey rounded box for Reporting section */
const ReportingBox = styled.section`
  background: rgb(247, 247, 247);
  border-radius: 0 0 6px 6px;
  padding: 2.5rem 2rem 2.5rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 2rem;
    padding: 0;
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    border-radius: 0;
    padding: 2rem 1rem 2.5rem;

    h2 { font-size: 1.2rem; margin-bottom: 1.25rem; }
  }
`;

const ReportingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`;

const ReportingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  padding: 1.5rem 1.25rem 1.25rem;
  width: 11rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
  }

  .rcard-img {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    background: #d0ddf5;
    flex-shrink: 0;
  }

  h3 {
    font-size: 0.9375rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 0.25rem;
    padding: 0;
  }

  .role {
    font-size: 0.8125rem;
    color: #999;
    margin: 0;
  }

  @media (max-width: 767px) {
    width: 8.5rem;
    padding: 1rem 0.75rem;

    .rcard-img {
      width: 5.5rem;
      height: 5.5rem;
      margin-bottom: 0.7rem;
    }

    h3 { font-size: 0.8rem; }
    .role { font-size: 0.72rem; }
  }
`;

/** Modal overlay */
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  .modal-card {
    background: #fff;
    border-radius: 8px;
    max-width: 560px;
    width: 100%;
    position: relative;
    padding: 2.5rem;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
  }

  .close-btn {
    position: absolute;
    top: 0.85rem;
    right: 0.85rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background 0.18s, color 0.18s;
    &:hover {
      background: #f0f0f0;
      color: #111;
    }
  }

  .modal-inner {
    display: flex;
    gap: 1.75rem;
    align-items: flex-start;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .modal-photo {
    flex-shrink: 0;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #1a5cc8;
  }

  .modal-text {
    flex: 1;

    h2 {
      color: #1a5cc8;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 0 0.2rem;
      padding: 0;
    }

    .role-tag {
      color: #aaa;
      font-size: 0.85rem;
      margin: 0 0 0.75rem;
    }

    hr.divider {
      border: none;
      border-top: 2px solid #1a5cc8;
      width: 2.5rem;
      margin: 0 0 1rem 0;
    }

    .bio {
      color: #555;
      font-size: 0.9rem;
      line-height: 1.75;
      margin: 0;
    }
  }
`;
