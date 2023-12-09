import Meta from "components/common/meta";
import Video from "components/common/Video";
import CTAPanel from "components/home/CTAPanel";
import Subscribe from "components/home/Subscribe";
import Welcome from "components/home/Welcome";
import Newsletter from "components/home/Newsletter";
import styled from "styled-components";
import SlideType from "types/slide";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Hero from "components/home/Hero";
import NewsletterType from "types/newsletter";
import Head from "next/head";

interface Props {
  slides: SlideType[];
  newsletters: NewsletterType[];
}

const Home = ({ slides, newsletters }: Props) => {
  return (
    <>
      <Meta title="Home - Rhema - Changing & Affecting Lives!" />
      <Head>
        <script src="https://js.churchcenter.com/modal/v1"></script>
      </Head>
      {/* <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' /> */}
      {/* <VideoWrapper>
        <video loop muted autoPlay>
          <source src='/video/homepage (1080p).mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper> */}
      <Hero slides={slides} />
      <Welcome />
      <CTAPanel />
      <Subscribe />
      <Newsletter newsletters={newsletters} />
    </>
  );
};

export default Home;

const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: 60vh;
    object-fit: cover;

    @media screen and (max-width: 640px) {
      height: 70vh;
    }
  }
`;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query getData($numOfNewsletters: Int!, $after: String) {
        slides(where: { orderby: { field: SLUG, order: ASC } }) {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            slideFields {
              ctaUrl
              openLinkNewTab
              churchCenterModal
            }
          }
        }
        newsletters(first: $numOfNewsletters, after: $after) {
          nodes {
            NewsletterInfo {
              imgUrl
              link
            }
          }
        }
      }
    `,
    variables: {
      numOfNewsletters: 5,
      after: null
    }
  });

  return {
    props: { slides: data?.slides?.nodes, newsletters: data?.newsletters?.nodes },
    revalidate: 10
  };
}
