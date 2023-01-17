import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import paths from '../../paths'
import { ImgWrapper } from '../../styles/GlobalStyle'
import NoteType from '../../types/note'
import { formatDate } from '../../utils/formatter'

interface Props {
  note: NoteType
  type: string
}

export default function LessonDetail({ note, type }: Props) {
  const summary = `<p>${note.excerpt.substring(0, 250)}... <br><br>Read More >></p>`

  return (
    <LessonWrapper>
      <Link href={`${paths.lessons}/${type}/${note.slug}`}>
        <a>
          {note.featuredImage !== null && (
            <>
              <div className='hover'></div>
              <ImgWrapper>
                <Image
                  src={note.featuredImage.node.sourceUrl}
                  layout='fill'
                  objectFit='cover'
                  // objectPosition='center'
                />
              </ImgWrapper>
            </>
          )}
          <div className='text'>
            <p className='date'>{formatDate(note.date)}</p>
            <h3>{note.title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: summary
              }}
            ></div>
          </div>
        </a>
      </Link>
    </LessonWrapper>
  )
}
const LessonWrapper = styled.div`
  position: relative;
  padding: 2.5rem 0 2rem;
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

  ${ImgWrapper} {
    height: 300px;
    z-index: 0;
    border-radius: 10px;
  }

  .text {
    margin-top: 1rem;
    text-align: center;
  }

  p {
    margin: 1rem;
  }

  .date {
    color: var(--blue);
  }
`
