import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Meta from '../components/common/meta'
import { Container } from '../styles/GlobalStyle'

export default function About() {
  return (
    <>
      <Meta title='About Us - Rhema - Changing & Affecting Lives!' />
      <HeadLine
        imgUrl='/img/about-img.jpg'
        title='About Us'
        height='500px'
        blur='blur(15px)'
      />
      <AboutContainer>
        <div className='content-wrapper'>
          <h2>Our Story</h2>
          <span>Changing & Affecting Lives​</span>
          <p>
            Established in the fall of 1999 under the leadership of our Senior
            Pastor, Orim M. Meikle, Rhema Christian Ministries, Canada is a
            multi-ethnic, non-denominational church with campuses in Toronto and
            Ottawa. With a mission to change and affect lives, in a short period
            of time, Rhema has grown from a small congregation into a
            flourishing multicultural community.
          </p>
          <p>
            Using a holistic approach to modern day living, Rhema is
            incorporating all aspects of living into one essential organization.
            Its ministry and services are dedicated to the promotion of
            spiritual well-being, physical well-being, as well as the economic
            empowerment of the individual. In short Rhema is developing a people
            to achieve their full potential in life irrespective of
            socio-economic conditions or ethnic backgrounds.
          </p>
          <p>
            Propelled by the Spirit of God Rhema has been graced to transcend
            all denominational as well as cultural boundaries, creating a fresh
            and innovative template for the 21st century, which has come to
            characterize this new and cutting edge form of Christianity in
            Canada.
          </p>
        </div>
      </AboutContainer>
    </>
  )
}
const AboutContainer = styled(Container)`
  .content-wrapper {
    width: 1100px;
    max-width: 90vw;
    h2 {
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: bold;
      font-style: italic;
      font-size: 1.2rem;
    }
    p {
      margin: 1rem 0;
    }
  }
`
