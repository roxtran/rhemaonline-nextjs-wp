import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import VideoType from "types/video";
import PopularVideoId from "../popular/[videoId]";

interface Props {
  video: VideoType;
}

type Params = {
  params: { videoId: string };
};

const RecentVideoId = ({ video }: Props) => {
  return <PopularVideoId video={video} />;
};

export default RecentVideoId;

const videos: VideoType[] = [];

export const getStaticProps = async ({ params }: Params) => {
  const { videoId } = params;

  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getData {
        recentVideos: sermonVideos(where: { title: "Recent Sermon Videos" }) {
          nodes {
            sermonVideoFields {
              items
            }
          }
        }
      }
    `,
  });

  const recentVideosData = data?.recentVideos?.nodes;

  const recentVideosString = recentVideosData[0].sermonVideoFields.items;
  const recentVideos = JSON.parse(recentVideosString);

  videos.push(...recentVideos);

  const video = videos.find((video) => video.snippet.resourceId.videoId === videoId);

  return {
    props: {
      video: video,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = videos.map((video) => ({
    params: { videoId: video.snippet.resourceId.videoId },
  }));
  // console.log("!! paths", paths);
  return { paths, fallback: "blocking" };
};
