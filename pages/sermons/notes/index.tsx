import { ApolloClient, DefaultOptions, InMemoryCache, gql } from "@apollo/client";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import ItemList from "components/items/ItemList";
import Sidebar from "components/items/Sidebar";
import paths from "paths";
import { NotesContainer } from "styles/note";
import NoteType from "types/note";

interface Props {
  notes: NoteType[];
  list: NoteType[];
  pageTitle: string;
  pageImage?: string;
  headlineHeight?: string;
  headlineHeightMb?: string;
  displayHeadlineTitles?: boolean;
  url: string;
  subTitle: string;
  sidebarTitle: string;
}

export default function SermonNotes({
  notes,
  list,
  pageTitle = "Sermon Notes",
  pageImage = "/img/sermons-img.jpg",
  headlineHeight = "",
  headlineHeightMb = "20rem",
  displayHeadlineTitles = true,
  url = paths.sermonNotes,
  subTitle = "Lessons",
  sidebarTitle = "Recent Notes",
}: Props) {
  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <HeadLine
        imgUrl={pageImage}
        title={pageTitle}
        height={headlineHeight}
        mbHeight={headlineHeightMb}
        displayTitle={displayHeadlineTitles}
      />
      <NotesContainer>
        <ItemList title={subTitle} items={notes} url={url} />
        <Sidebar title={sidebarTitle} items={list} url={url} />
      </NotesContainer>
    </>
  );
}

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
