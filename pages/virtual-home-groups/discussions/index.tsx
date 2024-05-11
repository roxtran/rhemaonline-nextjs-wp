import { ApolloClient, DefaultOptions, InMemoryCache, gql } from "@apollo/client";

import SermonNotes from "pages/sermons/notes";
import paths from "paths";
import NoteType from "types/note";

interface Props {
  notes: NoteType[];
  list: NoteType[];
}

const VHGDiscussions = ({ notes, list }: Props) => {
  return (
    <SermonNotes
      notes={notes}
      list={list}
      pageTitle="Virtual Home Group Discussions"
      pageImage="/img/VirtualHomeGroups.png"
      headlineHeight="37.5rem"
      headlineHeightMb="15rem"
      displayHeadlineTitles={false}
      url={paths.virtualHomeGroupsDiscussions}
      subTitle="Discussions"
      sidebarTitle="Recent Discussions"
    />
  );
};

export default VHGDiscussions;

export async function getStaticProps() {
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });

  const { data } = await client.query({
    query: gql`
      query getSermonNotes($first: Int!, $after: String) {
        sermonNotes(first: $first, after: $after, where: { categoryName: "Virtual Home Group Discussion" }) {
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
        sermonList: sermonNotes(where: { categoryName: "Virtual Home Group Discussion" }) {
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
      notes: data?.sermonNotes?.nodes,
      list: data?.sermonList?.nodes,
    },
    revalidate: 30,
  };
}
