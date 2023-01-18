import HeadLine from 'components/common/HeadLine'
import styled from 'styled-components'
import { Container, def } from 'styles/GlobalStyle'
import beliefs from 'data/beliefs'
import Meta from 'components/common/meta'

export default function Beliefs() {
  return (
    <>
      <Meta title='Beliefs - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/beliefs-img.jpg' title='Beliefs' blur='blur(5px)' />
      <BeliefsContainer>
        <div className='content-wrapper'>
          <div className='desc'>
            <h2>Statement of faith</h2>
            <p>
              We put forth the following statement of faith not for theological argumentation nor for denominational
              classification rather; our beliefs simply represent those theological values that we hold dearly as a
              Bible based church community. At Rhema what we believe is important to us but not as much as the one in
              whom we believe.
            </p>
          </div>
          <div className='beliefs'>
            {beliefs.map((belief) => (
              <div className='belief' key={belief.title}>
                <h4>{belief.title}</h4>
                <p>{belief.text}</p>
              </div>
            ))}
          </div>
          <h3>Even so, come Lord Jesus</h3>
        </div>
      </BeliefsContainer>
    </>
  )
}
const BeliefsContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    .desc {
      p {
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    .beliefs {
      padding: 1rem 4rem;
    }
    .belief {
      h4 {
        margin-bottom: 0.5rem;
      }
    }
    h3 {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: 3rem;
      text-align: center;
    }
    @media screen and (max-width: 640px) {
      .beliefs {
        padding: 1rem 0;
      }
    }
  }
`
