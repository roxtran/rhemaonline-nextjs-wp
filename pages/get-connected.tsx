import { Button, Container, ImgWrapper } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Image from "next/image";
import Meta from "components/common/meta";
import { default as getConnectedData } from "data/get-connected";
import styled from "styled-components";

const getConnected = () => {
  const pageTitle = "Get Connected";
  const pageImage = "/img/get-connected-img.jpg";
  const pageDesc = "That's changing and affecting lives.";

  return (
    <>
      <Meta title={pageTitle} desc={pageDesc} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title={pageTitle}
        desc={pageDesc}
        btnText="Join Us"
        btnLink="https://rhema.ccbchurch.com/goto/forms/15/responses/new"
        height="34.375rem"
      />
      <ConnectedContainer>
        <div className="items">
          {getConnectedData.map((item) => (
            <div className="item" key={item.title} id={item.id}>
              <ImgWrapper>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
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
    min-width: 18.75rem;
    height: 37.5rem;
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
    .text {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 90vw;
    }
    .btn {
      width: 10rem;
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (max-width: 48rem) {
    .item {
      flex-direction: column;
    }
    ${ImgWrapper} {
      height: 25rem;
      width: 100%;
    }
    .content-wrapper {
      width: 100%;
      .text {
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 40rem) {
    .content-wrapper {
      padding: 2rem;
    }
  }
`;

export default getConnected;
