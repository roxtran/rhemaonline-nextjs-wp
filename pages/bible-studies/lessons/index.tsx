import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SermonNotes from "pages/sermons/notes";
import paths from "paths";
import NoteType from "types/note";

interface Props {
  studies: NoteType[];
  list: NoteType[];
}

const BibleStudies = ({ studies, list }: Props) => {
  return (
    <SermonNotes
      notes={studies}
      list={list}
      pageTitle="Bible Studies"
      url={paths.bibleStudyLessons}
      subTitle="Lessons"
      sidebarTitle="Recent Studies"
    />
  );
};

export default BibleStudies;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getBibleStudies($first: Int!, $after: String) {
        bibleStudies(first: $first, after: $after) {
          nodes {
            title
            slug
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        studiesList: bibleStudies {
          nodes {
            title
            slug
            date
          }
        }
      }
    `,
    variables: {
      first: 3,
      after: null,
    },
  });

  return {
    props: {
      studies: data?.bibleStudies?.nodes,
      list: data?.studiesList?.nodes,
    },
    revalidate: 30,
  };
}
