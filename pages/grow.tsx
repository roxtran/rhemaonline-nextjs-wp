import Image from "next/image";
import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { default as growData } from "data/grow";
import { Container, ImgWrapper, def } from "styles/GlobalStyle";

const grow = () => {
  return (
    <>
      <Meta title="Grow - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/grow-img.jpg" title="Grow" height="550px" />
      <GrowContainer>
        <div className="desc">
          <h2>Go Deeper</h2>
          <p>
            The central objectives of our church is to assist everyone in fostering a deep and personal relationship
            with Jesus Christ. At the end of the day it will not be about the number of programs we ran, or the amount
            of money we amassed or the popularity of our events; instead we will be judged on whether we were able to
            “present everyone perfect in Christ Jesus” (Col. 1:28)
          </p>
          <p>
            From the decision to make Jesus Christ your Lord on to the various paths of spiritual growth, through
            membership within the local church, faith, prayer, worship, understanding of the word and giving, going
            deeper with God is the crowning achievement of every believer.
          </p>
          <p>
            We invite you to take a moment and hear the voice of the Master calling you, even as “Deep calleth unto
            deep” (Psalm 42:7)
          </p>
        </div>
        <div className="grows">
          {growData.map((grow) => (
            <div className="grow" key={grow.title}>
              <ImgWrapper>
                <Image
                  src={grow.imgUrl}
                  alt={grow.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }}
                />
              </ImgWrapper>
              <div className="content-wrapper">
                <h3>{grow.title}</h3>
                <div className="text" dangerouslySetInnerHTML={{ __html: `${grow.text}` }}></div>
              </div>
            </div>
          ))}
        </div>
      </GrowContainer>
    </>
  );
};

const GrowContainer = styled(Container)`
  padding-bottom: 0;
  width: 80vw;
  margin: 0 auto;
  .desc {
    width: ${def.wrapper.width};
    max-width: 90vw;
    h2 {
      color: var(--blue);
    }
  }
  .grows {
    margin-top: 3.5rem;
    width: 100%;
  }
  .grow {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .grow:nth-child(even) {
    flex-direction: row-reverse;
  }
  ${ImgWrapper} {
    width: 100%;
    min-width: 300px;
    height: 600px;
    flex: 1;
    /* &:hover {
      box-shadow: 0 0 20px 0 var(--mint);
    } */
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
      font-size: 2rem;
      padding: 0 4rem;
      text-align: center;
    }
    .text {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 500px;
      p {
        max-width: 90vw;
        text-align: center;
      }
      ul {
        max-width: 80vw;
        margin-left: 6rem;
      }
      li {
        margin-bottom: 0.25rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .content-wrapper {
      .text {
        ul {
          margin-left: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    ${ImgWrapper} {
      height: 400px;
    }
    .content-wrapper {
      h3 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
      .text {
        ul {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default grow;
