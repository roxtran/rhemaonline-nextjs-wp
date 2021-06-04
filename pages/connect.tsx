import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Image from 'next/image'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
import services from '../data/services'
import Meta from '../components/common/meta'

export default function Connect() {
  return (
    <>
      <Meta title='Connect - Rhema - Changing & Affecting Lives!' />
      <HeadLine
        imgUrl='/img/connect-img.jpg'
        title='We Care'
        desc='We are here for you.'
        btnText='Contact Us'
        btnLink='https://rhema.ccbchurch.com/goto/forms/91/responses/new'
        height='550px'
      />
      <ConnectContainer>
        <div className='desc'>
          <h2>We Care Services</h2>
          <p>
            The We Care team is the central hub of our ministry. They are the
            "one-stop destination" for all of our member and staff needs. From
            arranging a baby dedication for your child or grandchild to
            requesting a visit from our church family for a loved one that is
            ill, to enquiring about water baptism, and a whole lot more, the We
            Care team is here to serve you with excellence. Be sure to let us
            know how we have performed.
          </p>
        </div>
        <div className='services'>
          {services.map((service) => (
            <div className='service' id={service.id} key={service.id}>
              <ImgWrapper className='img-wrapper'>
                <Image src={service.imgUrl} layout='fill' objectFit='cover' />
              </ImgWrapper>
              <h3>{service.name}</h3>
              <a href={service.link} target='_blank'>
                <div className='hover'>
                  <div className='text-wrapper'>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                    <span>{service.linkText}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </ConnectContainer>
    </>
  )
}
const ConnectContainer = styled(Container)`
  .desc {
    width: 1100px;
    max-width: 90vw;
    margin-bottom: 2rem;
    h2 {
      margin-bottom: 1rem;
      color: var(--blue);
    }
  }
  .services {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  .service {
    width: 560px;
    max-width: 90vw;
    margin: 1rem;
    position: relative;
    text-align: center;
    h3 {
      margin: 0.5rem auto;
    }
  }
  .img-wrapper {
    height: 500px;
    @media screen and (max-width: 640px) {
      height: 600px;
    }
  }
  .hover {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    overflow: hidden;
    background: var(--blue);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.95;
      box-shadow: var(--shadow);
    }
  }
  .text-wrapper {
    color: #fff;
    width: 80%;
    text-align: center;
    p {
      margin: 1rem 0;
    }
    span {
      color: #fff;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`
