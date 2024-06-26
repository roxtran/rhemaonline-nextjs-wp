import { Button, ImgWrapper } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import styled from "styled-components";
import { WomenContainer } from "./women";

const marriage = () => {
  const pageTitle = "Marriage's Ministry";
  const pageImage = "/img/marriage-img.jpg";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(0.25rem)" />
      <MarriageContainer>
        <div className="wrapper">
          <div className="content-wrapper">
            <span>
              “Jesus is the source. All youth must be plugged into the source”. ~ Plugged In Youth Adult Ministry
            </span>
            <p>
              Eden Marriage Ministries is designed to take couples on the fascinating and life changing journey of
              marriage. Facilitating workshops, retreats, special outings and much more, this ministry area has the
              longevity and strengthening of the marriage covenant as is primary mandate. Designed as a long term
              initiative to maintain the spark between husbands and wives, Eden is suited for those who are newlyweds,
              middle aged and those in their golden years.
            </p>
            <p>Would you like to have one of Rhema’s ministers officiate your ceremony?</p>
            <Button href="https://rhema.ccbchurch.com/form_response.php?id=16" target="_blank">
              Marriage Ministry Form
            </Button>
          </div>
          <div className="right-wrapper">
            <ImgWrapper>
              <Image
                src="/img/marriage.jpg"
                alt="marriage"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          </div>
        </div>
      </MarriageContainer>
    </>
  );
};

const MarriageContainer = styled(WomenContainer)`
  .content-wrapper {
    margin-bottom: 3rem;
  }
`;

export default marriage;
