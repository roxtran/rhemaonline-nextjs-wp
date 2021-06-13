import Meta from '../../components/common/meta'
import NoteType from '../../types/note'
import HeadLine from '../../components/common/HeadLine'
import Sidebar from '../../components/sermons/Sidebar'
import NotesList from '../../components/sermons/NoteList'
import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

interface Props {
  notes: NoteType[]
}

export default function Sermons({ notes }: Props) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <Meta title='Sermons - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Sermons' />
      <SermonsContainer>
        <NotesList notes={notes} />
        <Sidebar title='Recent Notes' notes={notes} />
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
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query SermonNotes {
        sermonNotes {
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
      }
    `
  })

  return {
    props: {
      notes: data?.sermonNotes?.nodes
    },
    revalidate: 30
  }
}
