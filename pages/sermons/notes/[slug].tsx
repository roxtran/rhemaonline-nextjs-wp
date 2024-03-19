import NoteType from "types/note";
import Image from "next/image";
import Link from "next/link";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Sidebar from "components/items/Sidebar";
import { Button, ImgWrapper, rem } from "styles/GlobalStyle";
import { formatDate } from "utils/formatter";
import styled from "styled-components";
import { LessonsContainer } from "./index";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import paths from "paths";
import { imgProperties, imgWidth } from "components/items/ItemDetail";
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

export default function SermonNote({ note, list }: Props) {
  return (
    <>
      <Meta title={note.title + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine imgUrl={note.featuredImage.node.sourceUrl} title={note.title} blur="blur(30px)" />
      <NoteContainer>
        <div className="note-wrapper">
          {/* <p className="date">{formatDate(note.date)}</p> */}
          <p>
            <i>
              in <Link href={paths.sermonNotes}>Sermon Notes</Link>
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
        <Sidebar title="Recent Notes" items={list} url={paths.sermonNotes} />
      </NoteContainer>
    </>
  );
}

export const NoteContainer = styled(LessonsContainer)`
  .note-wrapper {
    position: relative;
    ${imgWidth}
    padding: 3rem 0;
    height: 100%;
    .date {
      font-style: italic;
      margin-bottom: 0;
    }
    .line {
      margin: 0.5rem 0;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
    }
    ${ImgWrapper} {
      margin-top: 2rem;
      ${imgProperties}
    }
    article {
      margin: 2rem 0;
      ul {
        padding-left: 40px;
      }
      ol li {
        margin-bottom: 1rem;
      }
    }
    .btn-wrapper {
      position: relative;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        top: -1px;
        left: 20%;
        right: 20%;
        height: 15px;
        border-radius: 50%;
        box-shadow: 0 0 12px rgb(0 0 0 / 15%);
        z-index: -1;
      }
      .btn-bg {
        background: #fff;
        display: flex;
        padding: 2rem;
      }
      .btn {
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .note-wrapper {
      padding: 3rem 0 0;
    }
  }

  @media screen and (max-width: 640px) {
    ${ImgWrapper} {
      height: 240px;
    }
  }
`;

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
