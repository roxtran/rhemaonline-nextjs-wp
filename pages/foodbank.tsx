import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Meta from '../components/common/seo-meta'
import { Button, Container } from '../styles/GlobalStyle'

const foodbank = () => {
  return (
    <>
      <Meta
        title='Foodbank - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine imgUrl='/img/foodbank-img.jpg' title='Foodbank' />
      <FoodbankContainer>
        <div className='content-wrapper'>
          <div className='img-wrapper'>
            <Image src='/img/foodbank.jpg' layout='fill' objectFit='cover' />
          </div>
          <h2>Mission</h2>
          <p>
            The Rhema Foodbank is a food bank service assisting our community by
            supplementing the grocery needs of many families on a weekly basis.
            As well, during the Easter, Thanksgiving and Christmas seasons we
            offer pre-packaged grocery bags filled with everything a family
            requires. We are changing and affecting lives by ensuring that no
            family is hungry. Matt 25:34-36
          </p>
          <Button href='/giving'>Make A Donation</Button>
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
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 600px;
    border-radius: 5px;
    overflow: hidden;
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