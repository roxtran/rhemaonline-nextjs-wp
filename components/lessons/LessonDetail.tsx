import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import paths from "paths";
import { ImgWrapper, rem } from "styles/GlobalStyle";
import PostType from "types/post";
import { formatDate, shortenString } from "utils/formatter";

interface Props {
  post: PostType;
  type: string;
}

export default function LessonDetail({ post, type }: Props) {
  const featuredMedia =
    post["_embedded"]["wp:featuredmedia"] !== undefined
      ? post["_embedded"]["wp:featuredmedia"][0]
      : null;
  const summary = `<p>${shortenString(post.excerpt.rendered, 300)}... <br><br>Read More >></p>`;

  return (
    <LessonWrapper>
      <Link href={`${paths.lessons}/${type}/${post.slug}`}>

        <>
          {featuredMedia !== null && (
            <ImgWrapper>
              <Image
                src={featuredMedia["media_details"].sizes.large["source_url"]}
                alt={featuredMedia["alt_text"]}
                layout="fill"
                objectFit="cover"
                // objectPosition='center'
              />
            </ImgWrapper>
          )}
        </>
        <div className="text">
          <div className="date">{formatDate(post.date)}</div>
          <h3>{post.title.rendered}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: summary
            }}
          ></div>
        </div>

      </Link>
    </LessonWrapper>
  );
}
const LessonWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  width: ${rem(822)};
  max-width: 90vw;

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
