import Image from "next/image";
import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { Button, Container, def } from "styles/GlobalStyle";
import ImageSlider from "components/common/ImageSlider";
import slides from "data/foodbank-slides";
import Link from "next/link";

const foodbank = () => {
  return (
    <>
      <Meta title="Foodbank - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/foodbank/new/10.jpg" title="Foodbank" />
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
    height: 600px;
  }
`;

export default foodbank;
