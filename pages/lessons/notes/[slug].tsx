import NoteType from "types/note";
import PostType from "types/post";
import Image from "next/image";
import Link from "next/link";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Sidebar from "components/lessons/Sidebar";
import { Button, ImgWrapper, rem } from "styles/GlobalStyle";
import { formatDate } from "utils/formatter";
import styled from "styled-components";
import { LessonsContainer } from "./index";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import paths from "paths";
import { getPost, getPaths, getPosts } from "lib/wordpress";
// import { validate } from 'graphql'

interface Props {
  note: PostType;
  list: PostType[];
}

type Params = {
  params: {
    slug: string;
  };
};

export default function SermonNote({ note, list }: Props) {
  const featuredMedia = note["_embedded"]["wp:featuredmedia"][0];
  return (
    <>
      <Meta title={note.title.rendered + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine
        imgUrl={featuredMedia["media_details"].sizes.large["source_url"]}
        title={note.title.rendered}
        blur="blur(30px)"
      />
      <NoteContainer>
        <div className="note-wrapper">
          <p className="date">{formatDate(note.date)}</p>
          <div className="line"></div>
          <p>
            in{" "}
            <Link href={paths.notes}>
              <a>Sermon Notes</a>
            </Link>
          </p>
          <ImgWrapper>
            <Image
              layout="fill"
              objectFit="cover"
              src={featuredMedia["media_details"].sizes.large["source_url"]}
            />
          </ImgWrapper>
          <article dangerouslySetInnerHTML={{ __html: note.content.rendered }}></article>
          {/* {note.docFile.docFile !== null && (
            <div className="btn-wrapper">
              <div className="btn-bg">
                <Button className="btn" href={note.docFile.docFile.mediaItemUrl} target="_blank">
                  Download
                </Button>
              </div>
            </div>
          )} */}
        </div>
        <Sidebar title="Recent Notes" notes={list} />
      </NoteContainer>
    </>
  );
}

export const NoteContainer = styled(LessonsContainer)`
  .note-wrapper {
    position: relative;
    width: ${rem(822)};
    max-width: 90vw;
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
      width: ${rem(822)};
      max-width: 90vw;
      height: ${rem(300)};
      border-radius: ${rem(10)};
    }
    article {
      margin: 2rem 0;
      ul {
        padding-left: 40px;
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

export const getStaticProps = async ({ params }: Params) => {
  const note = await getPost("sermon_notes", params.slug);
  const list = await getPosts("sermon_notes");

  return {
    props: {
      note,
      list
    },
    revalidate: 10 // In seconds
  };
};

export async function getStaticPaths() {
  const paths = await getPaths("sermon_notes");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking"
  };
}
