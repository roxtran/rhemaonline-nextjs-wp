import styled from 'styled-components'
import NoteDetail from './NoteDetail'
import NoteType from '../../types/note'

interface Props {
  notes: NoteType[]
}

export default function NoteList({ notes }: Props) {
  return (
    <ListWrapper>
      <h2>Sermon Notes</h2>
      {notes?.map((note) => (
        <div key={note.slug} className='note-detail'>
          <NoteDetail note={note} />
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
