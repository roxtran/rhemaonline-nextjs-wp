import Meta from "components/common/meta";
import styled from "styled-components";
import { Container, rem } from "styles/GlobalStyle";
import FeatureVideo from "components/common/FeatureVideo";
import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import PopularVideoSlider from "./videos/PopularVideoSlider";
import RecentVideoSlider from "./videos/RecentVideoSlider";
// import popularVideos from "data/popular-videos";
// import recentVideos from "data/recent-videos";
import Link from "next/link";
import paths from "paths";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function BibleStudies({ recentVideosData, popularVideosData }) {
  // const recentVideosString = recentVideosData[0].sermonVideoFields.items;
  // const recentVideos = JSON.parse(recentVideosString);

  // const popularVideosString = popularVideosData[0].sermonVideoFields.items;
  // const popularVideos = JSON.parse(popularVideosString);

  const recentVideos = recentVideosData.items;
  const popularVideos = popularVideosData.items;
  console.log(recentVideos[0]);
  // console.log(popularVideos);

  const [hover, setHover] = useState(false);
  const latestVideo = recentVideos[0];

  return (
    <>
      <Meta title="Sermons - Rhema - Changing & Affecting Lives!" />
      <SermonsContainer>
        <div className="wrapper">
          <h2 className="title">Recent Sermon</h2>
          <FeaturedWrapper onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <Link href={`${paths.sermons}/videos/${latestVideo.snippet.resourceId.videoId}`}>
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

const SermonsContainer = styled(Container)`
  .wrapper {
    max-width: ${rem(1140)};
    padding: 0 1rem;
  }

  .title {
    width: 100%;
    margin: 2.5rem 0 1.5rem;
    color: #000;
  }

  .video-wrapper:hover {
    transform: scale(1.025);
  }

  @media (max-width: ${rem(1140)}) {
    .wrapper {
      width: 95vw;
    }
  }
`;

const FeaturedWrapper = styled.div`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${rem(1140)}) {
    height: calc(95vw * 9 / 16);
  }
  @media (min-width: ${rem(1140)}) {
    height: fit-content;
  }

  &:hover {
    transform: scale(1.025);
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .video-text {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    color: #fff;

    .tag {
      background: rgba(255, 255, 255, 0.3);
      width: fit-content;
      padding: 0.25rem 1rem;
      border-radius: 2rem;
      font-size: 1.1rem;
    }

    h3 {
      color: #fff;
    }
  }
`;

const PopularVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .img-wrapper {
    width: ${rem(320)};
    height: ${rem(180)};
    border-radius: 0.5rem;
  }
  .date {
    margin-top: -0.75rem;
    font-weight: 600;
    font-size: 0.86rem;
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
  .slick-arrow {
    margin-top: -2rem;
  }
  .popular-video-text {
    max-width: 85%;
  }
`;

const RecentVideoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2rem 0;

  .video-wrapper {
    width: ${rem(320)};
    height: 6rem;

    display: flex;
    align-items: center;
  }
  .img-wrapper {
    width: ${rem(120)};
    height: ${rem(60)};
    border-radius: 0.5rem;
  }
  .video-title {
    font-size: 0.8rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: var(--heading-color);
    margin-left: 1rem;
    max-width: ${rem(160)};
  }
  .slick-list {
    padding: 1rem;
    margin: -1rem;
  }
`;

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const recentVideoRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL1w3ugxpyU18TVwDr8kMkOFqZix3UMoIt&maxResults=15&order=date&publishedAfter=2023-01-01T00:00:00Z&q&key=${process.env.YOUTUBE_API_KEY}`
  );
  const popularVideoRes = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL1w3ugxpyU18TVwDr8kMkOFqZix3UMoIt&maxResults=15&order=viewCount&publishedAfter=2023-01-01T00:00:00Z&q&key=${process.env.YOUTUBE_API_KEY}`
  );

  const recentVideosData = await recentVideoRes.json();
  const popularVideosData = await popularVideoRes.json();
  return {
    props: {
      recentVideosData,
      popularVideosData
    }
  };
}

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: process.env.WP_URL as string,
//     cache: new InMemoryCache()
//   });

//   const { data } = await client.query({
//     query: gql`
//       query getData {
//         recentVideos: sermonVideos(where: { title: "Recent Videos" }) {
//           nodes {
//             sermonVideoFields {
//               items
//             }
//           }
//         }
//         popularVideos: sermonVideos(where: { title: "Popular Videos" }) {
//           nodes {
//             sermonVideoFields {
//               items
//             }
//           }
//         }
//       }
//     `
//   });

//   return {
//     props: {
//       recentVideosData: data?.recentVideos?.nodes,
//       popularVideosData: data?.popularVideos?.nodes
//     },
//     revalidate: 10
//   };
// }
