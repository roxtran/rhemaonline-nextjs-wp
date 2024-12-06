import Image from "next/image";
import Link from "next/link";
import paths from "paths";
import { useState } from "react";
import styled from "styled-components";
import BibleModal from "./Modals/BibleModal";

export default function Footer() {
  const [openBible, setOpenBible] = useState(false);

  return (
    <>
      <BibleModal openBible={openBible} setOpenBible={setOpenBible} />
      <StyledFooter>
        <div className="links">
          <div className="list">
            <h4>Home</h4>
            <ul>
              <li>
                <Link href={paths.about}>About Us</Link>
              </li>
              {/* <li>
                <Link href={paths.leadership}>Leadership</Link>
              </li> */}
              <li>
                <Link href={paths.beliefs}>Beliefs</Link>
              </li>
              <li>
                <Link href={paths.ministries}>Family Ministries</Link>
              </li>
              <li>
                <Link href={paths.location}>Location</Link>
              </li>
              <li>
                <Link href={paths.grow}>Grow</Link>
              </li>
              <li>
                <Link href={paths.RhemaCulture}>Rhema Culture</Link>
              </li>
              <li>
                <Link href={paths.virtualHomeGroups}>Virtual Home Groups</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Support</h4>
            <ul>
              <li>
                <Link href={paths.connect}>The Care Centre Services</Link>
              </li>
              <li>
                <Link href={paths.foodbank}>Foodbank</Link>
              </li>
              <li>
                <Link href={paths.connect + "#become-a-member"}>Become A Member</Link>
              </li>
              {/* <li>
              <Link href={paths.getConnected + '#groups'}>
                <a>Groups</a>
              </Link>
            </li> */}
            </ul>
            <ul>
              <h4>Finance</h4>
              <li>
                <Link href={paths.giving}>Give</Link>
              </li>
              <li>
                <a
                  href="http://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2023/01/RCM-2020-Audited-Financial-Statements.pdf"
                  target="_blank"
                >
                  2020 Financial Statement
                </a>
              </li>
              <li>
                <a
                  href="http://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2023/01/Rhema-Christian-Ministries-Canada-Inc.-2021-FSs.pdf"
                  target="_blank"
                >
                  2021 Financial Statement
                </a>
              </li>
              <li>
                <a
                  href="http://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2023/06/RCM-Final-Signed-FSs-2022.pdf"
                  target="_blank"
                >
                  2022 Financial Statement
                </a>
              </li>
              <li>
                <a
                  href="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2024/09/Rhema-Christian-Ministries-Inc.-FS-2023-Signed2.pdf"
                  target="_blank"
                >
                  2023 Financial Statement
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href={paths.liveStream}>Live Stream</Link>
              </li>
              {/* <li>
                <Link href={paths.facilityBookings}>Facility Bookings</Link>
              </li> */}
              <li>
                <Link href={paths.sermonNotes}>Sermon Notes</Link>
              </li>
              <li>
                <Link href={paths.bibleStudies}>Bible Study Videos</Link>
              </li>
              <li>
                <Link href={paths.bibleStudyLessons}>Bible Studies</Link>
              </li>
              <li>
                <a href={paths.memberLogin} target="_blank">
                  Member Login
                </a>
              </li>
              <li>
                <Link href={paths.legalTerms}>Legal Terms</Link>
              </li>
              <li>
                <Link href={paths.privacyPolicy}>Privacy Policy</Link>
              </li>
              <li>
                <a
                  href="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2024/07/RHEMA-CHRISTIAN-MINISTRIES-OF-CANADA-INC_CONSTITUTION_FINAL_20240130-1.pdf"
                  target="_blank"
                >
                  Constitution
                </a>
              </li>
              <li>
                <a
                  href="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2024/07/RCM-of-Canada-Inc_By-Law_Final-20240718.pdf"
                  target="_blank"
                >
                  By-laws
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SocialIconsWrapper>
          <a
            title="Bible"
            onClick={() => {
              setOpenBible(true);
            }}
          >
            <div className="icon">
              <Image
                src="/img/social/bible-icon.svg"
                alt="bible icon"
                width={30}
                height={30}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <a title="Member Login" href={paths.memberLogin} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/groups-icon.svg"
                alt="group icon"
                width={30}
                height={30}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <Link title="Giving" href={paths.giving} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/giving-icon.svg"
                alt="giving icon"
                width={35}
                height={35}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Link>
          <a title="Instagram" href={paths.instagramAccount} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/instagram-icon.svg"
                alt="instagram icon"
                width={35}
                height={35}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <a title="Facebook" href={paths.facebookPage} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/facebook-icon.svg"
                alt="facebook icon"
                width={30}
                height={30}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <a title="Twitter" href={paths.twitterAccount} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/twitter-icon.svg"
                alt="twitter icon"
                width={35}
                height={35}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <a title="YouTube" href={paths.youtubeChannel} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/youtube-icon.svg"
                alt="youtube icon"
                width={35}
                height={35}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
          <a title="Office 365" href={paths.office365Site} target="_blank">
            <div className="icon">
              <Image
                src="/img/social/office-icon.svg"
                alt="office icon"
                width={35}
                height={35}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </a>
        </SocialIconsWrapper>
        <div className="copyright">© {new Date().getFullYear()} Rhema Canada.</div>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  background: var(--light-grey-bg);
  height: 100%;
  padding: 2% 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .links {
    display: flex;
    justify-content: space-around;
    h4 {
      margin-bottom: 0.75rem;
      margin-left: -1rem;
    }
    ul {
      margin-bottom: 1.5rem;
      padding-left: 0;
    }
    li {
      margin: 0.25rem 0;
    }
  }

  .copyright {
    text-align: center;
  }

  @media screen and (max-width: 40rem) {
    height: 100%;
    padding: 3rem;
    .links {
      flex-direction: column;
      margin-bottom: 0;
    }
    ul {
      margin-bottom: 2rem;
    }
  }
`;

const SocialIconsWrapper = styled.div`
  margin: 1.25rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .icon {
    cursor: pointer;
    margin: 0.75rem;
    &:hover {
      transform: translateY(-0.3125rem);
    }
  }
`;
