import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import { default as getConnectedData } from '../data/get-connected'
import { Button, Container } from '../styles/GlobalStyle'

const getConnected = () => {
  return (
    <>
      <HeadLine
        imgUrl='/img/get-connected-img.jpg'
        title='Get Connected'
        desc="That's changing and affecting lives."
        btnText='Join Us'
        btnLink='https://rhema.ccbchurch.com/goto/forms/15/responses/new'
        height='550px'
      />
      <GrowContainer>
        <div className='items'>
          {getConnectedData.map((item) => (
            <div className='item' key={item.title}>
              <div className='img-wrapper'>
                <Image src={item.imgUrl} layout='fill' objectFit='cover' />
              </div>
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
      </GrowContainer>
    </>
  )
}

const GrowContainer = styled(Container)`
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
    padding: 4rem 0;
    width: 100%;
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
      width: 800px;
      max-width: 90vw;
    }
    .btn {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .img-wrapper {
      height: 400px;
    }
    .content-wrapper {
      .text {
        padding: 0;
      }
      h3 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
  }
`

export default getConnected
