import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { Container, Button } from '../../styles/GlobalStyle'
import Image from 'next/image'
import { default as ministriesData } from '../../data/ministies'

const ministries = () => {
  return (
    <>
      <HeadLine
        imgUrl='/img/connect-img.jpg'
        title='Ministries'
        height='550px'
      />
      <MinistriesContainer>
        <div className='desc'>
          <h2>The Family Ministies</h2>
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
              <div className='img-wrapper'>
                <Image src={ministry.imgUrl} layout='fill' objectFit='cover' />
              </div>
              <div className='content-wrapper'>
                <h3>{ministry.name}</h3>
                <Button href='#'>{ministry.btnText}</Button>
              </div>
            </div>
          ))}
        </div>
      </MinistriesContainer>
    </>
  )
}

const MinistriesContainer = styled(Container)`
  padding-bottom: 0;
  .desc {
    width: 1100px;
    max-width: 90vw;
    h2 {
      margin-bottom: 1rem;
      color: var(--blue);
    }
  }
  .ministries {
    margin-top: 2rem;
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
  .img-wrapper {
    position: relative;
    width: 100%;
    min-width: 300px;
    height: 600px;
    border-radius: 5px;
    overflow: hidden;
    flex: 1;
  }
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 400px;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      padding: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .img-wrapper {
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
