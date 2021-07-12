import Meta from '../../components/common/meta'
import NoteType from '../../types/note'
import HeadLine from '../../components/common/HeadLine'
import Sidebar from '../../components/sermons/Sidebar'
import NotesList from '../../components/sermons/NoteList'
import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

interface Props {
  notes: NoteType[]
  list: NoteType[]
}

export default function Sermons({ notes, list }: Props) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <Meta title='Sermons - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Sermons' />
      <SermonsContainer>
        <NotesList notes={notes} />
        <Sidebar title='Recent Notes' notes={list} />
      </SermonsContainer>
    </>
  )
}

export const SermonsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 2%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query getSermonNotes($first: Int!, $after: String) {
        sermonNotes(first: $first, after: $after) {
          nodes {
            title
            slug
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        sermonList: sermonNotes {
          nodes {
            title
            slug
            date
          }
        }
      }
    `,
    variables: {
      first: 2,
      after: null,
    },
  })

  return {
    props: {
      notes: data?.sermonNotes?.nodes,
      list: data?.sermonList?.nodes,
    },
    revalidate: 30,
  }
}
