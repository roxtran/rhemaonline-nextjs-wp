import { Button, ImgWrapper, def } from "styles/GlobalStyle";

import { EventPageContainer } from "./2025-walk-a-thon";
import HeadLine from "components/common/HeadLine";
import Image from "next/image";
import Meta from "components/common/meta";
import styled from "styled-components";
import { useEffect } from "react";

export default function Index() {
  const pageTitle = "2025 New Year’s Eve Gala - A Night of Elegance";
  const pageImage = "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/10/new-year-celebration.png";

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".cards .card")) as HTMLElement[];
    const handlers = new Map<HTMLElement, EventListener>();
    cards.forEach((card) => {
      const handler = () => card.classList.toggle("is-flipped");
      handlers.set(card, handler);
      card.addEventListener("click", handler);
      card.style.cursor = "pointer";
    });
    return () => {
      handlers.forEach((handler, card) => card.removeEventListener("click", handler));
    };
  }, []);

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title=""
        height="26rem"
        mbHeight="22rem"
        maxWidth={def.wrapper.width}
        borderRadius="0.5rem"
        isUnderMenu={false}
      />

      <Container>
        <div className="wrapper main">
          <div className="content">
            <div className="date">December 31, 2025</div>
            <h2 id="title">2025 New Year’s Eve Gala - A Night of Elegance</h2>
            <br />
            <p>
              Join us for an unforgettable evening of elegance and celebration as we usher in the{" "}
              <b>New Year at Rhema’s 2025 Year-End Gala</b> on New Year’s Eve.
            </p>
            The evening will feature:
            <ul>
              <li>A formal three-course dinner served at 8:00 pm</li>
              <li>Music and dancing</li>
              <li>A silent auction and door prize</li>
            </ul>
            <p>Tickets may be purchased in-person or online.</p>
            <p>
              We warmly welcome you, along with your family and friends, to share in this festive occasion as we bid
              farewell to 2025 and joyfully step into 2026 with anticipation and celebration.
            </p>
            <p>
              For more info, please contact us at <a href="mailto:info@rhemaonline.ca">info@rhemaonline.ca</a> or call{" "}
              <a href="tel:+14164961794">416-496-1794</a>.
            </p>
          </div>
          <div className="side flex-column">
            <div className="goal">
              <h3>Registration is open</h3>
              <p>This fundraising initiative is organized by Rhema Christian Ministries.</p>
              <div className="button-wrapper flex-column">
                <Button
                  href="https://rhemachristianministries.churchcenter.com/registrations/events/3110237"
                  target="_blank"
                >
                  Register Now
                </Button>
              </div>
            </div>
            <div className="date-time">
              <div className="date flex-column">
                <h4>Date</h4>
                December <br /> <h3>31</h3>
              </div>
              <div className="time flex-column">
                <h4>Time</h4>
                <span>
                  from <b>07:00pm</b> <br /> to <b>01:00am</b>
                </span>
              </div>
            </div>
            <div className="location">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.377912036789!2d-79.61233419999999!3d43.744248500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b04f34f9143%3A0x414f5c96717d6fd!2s1811%20Albion%20Rd%2C%20Etobicoke%2C%20ON%20M9W%205W4!5e0!3m2!1sen!2sca!4v1761872458377!5m2!1sen!2sca"
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
                Edessa Banquet Hall and Convention Centre
                <br /> 1811 Albion Rd, Toronto, ON M9W 5W4
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper note">
          <div className="line"></div>
          <p>
            <b>
              <u>Note</u>:
            </b>{" "}
            This fundraising initiative is organized by Rhema Christian Ministries. All funds raised will go toward
            Rhema’s church building fund. For more info, visit{" "}
            <a href="https://www.rhemaonline.ca/fund-raising">www.rhemaonline.ca/fund-raising</a>
          </p>
          <p>
            Your donations will enable us to secure a space that reflects the heart of God through Rhema Christian
            Ministries: building community, offering hope, and advancing God’s Kingdom.
          </p>
        </div>
        <div className="wrapper thank-you">
          <div className="line"></div>
          <h2>Thank you to our generous sponsors</h2>
          <h5>We are deeply grateful for the support of our partners who make this event possible</h5>
          <br />

          <p>DIAMOND SPONSORS</p>
          <div className="cards diamond">
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
          </div>

          <div className="line"></div>
          <p>GOLD SPONSORS</p>
          <div className="cards gold">
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
          </div>

          <div className="line"></div>
          <p>SILVER SPONSORS</p>
          <div className="cards silver">
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Giguere_2025.jpg" alt="" />
              <div className="text">some company name</div>
            </div>
            <div className="card">
              <img
                src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2025/11/Ex-Stream-Filtration.jpg"
                alt=""
              />
              <div className="text">some company name</div>
            </div>
          </div>

          <div className="line"></div>
          <p>BRONZE SPONSORS</p>
          <div className="list bronze">
            <div className="item">Company name 1</div>
            <div className="item">Company name 2</div>
            <div className="item">Company name 3</div>
            <div className="item">Company name 4</div>
            <div className="item">Company name 5</div>
            <div className="item">Company name 6</div>
            <div className="item">Company name 7</div>
            <div className="item">Company name 8</div>
            <div className="item">Company name 9</div>
          </div>

          <p className="become-sponsor">
            Want to be part of something special?
            <br /> Register to{" "}
            <a href="https://forms.office.com/pages/responsepage.aspx?id=38sCWqIoNUWkwbMz57xF4rMr3Gu5aW9JodUKmZ5kU6hUOU9VMk9VRjQ5ODE0SlY3SUpNR0xJVVIwQS4u&origin=lprLink&route=shorturlhttp://">
              become our sponsor{" "}
            </a>
          </p>
        </div>
      </Container>
    </>
  );
}

export const Container = styled(EventPageContainer)`
  .line {
    border-top: 0.0625rem solid #191919;
    width: 100%;
    margin-bottom: 3rem;
  }
  .thank-you {
    text-align: center;

    .line:not(:first-child) {
      width: 80%;
      margin: 4rem auto 3rem;
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Flip card styles */
  .cards .card {
    position: relative;
    width: 16rem;
    height: 9rem;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    background: #fff;
  }

  .cards.gold .card {
    width: 15rem;
    height: 8rem;
  }
  .cards.silver .card {
    width: 14rem;
    height: 7rem;
  }

  /* rotate the whole card when flipped */
  .cards .card.is-flipped {
    transform: rotateY(180deg);
    img {
      display: none;
    }
    .text {
      display: block;
    }
  }

  /* faces */
  .cards .card img,
  .cards .card .text {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: block;
    object-fit: contain;
  }

  /* back face: the text. pre-rotated so it becomes visible when parent rotates */
  .cards .card .text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transform: rotateY(180deg);
    background: #ffffff;
    color: #111;
    font-weight: 600;
    text-align: center;
  }

  /* optional: improve front face look */
  .cards .card img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* small-screen tweak */
  @media (max-width: 600px) {
    .cards .card {
      width: 9rem;
      height: 6rem;
    }
  }

  .list.bronze {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .item {
      width: 33.33%;
    }
  }

  .become-sponsor {
    margin-top: 3rem;
    font-size: 1.35rem;
  }
`;
