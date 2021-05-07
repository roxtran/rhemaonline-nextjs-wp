import Image from 'next/image'
import styled from 'styled-components'
import HeadLine from '../../../components/common/HeadLine'
import Meta from '../../../components/common/seo-meta'
import Sidebar from '../../../components/common/Sidebar'
import { Button } from '../../../styles/GlobalStyle'
import { formatDate } from '../../../utils/formatter'
import { SermonsContainer } from '../index'

export default function SermonNote(data) {
  const note = data.note
  const notes = data.notes
  // console.log(data)
  // console.log(note.categories.nodes.name)
  return (
    <>
      <Meta
        title={note.title + ' - Rhema - Changing & Affecting Lives!'}
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
      <HeadLine
        imgUrl={note.featuredImage.node.sourceUrl}
        title={note.title}
        blur='blur(30px)'
      />
      <NoteContainer>
        <div className='note-wrapper'>
          <p className='date'>{formatDate(note.date)}</p>
          <div className='line'></div>
          <p>in Sermon Notes</p>
          <div className='img-wrapper'>
            <Image
              layout='fill'
              objectFit='cover'
              src={note.featuredImage.node.sourceUrl}
            />
          </div>
          <article dangerouslySetInnerHTML={{ __html: note.content }}></article>
          <Button href={note.docFile.docFile.mediaItemUrl} target='_blank'>
            Download
          </Button>
        </div>
        <Sidebar title='Recent Notes' list={notes} />
      </NoteContainer>
    </>
  )
}

const NoteContainer = styled(SermonsContainer)`
  padding-bottom: 3rem;
  .note-wrapper {
    position: relative;
    width: 670px;
    max-width: 90vw;
    margin: 0 auto;
    padding: 3rem 0;
    height: 100%;
    .date {
      font-style: italic;
      margin-bottom: 0.5rem;
    }
    .line {
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
    }
    .img-wrapper {
      margin-top: 1.5rem;
      position: relative;
      width: 650px;
      max-width: 90vw;
      height: 450px;
      border-radius: 5px;
      overflow: hidden;
    }
    article {
      margin: 2rem 0;
      p {
        margin: 1rem 0;
      }
      ul {
        padding-left: 40px;
      }
    }

    @media screen and (max-width: 640px) {
      .img-wrapper {
        height: 240px;
      }
    }
  }
`

export async function getStaticProps(context) {
  const res = await fetch(process.env.WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query ($id: ID!) {
        sermonNote(id: $id, idType: SLUG) {
          title
          date
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
        sermonNotes {
          nodes {
            title
            slug
            date
          }
        }
      }
      `,
      variables: {
        id: context.params.slug
      }
    })
  })

  const json = await res.json()

  return {
    props: {
      note: json.data.sermonNote,
      notes: json.data.sermonNotes
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(process.env.WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query SermonNotes {
        sermonNotes {
          nodes {
            slug
          }
        }
      }
      `
    })
  })
  const json = await res.json()
  const notes = json.data.sermonNotes.nodes

  const paths = notes.map((note) => ({ params: { slug: note.slug } }))

  return { paths, fallback: false }
}
