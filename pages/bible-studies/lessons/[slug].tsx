import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SermonNote from "pages/sermons/notes/[slug]";
import paths from "paths";
import NoteType from "types/note";

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

const BibleNote = ({ note, list }: Props) => {
  return (
    <SermonNote
      note={note}
      list={list}
      parentUrl={paths.bibleStudyLessons}
      parentName="Bible Studies"
      sidebarTitle="Recent Studies"
    />
  );
};

export default BibleNote;

const client = new ApolloClient({
  uri: process.env.WP_URL as string,
  cache: new InMemoryCache(),
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
      id: slug,
    },
  });
  return {
    props: {
      note: data?.bibleStudy,
      list: data?.bibleStudies?.nodes,
    },
    revalidate: 30,
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
    `,
  });
  const notes = data?.bibleStudies?.nodes;
  const paths = notes.map((note: { slug: string }) => ({
    params: { slug: note.slug },
  }));
  return { paths, fallback: "blocking" };
};
