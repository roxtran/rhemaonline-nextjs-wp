import Head from 'next/head'
import styled from 'styled-components'
import HeadLine from '../components/common/HeadLine'
import Link from 'next/link'
import Image from 'next/image'
import { Container, ImgWrapper } from '../styles/GlobalStyle'
// import services from '../data/services'
import Meta from '../components/common/meta'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import ServiceType from '../types/service'

interface Props {
  services: ServiceType[]
}

export default function Connect({ services }: Props) {
  return (
    <>
      <Meta title='Connect - Rhema - Changing & Affecting Lives!' />
      <Head>
        <script src='https://js.churchcenter.com/modal/v1'></script>
      </Head>
      <HeadLine
        imgUrl='/img/connect-img.jpg'
        title='We Care'
        desc='We are here for you.'
        btnText='Contact Us'
        btnLink='https://rhemachristianministries.churchcenter.com/people/forms/59452'
        height='550px'
      />
      <ConnectContainer>
        <div className='desc'>
          <h2>We Care Services</h2>
          <p>
            The We Care team is the central hub of our ministry. They are the
            "one-stop destination" for all of our member and staff needs. From
            arranging a baby dedication for your child or grandchild to
            requesting a visit from our church family for a loved one that is
            ill, to enquiring about water baptism, and a whole lot more, the We
            Care team is here to serve you with excellence. Be sure to let us
            know how we have performed.
          </p>
        </div>
        <div className='services'>
          {services.map((service) => (
            <div className='service' id={service.title} key={service.title}>
              <ImgWrapper>
                <Image
                  src={service.featuredImage.node.sourceUrl}
                  layout='fill'
                  objectFit='cover'
                />
              </ImgWrapper>
              <h3>{service.title}</h3>
              {service.formLink.formLink.includes(
                'https://rhemachristianministries.churchcenter.com/people/forms/'
              ) ? (
                <a
                  href={service.formLink.formLink}
                  data-open-in-church-center-modal='true'
                >
                  <div className='hover'>
                    <div className='text-wrapper'>
                      <h3>{service.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: service.content }}
                      ></div>
                      <span>{service.formLink.linkText}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <Link href={service.formLink.formLink}>
                  <a>
                    <div className='hover'>
                      <div className='text-wrapper'>
                        <h3>{service.title}</h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: service.content }}
                        ></div>
                        <span>{service.formLink.linkText}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      </ConnectContainer>
    </>
  )
}
const ConnectContainer = styled(Container)`
  .desc {
    width: 1100px;
    max-width: 90vw;
    margin-bottom: 2rem;
    h2 {
      color: var(--blue);
    }
  }
  .services {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .service {
    width: 560px;
    max-width: 90vw;
    margin: 1rem 1rem 2rem 1rem;
    position: relative;
    text-align: center;
    h3 {
      margin: 0.5rem auto;
    }
  }
  ${ImgWrapper} {
    height: 500px;
    @media screen and (max-width: 640px) {
      height: 600px;
    }
  }
  .hover {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    overflow: hidden;
    background: var(--blue);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fff;
    }
    &:hover {
      opacity: 0.95;
      box-shadow: var(--shadow);
    }
  }
  .text-wrapper {
    color: #fff;
    width: 80%;
    text-align: center;
    span {
      color: #fff;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query getServices {
        services(where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            title
            content
            formLink {
              formLink
              linkText
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      services: data?.services?.nodes,
    },
    revalidate: 30,
  }
}
