import Link from 'next/link'
import styled from 'styled-components'

export default function Sidebar({ title, list }) {
  const formatDate = (date) => {
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
          {list.nodes.map((item) => (
            <li key={item.slug}>
              <Link href={`/sermons/notes/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
              <p>{formatDate(item.date)}</p>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrapper>
  )
}
const SidebarWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 5rem 0;
  border-top: 4px dashed var(--mint);
  padding: 2rem 1rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
  }
  li {
    padding: 1rem 0;
    border-bottom: 1px solid var(--mint);
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    padding: 2rem 3%;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`
