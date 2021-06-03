import Parser from 'rss-parser'

export const FEEDS = [
  {
    slug: 'biblegateway-blog',
    title: 'Bible Gateway Blog',
    url: 'https://biblegateway.com/blog/feed'
  },
  {
    slug: 'biblestudiesforlife-blog',
    title: 'Bible Studies For Life Blog',
    url: 'https://biblestudiesforlife.com/feed'
  }
]

export async function getFeed(feedUrl: string) {
  let parser = new Parser()

  let feed = await parser.parseURL(feedUrl)

  return feed
}
