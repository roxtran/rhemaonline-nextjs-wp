import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Button, ImgWrapper } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Sidebar from "components/items/Sidebar";
import Image from "next/image";
import Link from "next/link";
import paths from "paths";
import { NoteContainer } from "styles/note";
import NoteType from "types/note";
import { shortenString } from "utils/formatter";

interface Props {
  note: NoteType;
  list: NoteType[];
  parentUrl: string;
  parentName: string;
  sidebarTitle: string;
}

type Params = {
  params: {
    slug: string;
  };
};

export default function SermonNote({
  note,
  list,
  parentUrl = paths.sermonNotes,
  parentName = "Sermon Notes",
  sidebarTitle = "Recent Notes",
}: Props) {
  const pageTitle = note.title || "";
  const pageImage = note.featuredImage?.node?.sourceUrl || "/img/beliefs-img.jpg";
  const pageContent = note.content || "";
  const pageDesc = shortenString(note.excerpt.replace(/<[^>]*>/g, ""), 150) + "..." || "";

  return (
    <>
      <Meta title={`${pageTitle} - Rhema - Changing & Affecting Lives!`} ogImage={pageImage} desc={pageDesc} />
      <HeadLine imgUrl={pageImage} title={pageTitle} blur="blur(1.875rem)" />
      <NoteContainer>
        <div className="note-wrapper">
          {/* <p className="date">{formatDate(note.date)}</p> */}
          <p>
            <i>
              in <Link href={parentUrl}>{parentName}</Link>
            </i>
          </p>
          <div className="line" />
          {parentName !== "Bible Studies" && pageImage && (
            <ImgWrapper>
              <Image
                src={pageImage}
                alt={pageTitle}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImgWrapper>
          )}
          <article dangerouslySetInnerHTML={{ __html: pageContent }}></article>
          {note.docFile.docFile !== null && (
            <div className="btn-wrapper">
              <div className="btn-bg">
                <Button className="btn" href={note.docFile.docFile.mediaItemUrl || ""} target="_blank">
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
        <Sidebar title={sidebarTitle} items={list || []} url={parentUrl} />
      </NoteContainer>
    </>
  );
}

const client = new ApolloClient({
  uri: process.env.WP_URL as string,
  cache: new InMemoryCache(),
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
          excerpt
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
        sermonNotes(where: { categoryName: "Sermon Notes" }) {
          nodes {
            title
            slug
            date
          }
        }
      }
    `,
    variables: {
      id: slug,
    },
  });
  return {
    props: {
      note: data?.sermonNote,
      list: data?.sermonNotes?.nodes,
    },
    revalidate: 30,
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
    `,
  });
  const notes = data?.sermonNotes?.nodes;
  const paths = notes.map((note: { slug: string }) => ({
    params: { slug: note.slug },
  }));
  return { paths, fallback: "blocking" };
};
