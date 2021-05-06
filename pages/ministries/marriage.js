import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { WomenContainer } from './women'
import Image from 'next/image'
import { Button } from '../../styles/GlobalStyle'
import Meta from '../../components/common/seo-meta'

const marriage = () => {
  return (
    <>
      <Meta
        title="Marriage's Ministry - Rhema - Changing & Affecting Lives!"
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine
        imgUrl='/img/marriage-img.jpg'
        title="Marriage's Ministry"
        blur='blur(4px)'
      />
      <MarriageContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <span>
              “Jesus is the source. All youth must be plugged into the source”.
              ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              Eden Marriage Ministries is designed to take couples on the
              fascinating and life changing journey of marriage. Facilitating
              workshops, retreats, special outings and much more, this ministry
              area has the longevity and strengthening of the marriage covenant
              as is primary mandate. Designed as a long term initiative to
              maintain the spark between husbands and wives, Eden is suited for
              those who are newlyweds, middle aged and those in their golden
              years.
            </p>
            <p>
              Would you like to have one of Rhema’s ministers officiate your
              ceremony?
            </p>
            <Button
              href='https://rhema.ccbchurch.com/form_response.php?id=16'
              target='_blank'
            >
              Marriage Ministry Form
            </Button>
          </div>
          <div className='right-wrapper'>
            <div className='img-wrapper'>
              <Image src='/img/marriage.jpg' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </MarriageContainer>
    </>
  )
}

const MarriageContainer = styled(WomenContainer)`
  .content-wrapper {
    margin-bottom: 3rem;
  }
`

export default marriage
