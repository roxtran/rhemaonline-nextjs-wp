import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container, Button, ImgWrapper } from '../../styles/GlobalStyle'
import Image from 'next/image'
import { default as ministriesData } from '../../data/ministies'
import Meta from '../../components/common/meta'
import Link from 'next/link'

const ministries = () => {
  return (
    <>
      <Meta title='Family Ministries - Rhema - Changing & Affecting Lives!' />
      <HeadLine
        imgUrl='/img/ministries-img.jpg'
        title='Ministries'
        height='550px'
      />
      <MinistriesContainer>
        <div className='desc'>
          <h2>The Family Ministries</h2>
          <p>
            At Rhema family is the foundation upon which all of life is built.
            As a family oriented church we place great value on the individual
            family unit as well as the wider church family.
          </p>
          <p>
            With the service of ministries such as Kids World, Singles and
            Marriage Ministries along with our ministry to families with
            newborns we ensure that all families are receiving the best care and
            support possible. It is our firm belief that healthy families make
            healthy churches and healthy churches ultimately make healthy
            societies.
          </p>
          <p>
            So from our family to yours we invite you to enjoy and to make use
            of our family ministries.
          </p>
        </div>
        <div className='ministries'>
          {ministriesData.map((ministry) => (
            <div className='ministry' key={ministry.name}>
              <ImgWrapper>
                <Image src={ministry.imgUrl} layout='fill' objectFit='cover' />
              </ImgWrapper>
              <div className='content-wrapper'>
                <h3>{ministry.name}</h3>
                {ministry.btnText && (
                  <Link href={ministry.btnLink}>
                    <Button>{ministry.btnText}</Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </MinistriesContainer>
    </>
  )
}

export const MinistriesContainer = styled(Container)`
  padding-bottom: 0;
  .desc {
    width: 1100px;
    max-width: 90vw;
    h2 {
      color: var(--blue);
    }
  }
  .ministries {
    margin-top: 3.5rem;
    width: 100%;
  }
  .ministry {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .ministry:nth-child(even) {
    flex-direction: row-reverse;
  }
  ${ImgWrapper} {
    width: 100%;
    min-width: 300px;
    height: 600px;
    flex: 1;
    /* &:hover {
      box-shadow: 0 0 20px 0 var(--mint);
    } */
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    h3 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      padding: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    ${ImgWrapper} {
      height: 400px;
    }
    .content-wrapper {
      h3 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
  }
`

export default ministries
