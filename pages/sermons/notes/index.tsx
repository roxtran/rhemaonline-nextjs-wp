import Meta from "components/common/meta";
import NoteType from "types/note";
import HeadLine from "components/common/HeadLine";
import { NotesContainer } from "styles/note";
import ItemList from "components/items/ItemList";
import Sidebar from "components/items/Sidebar";
import { ApolloClient, InMemoryCache, gql, DefaultOptions } from "@apollo/client";
import paths from "paths";

interface Props {
  notes: NoteType[];
  list: NoteType[];
}

export default function Lessons({ notes, list }: Props) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <Meta title="Lessons - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/sermons-img.jpg" title="Sermon Notes" />
      <NotesContainer>
        <ItemList title="Recent Sermons" items={notes} url={paths.sermonNotes} />
        <Sidebar title="Sermon Notes" items={list} url={paths.sermonNotes} />
      </NotesContainer>
    </>
  );
}

export async function getStaticProps() {
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore"
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    }
  };

  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });

  const { data } = await client.query({
    query: gql`
      query getSermonNotes($first: Int!, $after: String) {
        sermonNotes(first: $first, after: $after, where: { categoryName: "Sermon Notes" }) {
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
        sermonList: sermonNotes(where: { categoryName: "Sermon Notes" }) {
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
      after: null
    }
  });

  return {
    props: {
      notes: data?.sermonNotes?.nodes,
      list: data?.sermonList?.nodes
    },
    revalidate: 30
  };
}
