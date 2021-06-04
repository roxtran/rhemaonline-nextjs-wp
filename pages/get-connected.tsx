import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Meta from '../components/common/meta'
import { default as getConnectedData } from '../data/get-connected'
import { Button, Container, ImgWrapper } from '../styles/GlobalStyle'

const getConnected = () => {
  return (
    <>
      <Meta title='Get Connected - Rhema - Changing & Affecting Lives!' />
      <HeadLine
        imgUrl='/img/get-connected-img.jpg'
        title='Get Connected'
        desc="That's changing and affecting lives."
        btnText='Join Us'
        btnLink='https://rhema.ccbchurch.com/goto/forms/15/responses/new'
        height='550px'
      />
      <ConnectedContainer>
        <div className='items'>
          {getConnectedData.map((item) => (
            <div className='item' key={item.title} id={item.id}>
              <ImgWrapper className='img-wrapper'>
                <Image src={item.imgUrl} layout='fill' objectFit='cover' />
              </ImgWrapper>
              <div className='content-wrapper'>
                <h3>{item.title}</h3>
                <div
                  className='text'
                  dangerouslySetInnerHTML={{ __html: `${item.text}` }}
                ></div>
                {item.btnText && (
                  <Button href={item.btnLink} className='btn'>
                    {item.btnText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ConnectedContainer>
    </>
  )
}

const ConnectedContainer = styled(Container)`
  padding: 0;
  .items {
    width: 100%;
  }
  .item {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .item:nth-child(even) {
    flex-direction: row-reverse;
  }
  .img-wrapper {
    width: 50%;
    min-width: 300px;
    height: 600px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    width: 50%;
    h3 {
      font-size: 2.5rem;
      padding: 1rem 2rem;
      text-align: center;
    }
    .text {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 90vw;
      p {
        margin-bottom: 1rem;
      }
    }
    .btn {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .item {
      flex-direction: column;
    }
    .img-wrapper {
      height: 400px;
      width: 100%;
    }
    .content-wrapper {
      width: 100%;
      .text {
        padding: 0;
      }
    }
  }
`

export default getConnected
