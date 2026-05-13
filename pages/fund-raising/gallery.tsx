import Meta from "components/common/meta";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";
import { events } from "data/fundRaisingGallery";
import { useRouter } from "next/router";

export default function Gallery() {
  const router = useRouter();
  const { id } = router.query;

  // Find the event by ID, or fallback to the first event if none provided
  const event = events.find((e) => e.id === id) || events[0];

  if (!event) return null;

  const pageTitle = `${event.title} - Photo Gallery`;
  const pageImage = event.images[0] || "/img/fund-raising/slide.jpg";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <PageContainer>
        <div className="header">
          <Link href="/fund-raising#year-in-review" className="back-link">
            &larr; Back to Fund Raising
          </Link>
        </div>

        <div className="title-section">
          <h2>{event.title}</h2>
          <p>Memories and highlights from our event.</p>
        </div>

        <div className="gallery-grid">
          {event.images.map((imgUrl, index) => (
            <div className="gallery-card" key={index}>
              <div className="image-wrapper">
                <Image
                  src={imgUrl}
                  alt={`${event.title} - Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
}

const PageContainer = styled(Container)`
  background: #181426;
  color: #ffffff;
  padding-top: 6rem;
  padding-bottom: 5rem;
  font-family: "Calibri", sans-serif;
  min-height: 100vh;

  .header {
    max-width: 1200px;
    margin: 0 auto 2rem;
    padding: 0 1rem;

    .back-link {
      color: #9168e4;
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .title-section {
    text-align: center;
    margin-bottom: 5rem;
    padding: 0 1rem;

    h2 {
      font-family: "League Spartan", sans-serif;
      font-size: 2.5rem;
      color: #ffffff;
      margin-bottom: 0;
      line-height: 1.2;
    }

    h1 {
      font-family: "League Spartan", sans-serif;
      font-size: 6rem;
      font-weight: bold;
      color: #ffffff;
      margin: 0.5rem 0;
      letter-spacing: 2px;
    }

    h3 {
      font-size: 1.5rem;
      color: #9168e4;
      margin-bottom: 2rem;
      font-weight: normal;
    }

    p {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
      color: #cccccc;
      line-height: 1.5;
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .gallery-card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    aspect-ratio: 1 / 1;

    .image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
