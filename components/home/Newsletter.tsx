import Image from "next/image";
import styled from "styled-components";
import { Button, Container, ImgWrapper } from "styles/GlobalStyle";
// import newsletters from 'data/newsletters'
import NewsletterType from "types/newsletter";

interface Props {
  newsletters: NewsletterType[];
}

const Newsletter = ({ newsletters }: Props) => {
  return (
    <NewsletterWrapper>
      <div className="text">
        <h2>Our Weekly Newsletters</h2>
        <p>
          This is our way of keeping you up to date on all our events, activities, and relevant news. We invite you to
          check out what’s happening @ Rhema this week.
        </p>
        <Button href={newsletters[0]?.NewsletterInfo?.link} target="_blank" className="btn">
          Learn More
        </Button>
      </div>
      <div className="newsletters">
        {newsletters.map((newsletter) => (
          <a
            key={newsletter?.NewsletterInfo?.link}
            className="newsletter"
            href={newsletter?.NewsletterInfo?.link}
            target="_blank"
          >
            <ImgWrapper>
              <Image
                src={newsletter?.NewsletterInfo?.imgUrl}
                alt="newsletter image"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }}
              />
            </ImgWrapper>
          </a>
        ))}
      </div>
    </NewsletterWrapper>
  );
};

export default Newsletter;

const NewsletterWrapper = styled(Container)`
  width: 75rem;
  max-width: 80vw;
  margin: auto;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  .text {
    width: 45rem;
    margin-right: 3rem;
    .btn {
      margin: 0.55rem 0 3.25rem;
    }
  }
  .newsletters {
    width: 25rem;
    /* height: 45rem; */
    display: flex;
    flex-flow: row wrap;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 0.75rem 2.25rem 0 rgb(181 217 238 / 25%);
    /* gap: 0.15rem; */
  }
  .newsletter {
    width: calc(100% / 2);
    /* flex-shrink: 1; */
    flex-grow: 1;
    overflow: hidden;
  }
  ${ImgWrapper} {
    border-radius: 0;
    cursor: pointer;
    min-width: calc(25rem / 3);
    min-height: calc(25rem / 3);
    transition-duration: 0.2s;
    &:hover {
      opacity: 0.75;
    }
  }
  @media screen and (max-width: 40rem) {
    padding-bottom: 0;
    .text {
      margin-right: 0;
    }
    ${ImgWrapper} {
      min-width: calc(18.75rem / 3);
      min-height: calc(18.75rem / 3);
    }
  }
`;
