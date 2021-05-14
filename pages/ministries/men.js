import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { WomenContainer } from './women'
import Image from 'next/image'
import Meta from '../../components/common/seo-meta'

const men = () => {
  return (
    <>
      <Meta
        title="Men's Ministry - Rhema - Changing & Affecting Lives!"
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine imgUrl='/img/men-img.jpg' title="Men's Ministry" />
      <MenContainer>
        <div className='wrapper'>
          <div className='content-wrapper'>
            <span>
              “Jesus is the source. All youth must be plugged into the source”.
              ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              Men of Valor is a social network of men across Canada with a
              mandate to explore critical issues facing men of all ages in the
              21st century and the role that God’s Kingdom plays in bringing
              solutions to these issues. The fellowship is also tasked with
              developing and executing programs that ensure that men are
              building healthy relationships, pursuing purpose with a good
              understanding of work-life balance, and providing opportunities
              for mentoring and nurturing the sons of the next generation.
            </p>
            <div className='icons'>
              <a title='men@rhemaonline.ca' href='mailto:men@rhemaonline.ca'>
                <div className='icon'>
                  <Image
                    src='/img/email-icon-blue.jpg'
                    width={42}
                    height={42}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className='right-wrapper'>
            <div className='img-wrapper'>
              <Image src='/img/men.jpg' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>
      </MenContainer>
    </>
  )
}

const MenContainer = styled(WomenContainer)``

export default men
