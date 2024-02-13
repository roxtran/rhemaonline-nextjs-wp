import Meta from "components/common/meta";
import FeatureVideo from "components/common/FeatureVideo";
import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import PopularVideoSlider from "./videos/popular/PopularVideoSlider";
import RecentVideoSlider from "./videos/recent/RecentVideoSlider";
import Link from "next/link";
import paths from "paths";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FeaturedWrapper, PopularVideoWrapper, RecentVideoWrapper, SermonsContainer } from "pages/sermons";

interface Props {
  recentVideosData: {};
  popularVideosData: {};
}

export default function BibleStudies({ recentVideosData, popularVideosData }: Props) {
  const recentVideosString = recentVideosData[0].sermonVideoFields.items;
  const recentVideos = JSON.parse(recentVideosString);

  const popularVideosString = popularVideosData[0].sermonVideoFields.items;
  const popularVideos = JSON.parse(popularVideosString);

  // console.log(recentVideos);
  // console.log(popularVideos);

  const [hover, setHover] = useState(false);
  const latestVideo = recentVideos[0];

  return (
    <>
      <Meta title="Bible Studies - Rhema - Changing & Affecting Lives!" />
      <SermonsContainer>
        <div className="wrapper">
          <h2 className="title">Recent Sermon</h2>
          <FeaturedWrapper onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link href={`${paths.bibleStudies}/videos/recent/${latestVideo.snippet.resourceId.videoId}`}>
              <FeatureVideo
                hover={hover}
                videoId={latestVideo.snippet.resourceId.videoId}
                width="1140"
                height="650"
                thumbnailQuality="maxresdefault"
              />
              <BsPlayCircleFill className="play-icon" />
              <div className="video-text">
                <div className="tag">Latest Video</div>
                <h3 dangerouslySetInnerHTML={{ __html: latestVideo.snippet.title }} />
              </div>
            </Link>
          </FeaturedWrapper>
          <PopularVideoWrapper>
            <h4>Most Viewed Sermons</h4>
            <PopularVideoSlider slides={popularVideos} />
          </PopularVideoWrapper>
          <RecentVideoWrapper>
            <h4>Streamed Sermons</h4>
            <RecentVideoSlider slides={recentVideos} />
          </RecentVideoWrapper>
        </div>
      </SermonsContainer>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache()
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
    `
  });

  return {
    props: {
      recentVideosData: data?.recentVideos?.nodes,
      popularVideosData: data?.popularVideos?.nodes
    },
    revalidate: 10
  };
}
