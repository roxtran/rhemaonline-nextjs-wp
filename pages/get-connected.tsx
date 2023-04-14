import Image from "next/image";
import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { default as getConnectedData } from "data/get-connected";
import { Button, Container, ImgWrapper } from "styles/GlobalStyle";

const getConnected = () => {
  return (
    <>
      <Meta title="Get Connected - Rhema - Changing & Affecting Lives!" />
      <HeadLine
        imgUrl="/img/get-connected-img.jpg"
        title="Get Connected"
        desc="That's changing and affecting lives."
        btnText="Join Us"
        btnLink="https://rhema.ccbchurch.com/goto/forms/15/responses/new"
        height="550px"
      />
      <ConnectedContainer>
        <div className="items">
          {getConnectedData.map((item) => (
            <div className="item" key={item.title} id={item.id}>
              <ImgWrapper>
                <Image src={item.imgUrl} alt={item.title} layout="fill" objectFit="cover" />
              </ImgWrapper>
              <div className="content-wrapper">
                <h3>{item.title}</h3>
                <div className="text" dangerouslySetInnerHTML={{ __html: `${item.text}` }}></div>
                {item.btnText && (
                  <Button href={item.btnLink} className="btn">
                    {item.btnText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ConnectedContainer>
    </>
  );
};

const ConnectedContainer = styled(Container)`
  width: 80vw;
  margin: 0 auto;

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
  ${ImgWrapper} {
    width: 50%;
    min-width: 300px;
    height: 600px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
    width: 50%;
    h3 {
      font-size: 2.5rem;
    }
    p {
      margin-bottom: 1rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 90vw;
      margin-bottom: 1rem;
    }
    .btn {
      width: 10rem;
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    .item {
      flex-direction: column;
    }
    ${ImgWrapper} {
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
  @media screen and (max-width: 640px) {
    .content-wrapper {
      padding: 2rem;
    }
  }
`;

export default getConnected;
