type VideoType = {
  id: {
    videoId: string
  }
  snippet: {
    publishedAt: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
      }
      medium: {
        url: string
      }
      high: {
        url: string
      }
    }
    channelTitle: string
  }
}

export default VideoType
