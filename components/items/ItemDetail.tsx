import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import paths from "paths";
import { ImgWrapper, rem } from "styles/GlobalStyle";
import NoteType from "types/note";
import { formatDate, shortenString } from "utils/formatter";

interface Props {
  item: NoteType;
  type: string;
}

export default function ItemDetail({ item, type }: Props) {
  const summary = `<p>${shortenString(item.excerpt, 300)}... <br><br>Read More >></p>`;

  return (
    <ItemWrapper>
      <Link href={`${type}/${item.slug}`}>
        {item.featuredImage !== null && (
          <>
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
          </>
        )}
        <div className="text">
          <div className="date">{formatDate(item.date)}</div>
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
const ItemWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  width: ${rem(822)};
  max-width: 90vw;

  .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: ${rem(822)};
    max-width: 90vw;
    height: ${rem(300)};
    background: black;
    opacity: 0;
    z-index: 1;
    margin-top: 2rem;
    border-radius: ${rem(10)};

    &:hover {
      opacity: 0.4;
    }
  }

  ${ImgWrapper} {
    height: ${rem(300)};
    z-index: 0;
    border-radius: ${rem(10)};
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
