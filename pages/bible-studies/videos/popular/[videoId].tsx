import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import PopularVideoId from "pages/sermons/videos/popular/[videoId]";
import VideoType from "types/video";

interface Props {
  video: VideoType;
}

type Params = {
  params: {
    videoId: string;
  };
};

const BSPopularVideoId = ({ video }: Props) => {
  return <PopularVideoId video={video} />;
};

export default BSPopularVideoId;

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

  const popularVideosData = data?.popularVideos?.nodes;

  const popularVideosString = popularVideosData[0].sermonVideoFields.items;
  const popularVideos = JSON.parse(popularVideosString);

  videos.push(...popularVideos);

  const video = videos.find((video) => video.id.videoId === videoId);

  return {
    props: {
      video: video,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = videos.map((video) => ({
    params: { videoId: video.id.videoId },
  }));
  // console.log("!! paths", paths);
  return { paths, fallback: "blocking" };
};
