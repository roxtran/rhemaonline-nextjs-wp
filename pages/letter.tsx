import { Container, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";

export default function Letter() {
  const pageTitle = "Letter from The Senior Pastor";
  const pageImage = "/img/Rhema-LetterHead.png";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        height="22vw"
        title="Letter from The Senior Pastor"
        displayTitle={false}
        isUnderMenu={false}
      />
      <StyledAbout>
        <div className="content-wrapper">
          <p>December 5, 2024 </p>
          <p>
            <b>Re: A Season of Renewal at Rhema Through Prayer </b>
          </p>
          <p>Dear Beloved Member/Supporter,</p>
          <p>
            Grace to you and peace from God our Father, in the name of our Lord Jesus Christ. I write to inform you of a
            decision that I have taken concerning our ministry. On Sunday December 1st, I felt an overwhelming
            conviction that the time was right to call for a pause in our current ministry operations and seek the face
            of God through prayer. It was a decision that I had silently wrestled with for some time. Now a decision
            like this comes with some challenges for a ministry of our size that is already in motion, however this
            moment is pivotal.
          </p>
          <p>
            Going forward and for the unforeseeable future, we will be seeking the Lord in prayer during our weekend
            worship services from 10:00am – 12:00pm [EST]. For the time being our Sunday gatherings will be in-person
            only, so for our online community, I am graciously asking you to come alongside and join us in prayer
            in-person, but if coming in-person isn’t feasible, then please join us in prayer in your homes at that time.
            We will continue in prayer on Wednesday evenings in our Virtual Home Groups. I am also asking that we
            remember the ministry in our financial contributions and that we continue in the spirit of prayer with some
            fasting in our private spaces. Points of prayer will be shared weekly on our various platforms. I would also
            ask that if you’re not a part of a virtual home group please take a moment to sign up by visiting our
            website <a href="http://www.rhemaonline.ca/virtual-home-groups">www.rhemaonline.ca/virtual-home-groups</a>.
          </p>
          <p>
            At the heart of this decision is our willingness to say to the Lord, we acknowledge that this moment
            requires your voice, your direction, and your approval over all that we do in your name, and “we will not go
            unless you go with us,” [Ex. 33:15]. Yes, the times are quite challenging and serious, hence the vision and
            promise of God is critical, and the answer for all. We desire to be in step with Him who has called us.
          </p>
          <p>
            I thank you for your participation in this moment and I am grateful for your understanding of this decision.
            Greater is before us all.
          </p>
          <p>
            With profound love and concern for the moment,
            <br />
            <img src="/img/pastor-orim-signature.png" alt="Pastor Orim's Signature" />
          </p>
          Orim M.Meikle <br />
          Senior Pastor
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
`;
