import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyle'
import Image from 'next/image'

const women = () => {
  return (
    <>
      <HeadLine imgUrl='/img/women-img.jpg' title="Women's Ministry" />
      <WomenContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <span>
              “The Empowered Ladies’ Union (ELU) exists to create opportunities
              for women from all backgrounds to grow, pray and serve together.”
            </span>
            <p>
              Empowered Ladies Union (ELU) is a social network of ladies
              stretching across Canada with a mandate to explore critical issues
              facing women of all ages in the 21st century and the role that
              God’s Kingdom plays in bringing solutions to these issues. The ELU
              is also tasked with developing and executing programs that ensure
              that women are building healthy relationships, pursuing purpose
              while maintaining a proper work-life balance, and providing
              mentorship and nurturing for the daughters of the next generation.
            </p>
            <p>
              The Empowered Ladies’ Union (ELU) exists to create opportunities
              for women from all backgrounds to grow, pray and serve together.
              We are an oasis in an often-hectic world, and through a variety of
              activities and service opportunities, we help women cultivate
              authentic relationships and find rest, redemption and renewal in
              Christ.
            </p>
          </div>
          <div className='right-wrapper'>
            <div className='img-wrapper'>
              <Image src='/img/women-bw.jpg' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </WomenContainer>
    </>
  )
}

const WomenContainer = styled(Container)`
  .wrapper {
    width: 100%;
    /* width: 1100px; */
    max-width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    /* width: 550px; */
    flex: 1;
    span {
      color: var(--blue);
      font-size: 2.5rem;
      text-align: center;
      font-style: italic;
    }
  }
  .right-wrapper {
    flex: 1;
    margin-left: 2rem;
  }
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 400px;
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

export default women
