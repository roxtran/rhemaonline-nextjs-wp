import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyle'
import ReactPlayer from 'react-player'
import Meta from '../../components/common/seo-meta'

const youth = () => {
  return (
    <>
      <Meta
        title='Youth Ministry - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine imgUrl='/img/youth-img.jpg' title='Plugged In Youth' />
      <YouthContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <span>
              “Jesus is the source. All youth must be plugged into the source”.
              ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              <b>Plugged In</b> is a social network of youth stretching across
              Canada with a mandate to explore critical issues facing youth and
              young adults between the ages of 12 – 23 and the role that God’s
              Kingdom plays in bringing solutions to these issues. The
              Fellowship is also tasked with developing and executing programs
              that ensure that youth are spiritually and educationally
              empowered, building healthy relationships, and engaging in
              wholesome activities.
            </p>
            <p>
              <b>Contact Us: </b>
              <a href='mailto:wecare@rhemaonline.ca'>wecare@rhemaonline.ca</a>
            </p>
          </div>
          <div className='video-wrapper'>
            <ReactPlayer
              width='100%'
              height='100%'
              url='https://fb.watch/5i-27tUbZC/'
            />
          </div>
        </div>
      </YouthContainer>
    </>
  )
}

const YouthContainer = styled(Container)`
  .wrapper {
    width: 100%;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    width: 50%;
    span {
      color: var(--blue);
      font-size: 2rem;
      text-align: center;
      font-style: italic;
    }
  }
  .video-wrapper {
    width: 47%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
  }
  p {
    margin: 1.5rem 0;
  }
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    .content-wrapper,
    .video-wrapper {
      width: 100%;
    }
  }
`

export default youth
