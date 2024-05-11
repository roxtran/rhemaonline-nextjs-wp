import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SermonNote from "pages/sermons/notes/[slug]";
import paths from "paths";
import NoteType from "types/note";

interface Props {
  note: NoteType;
  list: NoteType[];
}

type Params = {
  params: {
    slug: string;
  };
};

const VHGNote = ({ note, list }: Props) => {
  return (
    <SermonNote
      note={note}
      list={list}
      parentUrl={paths.virtualHomeGroupsDiscussions}
      parentName="Virtual Home Group Discussions"
      sidebarTitle="Recent Discussions"
    />
  );
};

export default VHGNote;

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
