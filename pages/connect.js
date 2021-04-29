import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Image from 'next/image'

export default function Connect() {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <HeadLine imgUrl='/img/connect-img.jpg' title='We Care' />
      <Container>
        <div className='desc'>
          <h2>We Care Services</h2>
          <p>
            The We Care team is the central hub of our ministry. They are the
            "one-stop destination" for all of our member and staff needs. From
            arranging a baby dedication for your child or grandchild to
            requesting a visit from our church family for a loved one that is
            ill, to enquiring about water baptism, and a whole lot more, the We
            Care team is here to serve you with excellence. Be sure to let us
            know how we have performed.
          </p>
        </div>
        <div className='flexbox'>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/prayer-request.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/89/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Prayer Requests</h3>
                  <p>
                    Do you need prayers for yourself, a loved one or a friend?
                    Do you need someone to stand in agreement with you, or to
                    stand in the gap for you? At Rhema Christian Ministries
                    (RCM), we believe in the power of prayer.
                  </p>
                  <span>Request Prayer</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/pastoral-care.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/90/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Pastoral Care</h3>
                  <p>
                    Do you need pastoral counseling? Do you need encouragement,
                    spiritual guidance or direction? Our college of elders, made
                    up of the five fold ministry gifts, are here to serve you.
                  </p>
                  <span>Request Pastoral Care</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/become-a-member.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/15/responses/new '
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Become A Member</h3>
                  <p>
                    At Rhema, we believe that individuals are either birthed
                    into or placed into the local church by the will of God. As
                    placement is vital to the purpose we welcome all those whom
                    God is placing within our ministry. We would love to confirm
                    your status with us as a member of our community.
                  </p>
                  <span>Register to Be A Member</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/child-dedication.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/14/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Child Dedication</h3>
                  <p>
                    We believe that children are a heritage of the Lord, and as
                    a community of believers, our responsibility is to ensure
                    that we agree with heaven on the God-ordained destinies of
                    these precious gifts, and along with their parents, dedicate
                    them back to their maker. During the dedication, we also
                    pronounce irrevocable blessings upon them.
                  </p>
                  <span>Request Child Dedication</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/water-baptism.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/12/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Water Baptism</h3>
                  <p>
                    Baptism is the place where a believer publicly aligns with
                    the death, burial and resurrection of Jesus Christ as
                    Saviour and Lord, symbolized by immersion in water. At Rhema
                    Christian Ministries, we believe in, and perform water
                    baptism as a act of identifying with Christ and His church.
                  </p>
                  <span>Register for Water Baptism</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/marriage-counselling.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/16/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Pre-marital Counseling and Weddings</h3>
                  <p>
                    At Rhema Christian Ministries (RCM), we believe in, and are
                    committed to the ordinance of marriage. We hold strongly to
                    the belief that marriage is a life-long commitment and any
                    couple entering into this very sacred institution should be
                    well prepared for it. This is why we encourage couples going
                    into marriage to attend pre-marital counseling sessions
                    prior to getting married.
                  </p>
                  <span>
                    Register for Pre-marital Counseling and/or Wedding
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/hospital-visitation-services.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a href=' https://rhemaonline.ca/bookings/' target='_blank'>
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Hospital & Visitation Services</h3>
                  <p>
                    At Rhema Christian Ministries (RCM), we believe that
                    sickness is not the portion of any believer because Jesus
                    Christ bore our sicknesses and diseases and has paid
                    the price for them. With that understanding, we are
                    encouraged to approach the throne room of grace and mercy to
                    find help in the time of need. Whether in the hospital or at
                    home, our ministerial services team of elders and
                    intercessors, are ready and willing to go when they are
                    called upon.
                  </p>
                  <span>Request Hospital & Visitation Services</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/funerals.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a
              href='https://rhema.ccbchurch.com/goto/forms/40/responses/new'
              target='_blank'
            >
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Funerals</h3>
                  <p>
                    In most cases, when one is grieving the death of a loved one
                    or a friend, they are usually overwhelmed by all
                    arrangements and processes that need to be performed to
                    ensure that the deceased gets a befitting funeral and a
                    glorious sendoff. This is why at Rhema Christian Ministries
                    (RCM) we ensure that we are ready and available to offer
                    every assistance that is required of us. We are here to do
                    as much or as little as you need us to do. From performing
                    the entire ceremony to just being present at the funeral, we
                    are here to serve you.
                  </p>
                  <span>Contact us to arrange a funeral</span>
                </div>
              </div>
            </a>
          </div>
          <div className='item-wrapper'>
            <div className='img-wrapper'>
              <Image
                src='/img/connect/foodbank.jpg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <a href=' https://rhemaonline.ca/bookings/' target='_blank'>
              <div className='hover'>
                <div className='text-wrapper'>
                  <h3>Foodbank</h3>
                  <p>
                    With a goal to change and affect lives by ensuring that no
                    family goes without food, the Rhema Foodbank is a food bank
                    service assisting our community by supplementing the grocery
                    needs of many families on a weekly basis. As well, during
                    the holiday seasons, we offer pre-packaged grocery bags to
                    feed families and spread the joy of the holiday season.
                  </p>
                  <span>Learn More</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
const Container = styled.div`
  margin: 0 auto;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0;
  .desc {
    width: 1100px;
    max-width: 90vw;
    margin-bottom: 2rem;
    h2 {
      margin-bottom: 1rem;
      color: var(--blue);
    }
  }
  .flexbox {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  .item-wrapper {
    width: 560px;
    max-width: 90vw;
    margin: 1rem;
    position: relative;
  }
  .img-wrapper {
    position: relative;
    height: 500px;
    border-radius: 5px;
    overflow: hidden;

    @media screen and (max-width: 640px) {
      height: 600px;
    }
  }
  .hover {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    overflow: hidden;
    background: var(--blue);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.95;
      box-shadow: var(--shadow);
    }
  }
  .text-wrapper {
    color: var(--white);
    width: 80%;
    text-align: center;
    p {
      margin: 1rem 0;
    }
    span {
      color: var(--white);
      text-decoration: underline;
      font-weight: bold;
    }
  }
`
