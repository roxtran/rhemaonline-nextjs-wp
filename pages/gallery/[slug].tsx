import NoteType from "types/note";
import Image from "next/image";
import Link from "next/link";
import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Sidebar from "components/items/Sidebar";
import { Button, ImgWrapper, rem } from "styles/GlobalStyle";
import { formatDate } from "utils/formatter";
import styled from "styled-components";
import { EventsContainer } from "./index";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import paths from "paths";
// import { validate } from 'graphql'

interface Props {
  event: NoteType;
  list: NoteType[];
}

type Params = {
  params: {
    slug: string;
  };
};

export default function Event({ event, list }: Props) {
  return (
    <>
      <Meta title={event.title + " - Rhema - Changing & Affecting Lives!"} />
      <HeadLine imgUrl="/img/events-img1.webp" title={event.title} blur="none" />
      <EventContainer>
        <div className="note-wrapper">
          <p className="date">{formatDate(event.date)}</p>
          <div className="line"></div>
          <p>
            in <Link href={paths.gallery}>Gallery</Link>
          </p>
          <article dangerouslySetInnerHTML={{ __html: event.content }}></article>
        </div>
        <Sidebar title="Recent Events" items={list} type="gallery" />
      </EventContainer>
    </>
  );
}

export const EventContainer = styled(EventsContainer)`
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
      overflow: hidden;
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

const client = new ApolloClient({
  uri: process.env.WP_URL as string,
  cache: new InMemoryCache()
});

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const { data } = await client.query({
    query: gql`
      query getEvents($id: ID!) {
        event(id: $id, idType: SLUG) {
          title
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        events {
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
      event: data?.event,
      list: data?.events?.nodes
    },
    revalidate: 30
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query getEvents {
        events {
          nodes {
            slug
          }
        }
      }
    `
  });
  const events = data?.events?.nodes;
  const paths = events.map((event: { slug: string }) => ({
    params: { slug: event.slug }
  }));
  return { paths, fallback: "blocking" };
};
