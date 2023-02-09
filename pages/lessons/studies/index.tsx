import Meta from 'components/common/meta'
import NoteType from 'types/note'
import HeadLine from 'components/common/HeadLine'
import Sidebar from 'components/lessons/Sidebar'
import LessonList from 'components/lessons/LessonList'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { LessonsContainer } from '../notes'

interface Props {
  studies: NoteType[]
  list: NoteType[]
}

export default function Lessons({ studies, list }: Props) {
  // console.log(studies.categories.nodes.name)
  return (
    <>
      <Meta title='Lessons - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Lessons' />
      <LessonsContainer>
        <LessonList title='Bible Studies' notes={studies} type='studies' />
        <Sidebar title='Recent Studies' notes={list} />
      </LessonsContainer>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query getBibleStudies($first: Int!, $after: String) {
        bibleStudies(first: $first, after: $after) {
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
        studiesList: bibleStudies {
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
      studies: data?.bibleStudies?.nodes,
      list: data?.studiesList?.nodes
    },
    revalidate: 30
  }
}
