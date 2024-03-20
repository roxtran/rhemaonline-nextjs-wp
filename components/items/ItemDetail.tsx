import Image from "next/image";
import Link from "next/link";
import NoteType from "types/note";
import { ItemWrapper } from "styles/note";
import { ImgWrapper } from "styles/GlobalStyle";
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
