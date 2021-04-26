import Image from 'next/image'

export default function SermonNote(data) {
  const note = data.note
  console.log(note);
  return (
    <>
      <h1>{note.title}</h1>
      <Image width='640' height='426' src={note.featuredImage.node.sourceUrl} />
      <article dangerouslySetInnerHTML={{ __html: note.content }}></article>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query SingleNote($id: ID!) {
        sermonNote(id: $id, idType: SLUG) {
          title
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }    
          docFile {
            docFile {
              mediaItemUrl
            }
          }
        }
      }
      `,
      variables: {
        id: context.params.slug
      }
    })
  })

  const json = await res.json()

  return {
    props: {
      note: json.data.sermonNote
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(process.env.WP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query SermonNotes {
        sermonNotes {
          nodes {
            slug
          }
        }
      }
      `
    })
  })
  const json = await res.json()
  const notes = json.data.sermonNotes.nodes

  const paths = notes.map((note) => ({ params: { slug: note.slug } }))

  return { paths, fallback: false }
}
