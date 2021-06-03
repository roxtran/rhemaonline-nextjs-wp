import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import Meta from '../../components/common/seo-meta'
import Sidebar from '../../components/sermons/Sidebar'
import NotesList from '../../components/sermons/NoteList'

export interface Note {
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  date: string
  title: string
  excerpt: string
  slug: string
}

export interface Notes {
  nodes: Note[]
}

interface SermonsProps {
  notes: Notes
}

export default function Sermons({ notes }: SermonsProps) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <Meta
        title='Sermons - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Sermons' />
      <SermonsContainer>
        <NotesList notes={notes} />
        <Sidebar title='Recent Notes' list={notes} />
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
  const res = await fetch(process.env.WP_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
  })
  const json = await res.json()

  return {
    props: {
      notes: json.data.sermonNotes || null
    },
    revalidate: 30
  }
}
