import Link from 'next/link'

export default function Home({ notes }) {
  console.log(notes)
  return (
    <>
      <h1>Sermon page</h1>
      {notes.nodes.map((note) => (
        <ul key={note.slug}>
          <li>
            <Link href={`/sermon/sermon-notes/${note.slug}`}>{note.title}</Link>
          </li>
        </ul>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query SermonNotes {
        sermonNotes {
          nodes {
            title
            slug
            date
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }    
            docFile {
              docFile {
                mediaItemUrl
              }
            }
          }
        }
      }
      `
    })
  })
  const json = await res.json()

  return {
    props: {
      notes: json.data.sermonNotes
    }
  }
}
