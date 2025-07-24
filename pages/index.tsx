import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

import Letter from "components/common/Modals/HomeModal";
import Meta from "components/common/meta";
import CTAPanel from "components/home/CTAPanel";
import Hero from "components/home/Hero";
import Newsletter from "components/home/Newsletter";
import Subscribe from "components/home/Subscribe";
import Welcome from "components/home/Welcome";
import styled from "styled-components";
import NewsletterType from "types/newsletter";
import SlideType from "types/slide";

interface Props {
  slides: SlideType[];
  newsletters: NewsletterType[];
}

const Home = ({ slides, newsletters }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const showModal = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    return () => {
      clearTimeout(showModal);
    };
  }, []);

  return (
    <>
      <Meta title="Home - Rhema - Changing & Affecting Lives!" />
      {/* <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' /> */}
      {/* <VideoWrapper>
        <video loop muted autoPlay>
          <source
            src="https://cms.rhemacanada.com/rhemaonline/wp-content/uploads/2024/03/easter-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper> */}
      <Hero slides={slides} />
      <Welcome />
      <CTAPanel />
      <Subscribe />
      <Newsletter newsletters={newsletters} />
      <Letter openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Home;

const VideoWrapper = styled.div`
  video {
    margin-top: 5rem;
    width: 100%;
    height: 56.25vw;
    object-fit: cover;
  }
`;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getData($numOfNewsletters: Int!, $after: String) {
        slides(where: { tag: "home", orderby: { field: SLUG, order: ASC } }) {
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
      after: null,
    },
  });

  return {
    props: { slides: data?.slides?.nodes, newsletters: data?.newsletters?.nodes },
    revalidate: 10,
  };
}
