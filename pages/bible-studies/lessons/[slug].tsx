import NoteType from "types/note";
import Image from "next/image";
import Link from "next/link";
import Meta from "components/common/meta";
import HeadLine from "components/common/HeadLine";
import { NoteContainer } from "styles/note";
import Sidebar from "components/items/Sidebar";
import { Button, ImgWrapper } from "styles/GlobalStyle";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import paths from "paths";
// import { validate } from 'graphql'

interface Props {
  note: NoteType;
  list: NoteType[];
}

type Params = {
  params: {
    slug: string;
  };
};

export default function BibleStudy({ note, list }: Props) {
  return (
    <>
      <Meta title={note.title + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine
        imgUrl={note.featuredImage !== null ? note.featuredImage.node.sourceUrl : "/img/beliefs-img.jpg"}
        title={note.title}
        blur="blur(1.875rem)"
      />
      <NoteContainer>
        <div className="note-wrapper">
          {/* <p className="date">{formatDate(note.date)}</p> */}
          <p>
            <i>
              in <Link href={paths.bibleStudyLessons}>Bible Studies</Link>
            </i>
          </p>
          <div className="line" />
          {note.featuredImage !== null && (
            <ImgWrapper>
              <Image
                src={note.featuredImage.node.sourceUrl}
                alt={note.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }}
              />
            </ImgWrapper>
          )}
          <article dangerouslySetInnerHTML={{ __html: note.content }}></article>
          {note.docFile.docFile !== null && (
            <div className="btn-wrapper">
              <div className="btn-bg">
                <Button className="btn" href={note.docFile.docFile.mediaItemUrl} target="_blank">
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
        <Sidebar title="Recent Studies" items={list} url={paths.bibleStudyLessons} />
      </NoteContainer>
    </>
  );
}

const client = new ApolloClient({
  uri: process.env.WP_URL as string,
  cache: new InMemoryCache()
});

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const { data } = await client.query({
    query: gql`
      query getStudies($id: ID!) {
        bibleStudy(id: $id, idType: SLUG) {
          title
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          docFile {
            docFile {
              mediaItemUrl
            }
          }
        }
        bibleStudies {
          nodes {
            title
            slug
            date
          }
        }
      }
    `,
    variables: {
      id: slug
    }
  });
  return {
    props: {
      note: data?.bibleStudy,
      list: data?.bibleStudies?.nodes
    },
    revalidate: 30
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query BibleStudies {
        bibleStudies {
          nodes {
            slug
          }
        }
      }
    `
  });
  const notes = data?.bibleStudies?.nodes;
  const paths = notes.map((note: { slug: string }) => ({
    params: { slug: note.slug }
  }));
  return { paths, fallback: "blocking" };
};
