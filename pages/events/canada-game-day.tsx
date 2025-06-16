import { Button, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";
import { EventPageContainer } from "./2025-walk-a-thon";

export default function Index() {
  const pageTitle = "";
  const pageImage =
    "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/canada-game-day-banner-scaled.jpg";

  return (
    <>
      <Meta title={`${pageTitle} - Canada Game Day`} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title=""
        height="26rem"
        mbHeight="22rem"
        maxWidth={def.wrapper.width}
        borderRadius="0.5rem"
        isUnderMenu={false}
      />

      <StyledContainer>
        <div className="wrapper main">
          <div className="content">
            <div className="date">July 01, 2025</div>
            <h2 id="title">“Canada Day” Community Game Day 2025</h2>
            <br />
            <p>Looking for something fun to do this Canada Day?</p>

            <p>Get ready for a day of faith, fun, and friendly competition at Rhema’s Family Game Day on July 1st!</p>
            <p>
              Become a Kingdom Citizen and enjoy a day filled with fellowship and fun at Rhema Christian Ministries’
              Game Day! This base tier includes entry, food, drink, and unlimited access to casual games like Connect 4,
              Luddie, Jumbo Jenga, Checkers, and the Bouncy Castle. Parking is free with ticket purchase!
            </p>

            <p>
              You and your family can choose from many activities: <br />
              Chess, Domino, 3-on-3 basketball, Bingo, & “Praise, Sip and Paint” session. Snacks, food, drinks, FREE
              Bouncy Castle, board games & other activities!
            </p>

            <p>Whether you're coming to cheer, play or praise, there’s a tier just for you!</p>
          </div>
          <div className="side flex-column">
            <div className="goal">
              <h4>Register before Jun 25</h4>
              <p>This fundraising initiative is organized by Rhema Christian Ministries.</p>
              <div className="button-wrapper flex-column">
                <Button
                  href="https://rhemachristianministries.churchcenter.com/registrations/events/2971266"
                  target="_blank"
                >
                  Register Now
                </Button>
              </div>
            </div>
            <div className="date-time">
              <div className="date flex-column">
                <h4>Date</h4>
                July <br /> <h3>01</h3>
              </div>
              <div className="time flex-column">
                <h4>Time</h4>
                <span>
                  from <b>01:00pm</b> <br /> to <b>07:0 0pm</b>
                </span>
              </div>
            </div>
            <div className="location">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.759233186875!2d-79.33397399999999!3d33.7535966!2m3!1f0!2f0!3f0!3m2!1i1023!2i768!4f13.1!3m3!1m2!1s0x882b32799efeee95%3A0x712d6f43fcb5fc3a!2s4169%20Bathurst%20St%2C%20Toronto%2C%20ON%20M3H%202R6!5e0!3m2!1sen!2sca!4v1749152507868!5m2!1sen!2sca"
                width="320"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="address">
                <ImgWrapper>
                  <Image
                    src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/06/location-icon.png"
                    alt="location icon"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </ImgWrapper>
                Crawford Adventist Academy <br /> 531 Finch Ave W, Toronto, ON M2R 3X2
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper tiers">
          <h3>Ticket Tiers:</h3>

          <div className="tier">
            <b>TIER 1 ・ KINGDOM CITIZEN – $45 </b>
            <br />
            Includes: <br />
            <ul>
              <li>Unlimited play in the Game Zone</li>
              <li>Delicious food & drinks</li>
              <li>Free parking</li>
            </ul>
            <p>
              Celebrate a full day of fun and fellowship with unlimited access to the game zone:{" "}
              <b>Jumbo Connect 4, Jumbo Jenga, Checkers, Louddie,</b> and a <b>Bouncy Castle</b> for the kids!
            </p>
          </div>

          <div className="tier">
            <b>TIER 2 ・ DISCIPLE – $70</b>
            <br />
            Includes: <br />
            <ul>
              <li>
                Entry into the <b>Chess Tournament</b>
              </li>
              <li>Food, drinks & game zone access</li>
            </ul>
            <p>
              Perfect for thinkers, strategists, and anyone ready to say “Checkmate!” in a friendly faith-filled
              competition.
            </p>
          </div>

          <div className="tier">
            <b>TIER 3 ・ SERVANT – $70</b>
            <br />
            Includes: <br />
            <ul>
              <li>
                Entry into the <b>Domino Tournament</b>
              </li>
              <li>Food, drinks & game zone access</li>
            </ul>
            <p>This one’s for the domino lovers. Come test your skills in a game that always brings the energy!</p>
          </div>

          <div className="tier">
            <b>TIER 4 ・ PRIEST – $100</b>
            <br />
            Includes: <br />
            <ul>
              <li>
                <b>Praise, Sip & Paint</b> experience (including canva, paint, brush,...)
              </li>
              <li>
                Access to our <b>Mocktail Bar</b>
              </li>
            </ul>
            Choose your creative path for <b>“Praise, Sip & Paint”</b> experience: <br />
            <ul>
              <li>Option 1: Paint-by-Numbers Selfie (submit photo by June 10th)</li>
              <li>Option 2: Biblical Paint-by-Numbers Collection</li>
              <li>Option 3: Freestyle on a blank canvas</li>
            </ul>
            <p>Let the Spirit lead your brush in this guided, expressive session of art and worship.</p>
          </div>

          <div className="tier">
            <b>TIER 5 ・ KING’S CHAMPION (INDIVIDUAL ENTRY) – $80</b>
            <br />
            Includes: <br />
            <ul>
              <li>Entry into 3-on-3 Basketball Tournament</li>
              <li>Official team t-shirt</li>
              <li>Food, drinks & game zone access</li>
            </ul>
            <p>For the serious baller looking to glorify God on the court and have a blast doing it!</p>
          </div>

          <div className="tier">
            <b>TIER 6 ・ KING’S CHAMPIONS (TEAM OF 3) – $100</b>
            <br />
            Includes: <br />
            <ul>
              <li>
                Team entry into <b>3-on-3 Basketball Tournament</b>
              </li>
              <li>Official team t-shirts for all players</li>
              <li>(Not including food, drink or game zone access)</li>
            </ul>
            <p>Bring your squad, bring the heat, and battle it out for the crown!</p>
          </div>
        </div>
        <div className="wrapper">
          <p>
            <b>
              <u>Note</u>
            </b>
            : This fundraising initiative is organized by Rhema Christian Ministries. All funds raised will go toward
            Rhema’s church building fund. For more info, visit{" "}
            <a href="/fund-raising">www.rhemaonline.ca/fund-raising</a>
          </p>

          <p>
            As we seek to fulfill our God-given mandate to change and affect lives, we invite you to support and
            participate in our fundraising initiative. We envision a space that supports our ministry work, nurtures
            families, provides resources for children and youth to thrive, ensures older adults are cared for with
            dignity, and sustains initiatives like our weekly food bank and Christmas toy drive.
          </p>
          <p>
            Your donations will enable us to secure a space that reflects the heart of God through Rhema Christian
            Ministries: building community, offering hope, and advancing God’s Kingdom.
          </p>
        </div>
      </StyledContainer>
    </>
  );
}
const StyledContainer = styled(EventPageContainer)`
  .wrapper {
    margin-bottom: 3rem;
    &:not(:last-child) {
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--text-color);
    }
  }

  .tiers {
    h3 {
      margin-bottom: 1.5rem;
    }
    .tier {
      margin-bottom: 3rem;
    }
  }
`;
