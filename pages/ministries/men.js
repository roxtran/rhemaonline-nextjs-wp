import HeadLine from '../../components/common/HeadLine'
import styled from 'styled-components'
import { WomenContainer } from './women'
import Image from 'next/image'

const men = () => {
  return (
    <>
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
