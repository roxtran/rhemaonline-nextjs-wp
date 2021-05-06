import HeadLine from '../components/common/HeadLine'
import styled from 'styled-components'
import { Container, Button } from '../styles/GlobalStyle'
import Image from 'next/image'

export default function facilityBookings() {
  return (
    <>
      <HeadLine
        imgUrl='/img/facility-bookings-img.jpg'
        title='Facility Bookings'
        blur='blur(4px)'
      />
      <BookingsContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <h2>Facility Bookings</h2>
            <p>
              Welcome To Rhema Canada’s Meeting and Conference Services Venue in
              Downsview Park in the beautiful world-class city of Toronto. From
              continental breakfasts to sumptuous meals, we bring quality and
              customization to our food and beverage service based on your event
              requirements. From a main event space seating 1000. If you have a
              requirement for smaller meeting spaces we can accommodate that as
              well.
            </p>
            <p>
              <b>PARKING:</b> For the convenience of our guests, we have ample
              free parking available. Rhema’s Event Services provide excellence
              in meeting, special event and conference preparation, the Events
              Services Team delivers all major events throughout the Rhema
              organization. From wedding planning, to staff appreciation to
              corporate meetings and national conferences, this Team is the
              engine behind the many activities held throughout our
              organization. With a trained team of event planners, facilitators,
              and support staff, Events Services is ready to serve the needs of
              all of Rhema’s Divisions and the community. Rhema’s Music
              production our professional musicians can be available to add that
              special and professional touch to your event.
            </p>
            <p>
              Rhema’s Audio Visual provides full-service resources for
              conferences and meetings, exhibit programs.
            </p>
            <h3>Services include:</h3>
            <ul>
              <li>
                Audio/Video/Projection/Lighting Featuring a (20M²) video wall
              </li>
              <li>Computer Services</li>
              <li>Event Staging</li>
              <li>Exhibit and Tradeshow Programs</li>
              <li>Presentation Management</li>
              <li>Press Conferences</li>
              <li>Webcasting/Livestreaming</li>
              <li>Business, Product and Service Launches</li>
              <li>Security Services</li>
            </ul>
          </div>
          <div className='btn-wrapper'>
            <Button href='https://rhema.ccbchurch.com/goto/forms/42/responses/new'>
              Facility Booking Enquiry Form
            </Button>
            <div className='text-wrapper'>
              <p>Contact us for a tour.</p>
              <p>
                <b>Call: (416) 496-1794</b>
              </p>
            </div>
          </div>
        </div>
      </BookingsContainer>
    </>
  )
}

const BookingsContainer = styled(Container)`
  .wrapper {
    width: 1100px;
    max-width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .content-wrapper {
    width: 700px;
    h2,
    h3,
    p {
      margin-bottom: 1rem;
    }
    ul {
      margin-left: 2rem;
    }
    li {
      margin: 0.25rem 0;
    }
  }
  .btn-wrapper {
    padding: 5rem 2rem;
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text-wrapper {
      margin-top: 0.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .content-wrapper {
      width: 550px;
    }
    .btn-wrapper {
      padding: 5rem 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .content-wrapper {
      width: 100%;
    }
    .btn-wrapper {
      padding: 2rem 0;
    }
  }
`
