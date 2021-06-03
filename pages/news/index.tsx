import styled from 'styled-components'
import HeadLine from '../../components/common/HeadLine'
import Meta from '../../components/common/meta'
import { getFeed } from '../../lib/rss'
import { Container } from '../../styles/GlobalStyle'
import NewsType from '../../types/news'
import { formatDate } from '../../utils/formatter'

interface NewsProps {
  biblegatewayItems: NewsType[]
  studiesforlifeItems: NewsType[]
}

const news = ({ biblegatewayItems, studiesforlifeItems }: NewsProps) => {
  return (
    <>
      <Meta title='News - Rhema - Changing & Affecting Lives!' />
      <HeadLine imgUrl='/img/news-img.jpg' title='News' />
      <NewsContainer>
        <div className='content-wrapper'>
          <div className='news-list'>
            <h3>Bible Gateway</h3>
            <ul>
              {biblegatewayItems.map((news) => (
                <li>
                  <a
                    key={news.link}
                    href={news.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {news.title}
                  </a>
                  <p>{formatDate(news.isoDate)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='news-list'>
            <h3>Bible Studies For Life</h3>
            <ul>
              {studiesforlifeItems.map((news) => (
                <li>
                  <a
                    key={news.link}
                    href={news.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {news.title}
                  </a>
                  <p>{formatDate(news.isoDate)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </NewsContainer>
    </>
  )
}

const NewsContainer = styled(Container)`
  .content-wrapper {
    display: flex;
    width: 1200px;
    max-width: 90vw;
  }
  .news-list {
    padding: 0 2rem;
    margin-bottom: 2rem;
    flex: 1;
  }
  h3 {
    margin-bottom: 1rem;
  }
  ul {
    margin-left: 1rem;
    /* list-style: none; */
  }
  li {
    margin: 1rem 0;
  }
  @media screen and (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }
  }
`

export default news

export const getStaticProps = async () => {
  const biblegatewayUrl = 'https://biblegateway.com/blog/feed'
  const studiesforlifeUrl = 'https://biblestudiesforlife.com/feed'
  const faithlifeUrl = 'http://feeds.feedburner.com/FaithlifeBlog'

  const biblegatewayFeed = await getFeed(biblegatewayUrl)
  const studiesforlifeFeed = await getFeed(studiesforlifeUrl)
  const faithlifeFeed = await getFeed(faithlifeUrl)

  return {
    props: {
      biblegatewayItems: biblegatewayFeed.items,
      studiesforlifeItems: studiesforlifeFeed.items,
      faithlifeItems: faithlifeFeed.items
    },
    revalidate: 30
  }
}
