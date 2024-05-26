import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { VideoContainer, VideoWrapper } from "../../styles";

import Meta from "components/common/meta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import paths from "paths";
import { IoArrowBackOutline } from "react-icons/io5";
import VideoType from "types/video";
import { formatDate } from "utils/formatter";

interface Props {
  video: VideoType;
}

type Params = {
  params: {
    videoId: string;
  };
};

export default function PopularVideoId({ video }: Props) {
  const router = useRouter();
  const pageTitle = video?.snippet?.title || "";
  const videoId = video?.id?.videoId || video?.snippet?.resourceId?.videoId || "";
  const pageImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoSource = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1&autoplay=1&loop=0`;
  const videoDate = video?.snippet?.publishedAt || "";
  const videoDesc = video?.snippet?.description || "";

  return (
    <>
      <Meta title={pageTitle + " - Rhema - Changing & Affecting Lives!"} ogImage={pageImage} />
      <VideoContainer>
        <div className="wrapper">
          <a className="btn-back" type="button" onClick={() => router.back()}>
            <IoArrowBackOutline className="icon-back" />
            Go back
          </a>
          <VideoWrapper>
            <iframe
              width="100%"
              height="100%"
              src={videoSource}
              title="iframe video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </VideoWrapper>
          <div className="text-wrapper">
            <h3 className="title" dangerouslySetInnerHTML={{ __html: pageTitle }} />
            <div className="subtitle">Rhema Christian Ministries • {formatDate(videoDate)}</div>
            <div className="desc">
              <p>
                Thank you for supporting Rhema Christian Ministries.
                <br /> If you're looking for ways to give, simply click here:{" "}
                <Link href={paths.giving}>https://rhemaonline.ca/giving/</Link>
              </p>
              <p dangerouslySetInnerHTML={{ __html: videoDesc }}></p>
            </div>
          </div>
          <div className="button-wrapper">
            <Link href={paths.givingLinks.titheLy} target="__blank">
              <div className="icon give-icon">
                <Image
                  src="/img/icons/give.png"
                  width={48}
                  height={48}
                  alt="give"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
            <Link href={paths.youtubeChannel} target="__blank">
              <div className="icon subscribe-icon">
                <Image
                  src="/img/icons/subscribe.png"
                  width={48}
                  height={48}
                  alt="subscribe"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
      </VideoContainer>
    </>
  );
}

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
