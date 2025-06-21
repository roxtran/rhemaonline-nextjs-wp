import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import SermonsContainer, { FeaturedWrapper, PopularVideoWrapper, RecentVideoWrapper } from "./styles";

import FeatureVideo from "components/common/FeatureVideo";
import Meta from "components/common/meta";
import Link from "next/link";
import paths from "paths";
import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import PopularVideoSlider from "./videos/popular/PopularVideoSlider";
import RecentVideoSlider from "./videos/recent/RecentVideoSlider";

// import popularVideos from "data/popular-videos";
// import recentVideos from "data/recent-videos";

interface Props {
  recentVideosData: {};
  popularVideosData: {};
  pageTitle: string;
  videoPath: string;
}

export default function SermonsVideos({
  recentVideosData,
  popularVideosData,
  pageTitle = "Sermon Videos",
  videoPath = paths.sermons,
}: Props) {
  const recentVideosString = recentVideosData[0].sermonVideoFields.items;
  const recentVideos = JSON.parse(recentVideosString);

  const popularVideosString = popularVideosData[0].sermonVideoFields.items;
  const popularVideos = JSON.parse(popularVideosString);

  const [hover, setHover] = useState(false);
  const latestVideo = recentVideos[0];

  const latestVideoId = latestVideo?.snippet?.resourceId?.videoId || "";
  const pageImage = `https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`;

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} />
      <SermonsContainer>
        <div className="wrapper">
          <h2 className="title">Recent Sermon</h2>
          <FeaturedWrapper onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link href={`${videoPath}/videos/recent/${latestVideoId}`}>
              <FeatureVideo
                hover={hover}
                videoId={latestVideoId}
                width="1140"
                height="650"
                thumbnailQuality="maxresdefault"
              />
              <BsPlayCircleFill className="play-icon" />
              <div className="video-text">
                <div className="tag">Latest Video</div>
                <h3 dangerouslySetInnerHTML={{ __html: latestVideo?.snippet?.title }} />
              </div>
            </Link>
          </FeaturedWrapper>
          <PopularVideoWrapper>
            <h4>Most Viewed Sermons</h4>
            <PopularVideoSlider slides={popularVideos} videoPath={videoPath} />
          </PopularVideoWrapper>
          <RecentVideoWrapper>
            <h4>Streamed Sermons</h4>
            <RecentVideoSlider slides={recentVideos} videoPath={videoPath} />
          </RecentVideoWrapper>
        </div>
      </SermonsContainer>
    </>
  );
}

export async function getStaticProps() {
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
