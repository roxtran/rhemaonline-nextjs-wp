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

interface Props {
  note: NoteType;
  list: NoteType[];
}

type Params = {
  params: {
    slug: string;
  };
};

export default function SermonNote({ note, list }: Props) {
  // console.log(list);
  return (
    <>
      <Meta title={note.title + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine imgUrl={note.featuredImage.node.sourceUrl} title={note.title} blur="blur(30px)" />
      <NoteContainer>
        <div className="note-wrapper">
          {/* <p className="date">{formatDate(note.date)}</p> */}
          <p>
            <i>
              in <Link href={paths.virtualHomeGroupsDiscussions}>Virtual Home Group Discussions</Link>
            </i>
          </p>
          <div className="line" />
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
        <Sidebar title="Recent Discussions" items={list} url={paths.virtualHomeGroupsDiscussions} />
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
      query getNotes($id: ID!) {
        sermonNote(id: $id, idType: SLUG) {
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
        sermonNotes(where: { categoryName: "Virtual Home Group Discussion" }) {
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
      note: data?.sermonNote,
      list: data?.sermonNotes?.nodes
    },
    revalidate: 30
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query SermonNotes {
        sermonNotes {
          nodes {
            slug
          }
        }
      }
    `
  });
  const notes = data?.sermonNotes?.nodes;
  const paths = notes.map((note: { slug: string }) => ({
    params: { slug: note.slug }
  }));
  return { paths, fallback: "blocking" };
};