import Link from 'next/link'
import styled from 'styled-components'
import NoteDetail from './NoteDetail'

export default function NotesList({ notes }) {
  return (
    <ListWrapper>
      <h2>Sermon Notes</h2>
      {notes.nodes.map((note) => (
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
