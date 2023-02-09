import Meta from 'components/common/meta'
import NoteType from 'types/note'
import HeadLine from 'components/common/HeadLine'
import Sidebar from 'components/lessons/Sidebar'
import LessonsList from 'components/lessons/LessonList'
import styled from 'styled-components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { def } from 'styles/GlobalStyle'

interface Props {
  notes: NoteType[]
  list: NoteType[]
}

export default function Lessons({ notes, list }: Props) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <Meta title='Lessons - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Lessons' />
      <LessonsContainer>
        <LessonsList title='Sermon Notes' notes={notes} type='notes' />
        <Sidebar title='Recent Notes' notes={list} />
      </LessonsContainer>
    </>
  )
}

export const LessonsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${def.wrapper.width};
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
      first: 3,
      after: null
    }
  })

  return {
    props: {
      notes: data?.sermonNotes?.nodes,
      list: data?.sermonList?.nodes
    },
    revalidate: 30
  }
}
