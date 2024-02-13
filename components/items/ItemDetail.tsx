import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import paths from "paths";
import { ImgWrapper, rem } from "styles/GlobalStyle";
import NoteType from "types/note";
import { formatDate, shortenString } from "utils/formatter";

interface Props {
  item: NoteType;
  url: string;
}

export default function ItemDetail({ item, url }: Props) {
  const summary = `<p>${shortenString(item.excerpt, 300)}... <br><br>Read More >></p>`;

  return (
    <ItemWrapper>
      <Link href={`${url}/${item.slug}`}>
        {item.featuredImage !== null && (
          <div className="img-container">
            <div className="hover"></div>
            <ImgWrapper>
              <Image
                src={item.featuredImage.node.sourceUrl}
                alt={item.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }}
              />
            </ImgWrapper>
          </div>
        )}
        <div className="text">
          {/* <div className="date">{formatDate(item.date)}</div> */}
          <h3>{item.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: summary
            }}
          ></div>
        </div>
      </Link>
    </ItemWrapper>
  );
}

export const imgWidth = `
  width: 51.375rem;
  max-width: 90vw;
`;

export const imgProperties = `
  ${imgWidth}
  height: 18.75rem;
  border-radius: 0.625rem;
`;

const ItemWrapper = styled.div`
  position: relative;
  padding: 2rem 0 1rem;
  ${imgWidth}

  .img-container {
    position: relative;

    ${ImgWrapper} {
      ${imgProperties}
      z-index: 0;
    }

    .hover {
      ${imgProperties}
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0;
      z-index: 1;

      &:hover {
        opacity: 0.4;
      }
    }
  }

  .text {
    margin-top: 1rem;
  }

  p {
    margin: 1rem;
  }

  .date {
    color: var(--blue);
  }
`;
