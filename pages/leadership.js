import HeadLine from '../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../styles/GlobalStyle'
import Image from 'next/image'

export default function Leadership() {
  return (
    <>
      <HeadLine
        imgUrl='/img/leadership-img.jpg'
        title='Leadership'
        height='450px'
        blur='blur(5px)'
      />
      <LeadershipContainer>
        <div className='content-wrapper'>
          <div className='desc'>
            <h2>Our Leadership</h2>
            <p>
              With a warm smile, a caring touch and a shepherd’s heart the
              leaders of Rhema Christian Ministries are tasked with operational
              and ecclesiastical excellence.
            </p>
          </div>
          <div className='leaders'>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Orim-M-Meikle.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Orim M. Meikle</h3>
            </div>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Judith-R-Meikle.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Judith R. Meikle</h3>
            </div>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Charles-Isiuwe.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Charles Isiuwe</h3>
            </div>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Eriazel-Daniel.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Eriazel Daniel</h3>
            </div>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Guy-Kayembe.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Guy Kayembe</h3>
            </div>
            <div className='leader'>
              <div className='img-wrapper'>
                <Image
                  src='/img/leaders/Ephraim-Chiyangwa.jpg'
                  width={250}
                  height={250}
                />
              </div>
              <h3>Ephraim Chiyangwa</h3>
            </div>
          </div>
        </div>
      </LeadershipContainer>
    </>
  )
}
const LeadershipContainer = styled(Container)`
  .content-wrapper {
    width: 1100px;
    max-width: 90vw;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: var(--blue);
    }
    p {
      margin-top: 1rem;
      text-align: center;
      width: 720px;
    }
  }
  .leaders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3rem 0;
  }
  .leader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 1rem;

    .img-wrapper {
      border-radius: 200px;
      overflow: hidden;
    }
    h3 {
      margin-top: 1rem;
    }
  }
`
