import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import Meta from '../../components/common/meta'
import Sidebar from '../../components/sermons/Sidebar'
import NotesList from '../../components/sermons/NoteList'
import NoteType from '../../types/note'

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
      notes: json?.data?.sermonNotes?.nodes
    },
    revalidate: 30
  }
}
