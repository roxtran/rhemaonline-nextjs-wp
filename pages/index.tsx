import Meta from '../components/common/meta'
import Video from '../components/common/Video'
import MiddleMenu from '../components/home/MiddleMenu'
import Subscribe from '../components/home/Subscribe'
import Welcome from '../components/home/Welcome'
import Newsletter from '../components/home/Newsletter'
import styled from 'styled-components'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import newsletters from '../data/newsletters'

const Home = () => {
  return (
    <>
      <Meta title='Home - Rhema - Changing & Affecting Lives!' />
      {/* <Video src='/video/RCM-Homepage-Teaser2.mp4' width='100%' height='80vh' /> */}
      <VideoWrapper>
        <video loop muted autoPlay>
          <source src='/video/RCM-Homepage-Teaser2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
      <MiddleMenu />
      <Welcome />
      <Subscribe />
      <Newsletter newsletters={newsletters} />
    </>
  )
}

export default Home

const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: 80vh;
    object-fit: cover;

    @media screen and (max-width: 640px) {
      height: 70vh;
    }
  }
`

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query getNewsletters($first: Int!, $after: String) {
        newsletters(first: $first, after: $after) {
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
      first: 5,
      after: null,
    },
  })

  return {
    props: {
      newsletters: data?.newsletters?.nodes,
    },
    revalidate: 30,
  }
}
