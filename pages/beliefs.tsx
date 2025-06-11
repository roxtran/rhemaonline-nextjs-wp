import { Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import beliefs from "data/beliefs";
import styled from "styled-components";

export default function Beliefs() {
  const pageTitle = "Beliefs";
  const pageImage = "/img/beliefs-img.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(0.3125rem)" />
      <BeliefsContainer>
        <div className="content-wrapper">
          <div className="desc">
            <h2>Statement of faith</h2>
            <p>
              We put forth the following statement of faith not for theological argumentation nor for denominational
              classification rather; our beliefs simply represent those theological values that we hold dearly as a
              Bible based church community. At Rhema what we believe is important to us but not as much as the one in
              whom we believe.
            </p>
          </div>
          <div className="beliefs">
            {beliefs.map((belief) => (
              <div className="belief" key={belief.title}>
                <h4>{belief.title}</h4>
                <p>{belief.text}</p>
              </div>
            ))}
          </div>
          <h3>Even so, come Lord Jesus</h3>
        </div>
      </BeliefsContainer>
    </>
  );
}
const BeliefsContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    .desc {
      p {
        padding-bottom: 3rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.2);
      }
    }
    .beliefs {
      padding: 1rem 4rem;
    }
    .belief {
      h4 {
        margin-bottom: 0.5rem;
      }
    }
    h3 {
      border-top: 0.0625rem solid rgba(0, 0, 0, 0.2);
      padding: 3rem;
      text-align: center;
    }
    @media screen and (max-width: 40rem) {
      .beliefs {
        padding: 1rem 0;
      }
    }
  }
`;
