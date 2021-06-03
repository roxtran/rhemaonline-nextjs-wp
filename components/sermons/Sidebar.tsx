import Link from 'next/link'
import styled from 'styled-components'
import NoteType from '../../types/notes'

interface Props {
  title: string
  notes: NoteType[]
}

export default function Sidebar({ title, notes }: Props) {
  const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return newDate
  }
  return (
    <SidebarWrapper>
      <div className='wrapper'>
        <h3>{title}</h3>
        <ul>
          {notes?.map((note) => (
            <li key={note.slug}>
              <Link href={`/sermons/notes/${note.slug}`}>
                <a>{note.title}</a>
              </Link>
              <p>{formatDate(note.date)}</p>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrapper>
  )
}
const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 300px;
  margin: 80px 0;
  border-top: 4px dashed var(--mint);
  padding: 32px 16px;
  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
  }
  li {
    padding: 16px 0;
    border-bottom: 1px solid var(--mint);
  }
  p {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    padding: 2rem 3%;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`
