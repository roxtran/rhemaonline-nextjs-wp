import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SermonsVideos from "pages/sermons";
import paths from "paths";

interface Props {
  recentVideosData: {};
  popularVideosData: {};
}

const BibleStudiesVideos = ({ recentVideosData, popularVideosData }: Props) => {
  return (
    <SermonsVideos
      recentVideosData={recentVideosData}
      popularVideosData={popularVideosData}
      pageTitle="Bible Studies"
      videoPath={paths.bibleStudies}
    />
  );
};

export default BibleStudiesVideos;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getData {
        recentVideos: sermonVideos(where: { title: "Recent Studies Videos" }) {
          nodes {
            sermonVideoFields {
              items
            }
          }
        }
        popularVideos: sermonVideos(where: { title: "Popular Videos" }) {
          nodes {
            sermonVideoFields {
              items
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      recentVideosData: data?.recentVideos?.nodes,
      popularVideosData: data?.popularVideos?.nodes,
    },
    revalidate: 10,
  };
}
