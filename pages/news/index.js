import Link from 'next/link'
import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import Meta from '../../components/common/seo-meta'
import { FEEDS } from '../../lib/rss'
import { Container } from '../../styles/GlobalStyle'

const feeds = () => {
  return (
    <>
      <Meta
        title='News - Rhema - Changing & Affecting Lives!'
        desc='Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.'
        ogImage='/img/og/home.jpg'
        canonical=''
      />
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
