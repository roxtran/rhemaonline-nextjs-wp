import NoteType from '../../../types/note'
import Image from 'next/image'
import Link from 'next/link'
import HeadLine from '../../../components/common/HeadLine'
import Meta from '../../../components/common/meta'
import Sidebar from '../../../components/sermons/Sidebar'
import { Button, ImgWrapper } from '../../../styles/GlobalStyle'
import { formatDate } from '../../../utils/formatter'
import styled from 'styled-components'
import { SermonsContainer } from '../index'
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import paths from '../../../paths'
// import { validate } from 'graphql'

interface Props {
  note: NoteType
  list: NoteType[]
}

type Params = {
  params: {
    slug: string
  }
}

export default function SermonNote({ note, list }: Props) {
  return (
    <>
      <Meta title={note.title + ' - Rhema - Changing & Affecting Lives!'} />
      <HeadLine
        imgUrl={note.featuredImage.node.sourceUrl}
        title={note.title}
        blur='blur(30px)'
      />
      <NoteContainer>
        <div className='note-wrapper'>
          <p className='date'>{formatDate(note.date)}</p>
          <div className='line'></div>
          <p>
            in{' '}
            <Link href={paths.sermons}>
              <a>Sermon Notes</a>
            </Link>
          </p>
          <ImgWrapper>
            <Image
              layout='fill'
              objectFit='cover'
              src={note.featuredImage.node.sourceUrl}
            />
          </ImgWrapper>
          <article dangerouslySetInnerHTML={{ __html: note.content }}></article>
          <div className='btn-wrapper'>
            <div className='btn-bg'>
              <Button
                className='btn'
                href={note.docFile.docFile.mediaItemUrl}
                target='_blank'
              >
                Download
              </Button>
            </div>
          </div>
        </div>
        <Sidebar title='Recent Notes' notes={list} />
      </NoteContainer>
    </>
  )
}

const NoteContainer = styled(SermonsContainer)`
  .note-wrapper {
    position: relative;
    width: 670px;
    max-width: 90vw;
    margin: 0 auto;
    padding: 3rem 0;
    height: 100%;
    .date {
      font-style: italic;
      margin-bottom: 0;
    }
    .line {
      margin: 0.5rem 0;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
    }
    ${ImgWrapper} {
      margin-top: 2rem;
      width: 650px;
      max-width: 90vw;
      height: 450px;
    }
    article {
      margin: 2.5rem 0;
      ul {
        padding-left: 40px;
      }
    }
    .btn-wrapper {
      position: relative;
      z-index: 1;
      &:before {
        content: '';
        position: absolute;
        top: -1px;
        left: 20%;
        right: 20%;
        height: 15px;
        border-radius: 50%;
        box-shadow: 0 0 12px rgb(0 0 0 / 15%);
        z-index: -1;
      }
      .btn-bg {
        background: #fff;
        display: flex;
        padding: 2rem;
      }
      .btn {
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .note-wrapper {
      padding: 3rem 0 0;
    }
  }

  @media screen and (max-width: 640px) {
    ${ImgWrapper} {
      height: 240px;
    }
  }
`

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params
  const res = await fetch(process.env.WP_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query ($id: ID!) {
        sermonNote(id: $id, idType: SLUG) {
          title
          date
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
        id: slug,
      },
    }),
  })

  const json = await res.json()

  return {
    props: {
      note: json?.data?.sermonNote,
      list: json?.data?.sermonNotes?.nodes,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(process.env.WP_URL as string, {
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
      `,
    }),
  })
  const json = await res.json()
  const notes = json.data.sermonNotes.nodes

  const paths = notes.map((note: { slug: string }) => ({
    params: { slug: note.slug },
  }))
  return { paths, fallback: false }
}
