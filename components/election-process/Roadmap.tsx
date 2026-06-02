import styled from "styled-components";

interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
}

const roadmapEvents: TimelineEvent[] = [
  {
    date: "MAY 11",
    title: "Communication",
    description: "AGM date & election process announced to members",
  },
  {
    date: "MAY 12-17",
    title: "Q&A Window",
    description: "Members submit questions to the current board",
  },
  {
    date: "MAY 18-TBD",
    title: "Voter Registration",
    description: "Eligible members register within the four-week window",
  },
  {
    date: "JUN 01-28",
    title: "Candidate Submission / Nomination",
    description: "Members submit their nominations for candidacy",
  },
  {
    date: "JUN 29-30",
    title: "Candidate Screening / Shortlisting",
    description: "Applications reviewed; eligible candidates shortlisted",
  },
  {
    date: "JUN 30-JUL 06",
    title: "Candidate Confirmation",
    description: "Approved candidates provide required details for publication",
  },
  {
    date: "JUL 07",
    title: "Candidate Info. Published",
    description: "Review Candidate applications and select eligible candidates",
  },
  {
    date: "JUL 13",
    title: "Voting Begins",
    description:
      "Portal opens at 12am — voting is open on three Sundays within this period and closes July 29 at 6:59 pm",
  },
  {
    date: "JUL 29",
    title: "AGM & Announcement",
    description: "Final election result announced at the AGM",
  },
];

export const Roadmap = () => {
  return (
    <RoadmapContainer>
      <RoadmapTitle>RCM Board 2026 Election Roadmap</RoadmapTitle>
      <DateRange>MAY 11 - JUL 29</DateRange>
      <TimelineWrapper>
        <Timeline>
          {roadmapEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineItem key={index} isLeft={isLeft}>
                <TimelineLeft>
                  <DateBox>{event.date}</DateBox>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </TimelineLeft>
                <TimelineCenter>
                  <TimelineLineDot />
                </TimelineCenter>
                <TimelineRight>
                  <DateBox>{event.date}</DateBox>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </TimelineRight>
              </TimelineItem>
            );
          })}
        </Timeline>
      </TimelineWrapper>
    </RoadmapContainer>
  );
};

// Styled Components
const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1rem;
  background: #ffffff;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 0.5rem 1rem 0.5rem;
  }
`;

const RoadmapTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
  color: #333333;
  letter-spacing: -0.5px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const DateRange = styled.div`
  font-size: 0.75rem;
  color: var(--light-blue);
  border: 1px solid var(--light-blue);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: 0px;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;

  &::before {
    content: "";
    position: absolute;
    left: 49%;
    top: 8px;
    bottom: 0;
    width: 1.5px;
    background: #e0e0e0;
    transform: translateX(-50%);

    @media screen and (max-width: 768px) {
      left: 12px;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  gap: 1.75rem;
  margin-bottom: 2rem;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-template-columns: 24px 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineLeft = styled.div`
  text-align: right;
  padding-right: 1.25rem;

  @media screen and (max-width: 768px) {
    display: none;
    grid-column: 1;
  }
`;

const DateBox = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  color: #333333;
  margin-bottom: 0.35rem;
  letter-spacing: 0px;
`;

const EventTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333333;
  /* margin: 0rem 0 0rem 0; */
  padding: 0rem 0 0.25rem !important;
  letter-spacing: -0.2px;
`;

const EventDescription = styled.p`
  font-size: 0.8rem;
  color: #777777;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`;

const TimelineCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;

  @media screen and (max-width: 768px) {
    width: 24px;
    padding-top: 0.5px;
    height: auto;
  }
`;

const TimelineLineDot = styled.div`
  width: 14px;
  height: 14px;
  background: #7eb3d4;
  border: 3px solid #ffffff;
  border-radius: 50%;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 0 1px #d8d8d8;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 12px;
    height: 12px;
    border-width: 2.5px;
  }
`;

const TimelineRight = styled.div`
  text-align: left;
  padding-left: 1.25rem;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    padding-left: 0;
  }
`;
