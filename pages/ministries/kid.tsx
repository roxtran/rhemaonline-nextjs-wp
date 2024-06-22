import { Button, Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Image from "next/image";
import Meta from "components/common/meta";
import styled from "styled-components";

const kid = () => {
  const pageTitle = "Kid's World";
  const pageImage = "/img/kid-img.jpg";

  return (
    <>
      <Meta title="Kid's Ministry - Rhema - Changing & Affecting Lives!" ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <KidContainer>
        <q className="desc">Our vision is to see Kid's grow in their love for God and for others.</q>
        <div className="items">
          <div className="item">
            <ImgWrapper>
              <Image
                src="/img/about-kid-world.jpg"
                alt="about kid world"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="content-wrapper">
              <div className="text-wrapper">
                <h2 style={{ color: "#799609" }}>About Kid's World</h2>
                <p>
                  Kid's World is a children’s ministry program designed to develop the spiritual and relational needs of
                  children ages 2 to 12 years. Here they will experience safe, age-appropriate environments where the
                  Bible is taught in a creative and relevant way. Our vision is to see Kid's grow in their love for God
                  and for others.
                </p>
                <p>
                  Kid's World operates in two formats, Children’s Church and Sunday School. These two formats are
                  rotated every week. All children are grouped according to the grade that they are in school. We are
                  closed on the 5th Sunday of the month – thus giving the children an opportunity to sit and enjoy the
                  Rhema Worship experience with their parents and families.
                </p>
                <div className="icons">
                  <a title="wecare@rhemaonline.ca" href="mailto:wecare@rhemaonline.ca" target="_blank">
                    <div className="icon">
                      <Image
                        src="/img/social/email-icon-blue.svg"
                        alt="email icon"
                        width={42}
                        height={42}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </a>
                  <a title="Facebook" href="https://www.facebook.com/groups/19841422285/about/" target="_blank">
                    <div className="icon">
                      <Image
                        src="/img/social/facebook-icon-blue.svg"
                        alt="facebook icon"
                        width={42}
                        height={42}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </a>
                  <a title="Twitter" href="https://twitter.com/rhemakidsworld" target="_blank">
                    <div className="icon">
                      <Image
                        src="/img/social/twitter-icon-blue.svg"
                        alt="twitter icon"
                        width={42}
                        height={42}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <ImgWrapper>
              <Image
                src="/img/kid-serve.jpg"
                alt="item"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="content-wrapper">
              <div className="text-wrapper">
                <h2 style={{ color: "#3F4CA3" }}>Serve!</h2>
                <p>
                  Jesus came to serve! Our prayer is that through Jesus’ example we can model to our children the
                  importance of serving together to meet the needs of our generation and the generations to come; that’s
                  changing and affecting lives. At Kid's World, we believe that it is important to develop relationships
                  with those you serve with as well as with the children that you are serving. For that reason, it is
                  vital to serve each week in the same service to grow these relationships. Please speak to one of our
                  Kid's World leaders to see how you can get involved. We look forward to seeing God minister through
                  you to impact children’s lives for eternity.
                </p>
                <div className="btn-wrapper">
                  <Button href="https://rhema.ccbchurch.com/goto/forms/57/responses/new">Ready to Serve?</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <ImgWrapper>
              <Image
                src="/img/children-church.jpg"
                alt="item"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="content-wrapper">
              <div className="text-wrapper">
                <h2 style={{ color: "#FA5F29" }}>Children's Church</h2>
                <p>
                  We are passionate about Kid's learning about Jesus in a way they understand. Our environments and
                  lesson materials are created based on the physical, mental and emotional needs of each child. Held on
                  the first and third Sunday of every month, Children’s Church Sundays will be the time when the
                  children learn through interactive learning such as arts and craft activities, games and weekly
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <ImgWrapper>
              <Image
                src="/img/kid.jpg"
                alt="item"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
            <div className="content-wrapper">
              <div className="text-wrapper">
                <h2 style={{ color: "#03438B" }}>Kid's World</h2>
                <p>
                  At Kid's World, we desire for every child to connect to Jesus and experience a saving relationship
                  with him. Strong, healthy, Godly relationships are vital! These services are held on the second and
                  fourth Sunday of every month, and children are in their grades in a close knit environment in the
                  classroom or reading area. As families commit to attending the same service each week, Kid's are
                  placed in an environment of familiar faces where relationships can grow!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="faq">
          <h2>FAQs</h2>
          <div className="accordion accordion-flush" id="kidFAQ">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What to expect on your first visit to Kids World
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#kidFAQ"
              >
                <div className="accordion-body">
                  <p>
                    Look for the signs that direct you to our Children’s Sanctuary. We will meet your family and check
                    your child into our database system. Once your family is checked in, one of our volunteers will be
                    happy to show you the age appropriate room we have created for your child.
                  </p>
                  <p>
                    We will ask for the following personal information: family member’s names, children’s names and
                    birth dates, family address, phone number, and any special instructions (allergies, special needs)
                    for your child.
                  </p>
                  <p>
                    You and your child will be given matching identification cards that are exclusive to your family and
                    your visit. Your child will need to wear the label portion of your matching identification cards
                    which bears a number that is matched to your portion during checkout at the end of the service.
                    During checkout, you will return to your child’s room and present your card to the teacher in order
                    for your child to be released back to you. On your way home, be sure to ask your child: “Did you
                    have fun?” and “What did you learn today?”
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What Should I Expect When I arrive at Kids World?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#kidFAQ"
              >
                <div className="accordion-body">
                  <p>
                    As you enter the Children’s Sanctuary, your first stop should be at one of our check in stations
                    where a friendly volunteer will check your child in for the service you are attending. Our stations
                    open 15 minutes prior to the start of each service. Station volunteers will need your child’s full
                    name in order for us to locate your family in our database system. You will receive a set of
                    stickers with an identification number for you and for your child. Your child will wear the sticker
                    with his or her name. Please hold on to your portion of the sticker until checkout at the end of the
                    service. You will need it to check your child out of Kids World. No child is released unless the
                    card with the matching number sticker is presented.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  A Special Note
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#kidFAQ"
              >
                <div className="accordion-body">
                  <p>
                    If for some reason your child were to need you during the service, your number would appear on the
                    screens in the main auditorium. We would ask that you exit the auditorium immediately and look for a
                    staff member who will direct you to your child’s room. If for some reason you were to lose your
                    identification card, ask to see one of our Kids World leaders.
                  </p>
                  <p>
                    Please be sure to ask any of our amazing volunteers or staff if you have questions about our
                    policies or procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </KidContainer>
    </>
  );
};

export const KidContainer = styled(Container)`
  padding-bottom: 0;
  .desc {
    max-width: ${def.wrapper.width};

    color: var(--blue);
    font-size: 2rem;
    font-style: italic;
    text-align: center;
  }
  .faq {
    max-width: ${def.wrapper.width};
    margin: 5rem 0;

    .accordion-header {
      padding: 0;
    }
  }
  .items {
    margin-top: 5rem;
    width: 100%;
    box-shadow: var(--shadow);
  }
  .item {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .icons {
      display: flex;
      margin-bottom: 2rem;
    }
    .icon {
      margin: 0.5rem;
      &:hover {
        transform: translateY(-0.3125rem);
      }
    }
  }
  .item:nth-child(even) {
    flex-direction: row-reverse;
  }
  ${ImgWrapper} {
    width: 100%;
    min-width: 20rem;
    height: 37.5rem;
    flex: 1;
    /* &:hover {
      box-shadow: 0 0 1.25rem 0 var(--mint);
    } */
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 25rem;
    .text-wrapper {
      width: 43.75rem;
      max-width: 90vw;
      padding: 2rem;
    }
    .btn-wrapper {
      margin-top: 2.5rem;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 64rem) {
    .content-wrapper {
      .text-wrapper {
        width: 25rem;
      }
    }
  }
  @media screen and (max-width: 48rem) {
    ${ImgWrapper} {
      height: 25rem;
    }
    .content-wrapper {
      .text-wrapper {
        width: 43.75rem;
        margin: 2rem 0;
      }
      h2 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
  }
`;

export default kid;
