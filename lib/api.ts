export const fetchAPI = async (query: string, variables?: {}) => {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(process.env.WP_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export const getAllNotes = async () => {
  const res = await fetch(process.env.WP_URL as string, {
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
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            } 
          }
        }
      }
      `
    })
  })

  return res
}
