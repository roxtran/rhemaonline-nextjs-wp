import { Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";

export default function About() {
  const pageTitle = "About Us";
  const pageImage = "/img/about-img.webp";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        height="31.25rem"
        imgUrl={pageImage}
        title={pageTitle}
        // blur='blur(0.9375rem)'
      />
      <StyledAbout>
        <div className="content-wrapper">
          <h2>Our Story</h2>
          <p>
            <span>Changing & Affecting Lives​</span>
          </p>
          <p>
            Established in the fall of 1999 under the leadership of our Senior Pastor, Orim M. Meikle, Rhema Christian
            Ministries, Canada, is a multi-ethnic, non-denominational ministry located in the world-class city of
            Toronto. With a mandate to Change & And Affect Lives, we have grown quickly from a small congregation into a
            vibrant and flourishing community.
          </p>
          <p>
            Using a holistic approach to life, we incorporate all aspects of living into one essential organization. Our
            ministries and services are dedicated to promoting spiritual well-being, physical well-being, and economic
            empowerment. At Rhema, we develop people to achieve their full potential in life through products and
            services that meet people at the point of their need.
          </p>
          <p>
            Guided and fueled by the Holy Spirit, we have been graced to transcend denominational and cultural
            boundaries, creating a fresh and innovative template for 21st-century Christianity in Canada and worldwide.
            With God leading us, the Rhema future is very bright.
          </p>
        </div>
      </StyledAbout>
    </>
  );
}
const StyledAbout = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    span {
      font-weight: bold;
      font-style: italic;
      font-size: 1.2rem;
    }
  }
`;
