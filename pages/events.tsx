import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import styled from "styled-components";
import { def } from "styles/GlobalStyle";

// import PCOCalendar from 'components/common/PLOCalendar'

export default function Events() {
  const pageTitle = "Events";
  const pageImage = "/img/events-img1.webp";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} />
      <HeadLine imgUrl={pageImage} title={pageTitle} height="18.75rem" />
      <CalendarWrapper>
        <iframe
          src="https://rhemachristianministries.churchcenter.com/calendar?embed=true&view=month&allowFiltering=true"
          className="planning-center-calender-embed"
          frameBorder="0"
        ></iframe>
      </CalendarWrapper>
    </>
  );
}
const CalendarWrapper = styled.div`
  position: relative;
  display: block;
  max-width: ${def.wrapper.width};
  margin: auto;
  height: 75vh;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media screen and (max-width: 64rem) {
    max-width: 90vw;
  }
`;
