import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyle'

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
          <div className='video-wrapper'></div>
        </div>
      </YouthContainer>
    </>
  )
}

const YouthContainer = styled(Container)`
  .wrapper {
    width: 1100px;
    display: flex;
  }
`

export default youth
