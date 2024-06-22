import { ItemWrapper, NoteImage, NoteImageHover } from "styles/note";

import Image from "next/image";
import Link from "next/link";
import NoteType from "types/note";
import { shortenString } from "utils/formatter";

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
            <NoteImage>
              <Image
                src={item.featuredImage.node.sourceUrl}
                alt={item.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </NoteImage>
            <NoteImageHover />
          </div>
        )}
        <div className="text">
          {/* <div className="date">{formatDate(item.date)}</div> */}
          <h3>{item.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          ></div>
        </div>
      </Link>
    </ItemWrapper>
  );
}
