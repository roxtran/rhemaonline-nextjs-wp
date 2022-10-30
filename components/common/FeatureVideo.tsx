export type Props = {
  hover: boolean
  videoId: string
  width: string
  height: string
  thumbnailQuality: 'maxresdefault' | 'default' | 'hqdefault' | 'mqdefault' | 'sddefault'
}

export default function YouTubeFrame({ hover, videoId, width, height, thumbnailQuality }: Props) {
  // return <>{hover ? <iframe width={width} height={height} src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1&autoplay=1&loop=1`} title='iframe video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe> : <img loading='lazy' src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`} alt='YouTube Video Thumbnail' width={width} height={height} className='shadow' />}</>

  return <>{hover ? <img loading='lazy' src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`} alt='YouTube Video Thumbnail' width={width} height={height} className='shadow' /> : <img loading='lazy' src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`} alt='YouTube Video Thumbnail' width={width} height={height} className='shadow' />}</>
}
