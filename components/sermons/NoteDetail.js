import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import paths from '../../paths'

export default function NoteDetail({ note }) {
  const formatDate = (date) => {
    const newDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return newDate
  }
  const summary = `${note.excerpt.substring(0, 250)}... <br><br><p>Read More >></p>`
  return (
    <NoteWrapper>
      <Link href={`${paths.sermons}/sermon-notes/${note.slug}`}>
        <a>
          <div className='hover'></div>
          <div className='img-wrapper'>
            <Image
              src={note.featuredImage.node.sourceUrl}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text'>
            <p className='date'>{formatDate(note.date)}</p>
            <h3>{note.title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: summary
              }}
            ></p>
          </div>
        </a>
      </Link>
    </NoteWrapper>
  )
}

const NoteWrapper = styled.div`
  position: relative;
  padding: 2.5rem 0;
  border-bottom: 1px double var(--mint);
  width: 670px;
  max-width: 90vw;

  .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 670px;
    max-width: 90vw;
    height: 300px;
    background: black;
    opacity: 0;
    z-index: 1;
    margin-top: 2.5rem;
    border-radius: 10px;

    &:hover {
      opacity: 0.4;
    }
  }

  .img-wrapper {
    position: relative;
    height: 300px;
    z-index: 0;
    border-radius: 10px;
    overflow: hidden;
  }

  .text {
    margin-top: 1rem;
    text-align: center;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  .date {
    color: var(--blue);
  }
`
