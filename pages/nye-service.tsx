import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { Button, Container, def } from "styles/GlobalStyle";

export default function NYEService() {
  return (
    <>
      <Meta title="New Year's Eve Service - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/nye-service.png" title="" height="30rem" mbHeight="20rem" blur="blur(0)" />
      <NYEContainer>
        <div className="content-wrapper">
          <h2>
            Get ready <span className="blue">for our Special</span> 2023 NYE!
          </h2>
          <p className="info">
            We're closing out the Year at the
            <p className="em">Montecassino Hotel and Event Centre</p>
          </p>
          <p className="info">
            located at
            <p className="em">3710 Chesswood Dr, North York, ON M3J 2W4</p>
          </p>
          <p className="info">
            on
            <p className="em">Sunday, Dec 31, 2023</p>
          </p>
          <p className="info">
            at both
            <p className="em">11am & 10pm</p>
          </p>
          <p>
            *Both services <b>(morning and New Year's Eve Services)</b> will be held at this venue on that day.
          </p>
        </div>
      </NYEContainer>
    </>
  );
}
const NYEContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
    text-align: center;
  }
  h2 {
    color: var(--highlight);
  }
  .blue {
    color: var(--blue);
  }
  .info {
    font-size: 1.1rem;
    margin: 2rem 0;
  }
  .em {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
