type NoteType = {
  date: string
  title: string
  excerpt: string
  content: string
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  docFile: {
    docFile: {
      mediaItemUrl: string
    }
  }
  slug: string
}

export default NoteType
