import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import PCOCalendar from '../components/common/PLOCalendar'

export default function Events() {
  const CalendarWrapper = styled.div`
    position: relative;
    display: block;
    max-width: 1100px;
    margin: auto;
    padding: 2rem 0;
    height: 60vh;

    @media screen and (max-width: 1024px) {
      max-width: 90vw;
    }
  `
  return (
    <>
      <HeadLine imgSrc='/img/events-image.webp' title='Events' />
      <CalendarWrapper>
        <PCOCalendar />
      </CalendarWrapper>
    </>
  )
}
