import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
// import PCOCalendar from 'components/common/PLOCalendar'
import Meta from "components/common/meta";
import { def } from "styles/GlobalStyle";

export default function Events() {
  return (
    <>
      <Meta title="Events - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/events-img1.webp" title="Events" height="18.75rem" />
      <CalendarWrapper>
        <iframe
          src="https://rhema.ccbchurch.com/goto/events/public"
          style={{ border: 0, width: "100%", height: "100%" }}
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

  @media screen and (max-width: 64rem) {
    max-width: 90vw;
  }
`;
