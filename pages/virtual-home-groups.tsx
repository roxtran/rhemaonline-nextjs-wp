import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import { Button, Container, def } from "styles/GlobalStyle";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Meta title="Virtual Home Groups - Rhema - Changing & Affecting Lives!" />
      <Head>
        <script src="https://js.churchcenter.com/modal/v1"></script>
      </Head>
      <HeadLine
        imgUrl="/img/VirtualHomeGroups.png"
        title=""
        height="800px"
        // blur='blur(15px)'
      />
      <StyledAbout>
        <div className="content-wrapper">
          <h2>Virtual Home Groups</h2>
          <p>
            As we navigate this new season of Rhema Christian Ministries, there is an increased need to stay connected,
            and ensure that our members are growing spiritually.
          </p>
          <p>
            To this end, we have decided to introduce Virtual Home Groups (VHG), a network of small group fellowships
            comprising of a maximum of 12 families, gathering in a virtual space to study various biblical topics, pray,
            and fellowship. Each group will comprise of families that live within the same geographical area. The reason
            for this is that we also want to allow the groups to gather physically if, and when they choose to do so.
          </p>
          <p>
            A VHG administrator will be appointed for this initiative. This administrator will be responsible for
            coordinating study notes on a weekly basis. They’ll also be the point person for any incidentals or updates
            flowing from the various VHGs.
          </p>
          <p>As new members join the ministry, we will assign them to one of the VHGs in their geographical area.</p>
          <p>
            The study materials will be provided by the senior pastor and will either be a topic from the previous
            Sunday’s sermon, or a different topic that he wants the congregation to study.
          </p>
          <p>
            Summary:
            <ul>
              <li>What: 12 Families grouped together virtually to study, pray and fellowship</li>
              <li>Why: Need to stay connected as a Rhema Family, to study, pray and fellowship</li>
              <li>Where: This is will be a virtual meeting on Microsoft Teams</li>
              <li>How: Divide the congregation into groups of 12 Families based on geographical locations</li>
              <li>When: On Wednesdays from 7pm – 8:30pm, starting in 2024</li>
            </ul>
          </p>
          <Button
            className="btn orange"
            href="https://rhemachristianministries.churchcenter.com/people/forms/659015"
            data-open-in-church-center-modal="true"
          >
            Register
          </Button>
        </div>
      </StyledAbout>
    </>
  );
}
const StyledAbout = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
  }
  .btn {
    min-width: 10rem;
    border-radius: 5rem;
  }
`;
