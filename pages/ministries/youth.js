import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyle'
import ReactPlayer from 'react-player'

const youth = () => {
  return (
    <>
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
              wholesome activities.{' '}
            </p>
          </div>
          <div className='video-wrapper'>
            <ReactPlayer
              width='100%'
              height='100%'
              url='https://fb.watch/5i-27tUbZC/'
            />
            <p>Contact Us: wecare@rhemaonline.ca</p>
          </div>
        </div>
      </YouthContainer>
    </>
  )
}

const YouthContainer = styled(Container)`
  .wrapper {
    width: 1100px;
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    width: 550px;
    span {
      color: var(--blue);
      font-size: 2.5rem;
      text-align: center;
      font-style: italic;
    }
  }
  .video-wrapper {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    .content-wrapper,
    .video-wrapper {
      width: 100%;
    }
    .content-wrapper {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 640px) {
    .content-wrapper {
      span {
        font-size: 2rem;
      }
    }
  }
`

export default youth
