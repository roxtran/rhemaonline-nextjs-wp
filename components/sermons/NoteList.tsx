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
        <NoteDetail key={note.slug} note={note} />
      ))}
    </ListWrapper>
  )
}
const ListWrapper = styled.div`
  padding: 2.5rem 0;
  h2 {
    /* color: var(--blue); */
    padding-bottom: 1rem;
    border-bottom: 4px dashed var(--mint);
  }
`
