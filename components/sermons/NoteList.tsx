import styled from 'styled-components'
import NoteDetail from './NoteDetail'
import { Notes } from '../../pages/sermons/index'

interface NoteListProps {
  notes: Notes
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ListWrapper>
      <h2>Sermon Notes</h2>
      {notes.nodes.slice(0, 2).map((note) => (
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
