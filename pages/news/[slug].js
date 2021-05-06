import HeadLine from '../../components/common/HeadLine'
import { FEEDS, getFeed } from '../../lib/rss'
import styled from 'styled-components'

export default function Feed({ feed, items }) {
  return (
    <>
      <HeadLine imgUrl='/img/news-img.jpg' title={feed.title} />
      <div>
        {items.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div>{item.title}</div>
            {/* <div>{format(new Date(item.isoDate), 'PPP')}</div> */}
          </a>
        ))}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug)
  const detailedFeed = await getFeed(feed.url)

  return {
    props: {
      feed,
      items: detailedFeed.items
    },
    revalidate: 1
  }
}
