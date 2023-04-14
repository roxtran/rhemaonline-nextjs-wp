import Head from "next/head";
import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import Link from "next/link";
import Image from "next/image";
import { Container, ImgWrapper, def } from "styles/GlobalStyle";
// import services from 'data/services'
import Meta from "components/common/meta";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ServiceType from "types/service";
import paths from "paths";

interface Props {
  services: ServiceType[];
}

export default function Connect({ services }: Props) {
  return (
    <>
      <Meta title="Connect - Rhema - Changing & Affecting Lives!" />
      <Head>
        <script src="https://js.churchcenter.com/modal/v1"></script>
      </Head>
      <HeadLine
        imgUrl="/img/connect-img.jpg"
        title="The Care Centre"
        desc="We are here for you."
        btnText="Contact Us"
        btnLink={paths.formLinks.contactUs}
        height="450px"
      />
      <ConnectContainer>
        <div className="desc">
          <h2>The Care Centre Services</h2>
          <p>
            The Care Centre team is the central hub of our ministry. They are the "one-stop
            destination" for all of our member and staff needs. From arranging a baby dedication for
            your child or grandchild to requesting a visit from our church family for a loved one
            that is ill, to enquiring about water baptism, and a whole lot more, the Care Centre
            team is here to serve you with excellence. Be sure to let us know how we have performed.
          </p>
        </div>
        <div className="services">
          {services.map((service) => (
            <div className="service" id={service.slug} key={service.title}>
              <ImgWrapper>
                <Image
                  src={service.featuredImage.node.sourceUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </ImgWrapper>
              {service.formLink.formLink.includes(
                "https://rhemachristianministries.churchcenter.com/people/forms/"
              ) ? (
                <div className="text-wrapper">
                  <h3>{service.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
                  <a href={service.formLink.formLink} data-open-in-church-center-modal="true">
                    <span>{service.formLink.linkText}</span>
                  </a>
                </div>
              ) : (
                <Link href={service.formLink.formLink} legacyBehavior>
                  <div className="text-wrapper">
                    <h3>{service.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
                    <a>
                      <span>{service.formLink.linkText}</span>
                    </a>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </ConnectContainer>
    </>
  );
}
const ConnectContainer = styled(Container)`
  .desc {
    width: ${def.wrapper.width};
    max-width: 90vw;
    margin-bottom: 2.5rem;
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
    width: 520px;
    max-width: 90vw;
    margin: 1rem 2rem 2rem;
    position: relative;
    ${ImgWrapper} {
      height: 250px;
      @media screen and (max-width: 640px) {
        height: 600px;
      }
    }
    h3 {
      margin: 1rem 0;
    }
    .text-wrapper {
      span {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }
`;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.WP_URL as string,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query getServices {
        services(where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            slug
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
    `
  });

  return {
    props: {
      services: data?.services?.nodes
    },
    revalidate: 10
  };
}
