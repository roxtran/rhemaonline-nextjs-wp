import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Meta from '../components/common/meta'
import { Button, Container } from '../styles/GlobalStyle'
import FoodbankSlider from '../components/common/ImageSlider'
import slides from '../data/foodbank-slides'

const foodbank = () => {
  return (
    <>
      <Meta title='Foodbank - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/foodbank-img.jpg' title='Foodbank' />
      <FoodbankContainer>
        <div className='content-wrapper'>
          <FoodbankSlider slides={slides} />
          <div className='text-wrapper'>
            <h2>Mission</h2>
            <p>
              The Rhema Foodbank is a food bank service assisting our community
              by supplementing the grocery needs of many families on a weekly
              basis. As well, during the Easter, Thanksgiving and Christmas
              seasons we offer pre-packaged grocery bags filled with everything
              a family requires. We are changing and affecting lives by ensuring
              that no family is hungry. Matt 25:34-36
            </p>
            <Button href='/giving'>Make A Donation</Button>
          </div>
        </div>
      </FoodbankContainer>
    </>
  )
}

const FoodbankContainer = styled(Container)`
  .content-wrapper {
    width: 1100px;
    max-width: 90vw;
  }
  .text-wrapper {
    padding: 3rem 0;
  }
  .img-wrapper {
    width: 100%;
    height: 600px;
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`

export default foodbank
