import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import Sidebar from '../../components/common/Sidebar'
import NotesList from '../../components/sermons/NotesList'

export default function Home({ notes }) {
  // console.log(notes.categories.nodes.name)
  return (
    <>
      <HeadLine imgUrl='/img/sermons-img.jpg' title='Sermons' />
      <SermonsContainer>
        <NotesList notes={notes} />
        <Sidebar title='Recent Notes' list={notes} />
      </SermonsContainer>
    </>
  )
}

const SermonsContainer = styled.div`
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
  const res = await fetch(process.env.WP_URL, {
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
            categories {
              nodes {
                name
              }
            }
            content
            featuredImage {
              node {
                sourceUrl
              }
            }    
            docFile {
              docFile {
                mediaItemUrl
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
      notes: json.data.sermonNotes
    }
  }
}
