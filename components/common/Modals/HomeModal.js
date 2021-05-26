import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'

const BibleModal = ({ openModal, setOpenModal }) => {
  if (!openModal) return null
  return (
    <ModalContainer>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <a onClick={() => setOpenModal(false)} className='closeBtn'>
              <IoClose />
            </a>
            <h3>COVID-19: A RESPONSE TO THE QUESTION OF VACCINATION</h3>
          </div>
          <div className='modal-body'>
            <p>
              With the arrival of the various COVID-19 vaccines, well-meaning
              individuals are searching for answers. Should I take the vaccine
              when it is my turn? Will there be side effects? Will I be forced
              to take the vaccine? In view of these concerns and with the rise
              of vaccine hesitancy, I offer a response to this issue. Before
              doing so, however, it is my duty to clarify the position of Rhema
              Christian Ministries concerning vaccines. It is our position that
              choices concerning vaccination should be left up to the individual
              person or family. This is not a pastoral, theological, or
              spiritual matter. It is a private matter and not a public one. We
              further believe that this decision is one that should be
              undertaken prayerfully, in consultation with one’s family
              physician, and further supplemented by the advice of our various
              medical health officers.
            </p>
            <p>
              Regarding the debates concerning pro-vaccination and
              anti-vaccination, I counsel against the temptation to embrace a
              conspiratorial approach to this subject. As with other subjects,
              our world is filled with many conspiracy theories; however, as
              Christians, we must be promoters of a better world and not
              advancers of conspiracy theories. Let us guard against the
              temptation to put the devil in everything. He must not be afforded
              the honor of omnipresence. He is not God and should not be
              wickedly deified as such, nor should his imprint be embossed on
              everything in this world. Remember, “The earth is the Lord’s, and
              the fulness thereof…” (Ps. 24:1). God is still in charge and we
              still have the authority to make sound choices.
            </p>
            <p>
              Let us also remember that faith and science are not at war with
              each other. From the Latin “scientia” meaning knowledge, science
              or knowledge is first and foremost that which comes from God the
              omniscient One. We must be careful not to pit our faith against
              the many advancements made in the realm of the sciences,
              especially the medical sciences. Knowledge is never to be viewed
              as bad; rather, it is the way in which knowledge is appropriated
              that determines its ethical force. We have not fought the many
              advancements made in technology. We are all beneficiaries of the
              latest in smartphones, electronic devices, and media platforms.
              Neither have we not fought the advancements made in our current
              modes of transportation. From the latest automobiles to high speed
              and light rail travel, as well as supersonic air travel,
              advancements have made for a better and more convenient world.
            </p>
            <p>
              Similarly, we should celebrate breakthroughs in the world of
              medical sciences. From better healthcare to safer childbearing
              practices, to the curing of diseases, we have been the recipients
              of prolonged lifespans and a better quality of life. For this we
              should say, “to God be the glory, great things He has done.” These
              advancements are the result of the many gifts that God has given
              to our world and we must avoid neanderthal views when it comes to
              global human advancement. God’s gifts are for our betterment and
              for His glory, thus “Every good gift and every perfect gift is
              from above and comes down from the Father of lights…” (James
              1:17).
            </p>
            <p>
              As a strategic part of a social impact organization with a purpose
              to make this world a better place, Rhema Christian Ministries does
              not believe it is appropriate for us to contradict the wishes of
              our federal, provincial, or municipal governments. We see
              ourselves as partners with our government in the quest to make
              this world a better place. Scripture reminds us to, “Let every
              soul be subject unto the higher powers…” (Rom. 13:1). As
              professing Christians, it is godly wisdom on our part to position
              ourselves as those who add value to society, never subtracting
              from its progress, and deferring to the Scripture only when the
              decrees of men run counter to the Divine will. In cases like
              these, we are compelled “…to obey God rather than men,” (Acts
              5:29); however, this is not the case when it comes to the vaccines
              that are being rolled out. This moment is a choice, no different
              from opting for the annual flu shot.
            </p>
            <p>
              I want to encourage us not to complicate this matter, nor to be
              found on the wrong side of history. We all long for the return of
              a sense of “normalcy” to our relationships, society, communities,
              and world. There is a yearning for the fellowship that comes with
              person-to-person interactions, the touch of loved ones and
              friends, the gatherings of the local church body in worship, the
              sitting and eating with close friends, and the reopening of our
              economies. To get there, we must be willing to do all we can to
              ensure a safer and healthier society. Yes, we commit this moment
              to prayer and to faith, but also to good works.
            </p>
            <p>
              When it comes to vaccine choices, I will not tell you what to do.
              That will be a choice left up to you. I have, however, asked our
              team to provide you with information links for your personal
              review as you make informed choices about your health, the health
              of your family, the health of your community, and ultimately the
              health of our world. I wish you God’s Shalom during this season,
              with nothing missing and nothing broken in your lives. Our best
              days are before us, in Jesus’ name.
            </p>
            <p>With love and warm regards,</p>
            <p>
              Orim M. Meikle
              <br />
              Senior Pastor
            </p>
            <div className='line'></div>
            <p>
              <b>
                For ease of access to government links on vaccines, click on the
                below:
              </b>
            </p>
            <ul>
              <li>
                <a
                  href='https://www.who.int/news-room/q-a-detail/vaccines-and-immunization-what-is-vaccination?adgroupsurvey=%7Badgroupsurvey%7D&gclid=CjwKCAjwxuuCBhATEiwAIIIz0eAZm8wq4d_wNqK_yI5xfpl89_nYV3Q7R8Nx4EWZT6xf6O8J1e7AHRoCdngQAvD_BwE'
                  target='_blank'
                >
                  Vaccines and immunization: What is Vaccination?
                </a>
              </li>
              <li>
                <a
                  href='https://covid-19.ontario.ca/covid-19-vaccines-ontario?gclid=CjwKCAjwxuuCBhATEiwAIIIz0XvtSJiJ1Te9tikS3qXj8fIz85VzqVxqMkThEa8ibALSleQsbtsnyRoC798QAvD_BwE&gclsrc=aw.ds#covid-19-immunization-program'
                  target='_blank'
                >
                  COVID-19 vaccines for Ontario | COVID-19 (coronavirus) in
                  Ontario
                </a>
              </li>
            </ul>
            <p>
              <b>
                Below are the four (4) Vaccines approved for use in Canada. You
                can click on each to find out the specifics pertaining to it:
              </b>
            </p>
            <ul className='vaccines'>
              <li>
                <a
                  href='https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines/moderna.html'
                  target='_blank'
                >
                  Moderna
                </a>
              </li>
              <li>
                <a
                  href='https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines/pfizer-biontech.html'
                  target='_blank'
                >
                  Pfizer
                </a>
              </li>
              <li>
                <a
                  href='https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines/astrazeneca.html'
                  target='_blank'
                >
                  AstraZeneca
                </a>
              </li>
              <li>
                <a
                  href='https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines/janssen.html'
                  target='_blank'
                >
                  Johnson & Johnson
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  /* overflow-y: initial !important; */
  .modal-dialog {
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1100px;
    max-width: 90vw;
    height: 80vh;
    border-radius: 5px;
    overflow: hidden;
  }
  .modal-header {
    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .closeBtn {
      position: fixed;
      top: 0.1rem;
      right: 0.25rem;
      font-size: 32px;
      &:hover {
        transform: scale(1.2);
      }
    }
    h3 {
      color: var(--blue);
      margin-bottom: 0;
    }
  }
  .modal-body {
    height: 71vh;
    overflow-y: auto;
    padding: 1.5rem 2.5rem;
    .line {
      width: 100%;
      height: 1px;
      margin: 2rem 0;
      background: rgba(0, 0, 0, 0.2);
    }
    p {
      margin-bottom: 1rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
    ul {
      margin-left: 2rem;
      margin-bottom: 2rem;
    }
    .vaccines {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 1;
      }
    }
  }
  @media screen and (max-width: 640px) {
    .modal-dialog {
      height: 90vh;
    }
    .modal-header {
      padding: 1.5rem;
    }
    h3 {
      line-height: 1.2;
    }
    .modal-body {
      padding: 1.5rem;
      height: 75vh;
    }
    .vaccines {
      flex-direction: column;
    }
  }
`

export default BibleModal
