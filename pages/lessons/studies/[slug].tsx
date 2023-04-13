import PostType from "types/post";
import Image from "next/image";
import Link from "next/link";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Sidebar from "components/lessons/Sidebar";
import { Button, ImgWrapper } from "styles/GlobalStyle";
import { formatDate } from "utils/formatter";
import paths from "paths";
import { NoteContainer } from "../notes/[slug]";
import { getPaths, getPost, getPosts } from "lib/wordpress";
// import { validate } from 'graphql'

interface Props {
  study: PostType;
  list: PostType[];
}

type Params = {
  params: {
    slug: string;
  };
};
export default function BibleStudy({ study, list }: Props) {
  const featuredMedia =
    study["_embedded"]["wp:featuredmedia"] !== undefined
      ? study["_embedded"]["wp:featuredmedia"][0]
      : null;
  return (
    <>
      <Meta title={study.title.rendered + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine
        imgUrl={
          featuredMedia !== null
            ? featuredMedia["media_details"].sizes.large["source_url"]
            : "/img/beliefs-img.jpg"
        }
        title={study.title.rendered}
        blur="blur(30px)"
      />
      <NoteContainer>
        <div className="note-wrapper">
          <p className="date">{formatDate(study.date)}</p>
          <div className="line"></div>
          <p>
            in{" "}
            <Link href={paths.studies}>
              <a>Bible Studies</a>
            </Link>
          </p>
          {featuredMedia !== null && (
            <ImgWrapper>
              <Image
                layout="fill"
                objectFit="cover"
                src={featuredMedia["media_details"].sizes.large["source_url"]}
                alt={featuredMedia["alt_text"]}
              />
            </ImgWrapper>
          )}
          <article dangerouslySetInnerHTML={{ __html: study.content.rendered }}></article>
          {/* {study.docFile.docFile !== null && (
            <div className="btn-wrapper">
              <div className="btn-bg">
                <Button className="btn" href={note.docFile.docFile.mediaItemUrl} target="_blank">
                  Download
                </Button>
              </div>
            </div>
          )} */}
        </div>
        <Sidebar title="Recent Studies" notes={list} />
      </NoteContainer>
    </>
  );
}

export const getStaticProps = async ({ params }: Params) => {
  const study = await getPost("bible_studies", params.slug);
  const list = await getPosts("bible_studies");

  return {
    props: {
      study,
      list
    },
    revalidate: 10 // In seconds
  };
};

export async function getStaticPaths() {
  const paths = await getPaths("bible_studies");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking"
  };
}
