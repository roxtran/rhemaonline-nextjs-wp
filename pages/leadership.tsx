import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import { Container } from '../styles/GlobalStyle'
import leaders from '../data/leaders'
import Meta from '../components/common/seo-meta'

export default function Leadership() {
  return (
    <>
      <Meta
        title='Leadership - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine
        imgUrl='/img/leadership-img.jpg'
        title='Leadership'
        height='450px'
        // blur='blur(5px)'
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
            {leaders.map((leader) => (
              <div className='leader' key={leader.name}>
                <div className='img-wrapper'>
                  <Image
                    className='img'
                    src={leader.imgUrl}
                    width={250}
                    height={250}
                  />
                </div>
                <h3>{leader.name}</h3>
              </div>
            ))}
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
      max-width: 90vw;
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
    border-radius: 5px;

    .img-wrapper {
      border-radius: 200px;
      overflow: hidden;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.1);
    }
    h3 {
      margin-top: 1rem;
    }
  }
`