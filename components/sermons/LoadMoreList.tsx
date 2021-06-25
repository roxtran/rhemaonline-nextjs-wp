import { useQuery, gql } from '@apollo/client'
import Link from 'next/link'

const GET_NOTES = gql`
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
`

const BATCH_SIZE = 2

export default function LoadMoreList() {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true
  })

  if (error) {
    return <p>Sorry, an error has occurred. Please reload the page.</p>
  }

  if (!data && loading) {
    return <p>Loading...</p>
  }

  if (!data?.sermonNotes.nodes.length) {
    return <p>No more notes.</p>
  }

  const notes = data.sermonNotes.nodes.map((edge: { node: any }) => edge.node)
  const haveMorePosts = Boolean(data?.sermonNotes?.pageInfo.hasNextPage)

  return (
    <>
      <ul>
        
      </ul>
    </>
  )
}
