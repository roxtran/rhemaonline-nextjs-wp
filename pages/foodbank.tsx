import { Button, Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import ImageSlider from "components/common/ImageSlider";
import Link from "next/link";
import Meta from "components/common/meta";
import slides from "data/foodbank-slides";
import styled from "styled-components";

const foodbank = () => {
  const pageTitle = "Foodbank";
  const pageImage = "/img/foodbank/new/10.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} />
      <FoodbankContainer>
        <div className="content-wrapper">
          <ImageSlider slides={slides} />
          <div className="text-wrapper">
            <h2>Mandate</h2>
            <p>
              The Rhema Foodbank is a food bank service assisting our community by supplementing the grocery needs of
              many families on a weekly basis. As well, during the Easter, Thanksgiving and Christmas seasons we offer
              pre-packaged grocery bags filled with everything a family requires. We are changing and affecting lives by
              ensuring that no family is hungry. Matt 25:34-36
            </p>
            <Link href="/giving">
              <Button>Make A Donation</Button>
            </Link>
          </div>
        </div>
      </FoodbankContainer>
    </>
  );
};

const FoodbankContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
  }
  .text-wrapper {
    padding: 3rem 0;
  }
  .img-wrapper {
    width: 100%;
    height: 37.5rem;
  }
`;

export default foodbank;
