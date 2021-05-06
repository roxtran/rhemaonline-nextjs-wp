import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { WomenContainer } from './women'
import Image from 'next/image'
import Meta from '../../components/common/seo-meta'

const single = () => {
  return (
    <>
      <Meta
        title="Single's Ministry - Rhema - Changing & Affecting Lives!"
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine imgUrl='/img/single-img.jpg' title="Single's Ministry" />
      <SingleContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <span>
              “Jesus is the source. All youth must be plugged into the source”.
              ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              Equipped Singles Ministry is a community of single Christians
              committed to living wholly and victoriously in Christ Jesus. Our
              mission is to support single Christians at every stage of their
              journey in developing personally and spiritually, while connecting
              with one another and living life to the full!
            </p>
          </div>
          <div className='right-wrapper'>
            <div className='img-wrapper'>
              <Image src='/img/single.jpg' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </SingleContainer>
    </>
  )
}

const SingleContainer = styled(WomenContainer)``

export default single
