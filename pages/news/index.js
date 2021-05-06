import Link from 'next/link'
import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import { FEEDS } from '../../lib/rss'
import { Container } from '../../styles/GlobalStyle'

const feeds = () => {
  return (
    <>
      <HeadLine imgUrl='/img/news-img.jpg' title='News' />
      <NewsContainer>
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/news/${feed.slug}`}>
            <a>{feed.title}</a>
          </Link>
        ))}
      </NewsContainer>
    </>
  )
}

const NewsContainer = styled(Container)``

export default feeds
