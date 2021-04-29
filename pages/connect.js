import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Image from 'next/image'

export default function Connect() {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <HeadLine imgSrc='/img/connect-img.jpg' title='We Care' />
      <Container>
        <div className='desc'>
          <h1>We Care Service</h1>
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
          <Image
            src='/img/connect/prayer-request-img.jpg'
            width={400}
            height={300}
          />
          <div className='hover'>
            <div className='text-wrapper'>
              <h3>Prayer Requests</h3>
              <p>
                Do you need prayers for yourself, a loved one or a friend? Do
                you need someone to stand in agreement with you, or to stand in
                the gap for you? At Rhema Christian Ministries (RCM), we believe
                in the power of prayer
              </p>
              <a
                href='https://rhema.ccbchurch.com/goto/forms/89/responses/new'
                target='_blank'
              >
                Request Prayer
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
const Container = styled.div`
  margin: 0 auto;
  padding: 0 2%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
