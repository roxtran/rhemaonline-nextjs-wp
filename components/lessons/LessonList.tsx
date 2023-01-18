import styled from 'styled-components'
import LessonDetail from './LessonDetail'
import NoteType from 'types/note'

interface Props {
  title: string
  notes: NoteType[]
  type: string
}

export default function LessonList({ title, notes, type }: Props) {
  return (
    <ListWrapper>
      <h2>{title}</h2>
      {notes?.map((note) => (
        <div key={note.slug} className='note-detail'>
          <LessonDetail note={note} type={type} />
        </div>
      ))}
    </ListWrapper>
  )
}
const ListWrapper = styled.div`
  padding: 2rem 0;
  h2 {
    /* color: var(--blue); */
    padding-bottom: 1rem;
    border-bottom: 4px dashed var(--mint);
  }
  .note-detail:not(:last-child) {
    border-bottom: 1px double var(--mint);
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`
