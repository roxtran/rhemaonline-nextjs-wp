import { Button, Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";

export default function VHG() {
  const pageTitle = "Virtual Home Groups";
  const pageImage = "https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2023/12/VHG-banner-.gif";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title=""
        height="37.5rem"
        mbHeight="15rem"
        // blur='blur(0.9375rem)'
      />
      <VHGContainer>
        <div className="content-wrapper">
          <h2>Virtual Home Groups (VHG)</h2>
          <p>
            Virtual Home Groups (VHG) are a key part of how our church stays connected, grows spiritually, and ensures
            that every member is cared for in our community. As Rhema Christian Ministries continues to deepen its
            commitment to discipleship, VHG provides a space where members can study the Word, pray together, build
            meaningful relationships, and experience supportive, Christ‑centered fellowship.
          </p>
          <p>
            VHGs function as small communities within the wider church, gathering virtually to discuss biblical topics,
            share insights, and support one another. Each group is organized by geographical location, allowing members
            to connect with those who live nearby—and making it easy for groups to gather physically whenever they
            choose.
          </p>
          <p>
            Each VHG is supported by designated Pastors and Elders who help ensure that every member is spiritually
            nurtured, encouraged, and cared for. As new members join the ministry, they are thoughtfully placed into a
            VHG in their area so they can quickly become part of a thriving spiritual community.
          </p>
          <h3>How the Teaching Flow Works</h3>
          <p>Study materials are provided by the Senior Pastor and follow a monthly teaching theme.</p>
          <ul>
            <li>
              <b>On the first Wednesday of each month</b>, Pastor Orim Meikle leads a church‑wide teaching session in a
              Bible‑study format, setting the foundation for the month’s topic.
            </li>
            <li>
              <b>On the following Wednesdays</b> , members meet within their individual groups to explore the teaching
              more deeply, discuss key insights, and pray together.
            </li>
          </ul>
          <p>
            This rhythm allows the entire church to receive unified teaching, while still fostering deeper dialogue and
            fellowship within each group.
          </p>
          <h3>A Place of Care and Belonging</h3>
          <p>
            Beyond teaching, VHGs are one of the primary ways our church ensures personal care. Members support one
            another, pray for one another, and walk through life together in community. If you are not currently part of
            a VHG, we encourage you to register and become connected—you were not meant to walk your spiritual journey
            alone.
          </p>
          <Button
            className="btn orange"
            href="https://rhemachristianministries.churchcenter.com/people/forms/659015"
            data-open-in-church-center-modal="true"
          >
            Register
          </Button>
          <h2 className="mt-5">Summary</h2>
          <p>
            <b>What</b>: Members connecting virtually to study Scripture, pray, fellowship, and receive care within a
            small‑group community.
          </p>
          <p>
            <b>Why</b>: To foster spiritual growth, encourage meaningful relationships, and ensure every member at Rhema
            is cared for and supported through consistent, Christ‑centered community.
          </p>
          <p>
            <b>Where</b>: Virtual meetings are hosted on Microsoft Teams.
          </p>
          <p>
            <b>How</b>: Groups are formed based on geographical areas, with designated Pastors and Elders providing
            oversight, support, and spiritual care.
          </p>
          <p>
            <b>When</b>: The first three Wednesdays of each month from 7:00 PM – 8:30 PM.
          </p>
          <Button
            className="btn orange mb-4"
            href="https://rhemachristianministries.churchcenter.com/people/forms/659015"
            data-open-in-church-center-modal="true"
          >
            Register
          </Button>
        </div>
      </VHGContainer>
    </>
  );
}
const VHGContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
  }
  .btn {
    min-width: 10rem;
    border-radius: 5rem;
  }
`;
