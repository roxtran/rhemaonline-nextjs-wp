type LeaderType = {
  title: string
  leaderFields: {
    subtitle: string
    smallImage: {
      sourceUrl: string
    }
  }
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  content: string
}

export default LeaderType
