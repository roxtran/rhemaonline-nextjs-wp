import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Container, ImgWrapper, def } from "styles/GlobalStyle";

import HeadLine from "components/common/HeadLine";
import Meta from "components/common/meta";
import Image from "next/image";
import Link from "next/link";
import paths from "paths";
import styled from "styled-components";
import ServiceType from "types/service";

interface Props {
  services: ServiceType[];
}

export default function Connect({ services }: Props) {
  const pageTitle = "The Care Centre";
  const pageImage = "/img/connect-img.jpg";
  const pageDesc = "We are here for you.";

  return (
    <>
      <Meta title={pageTitle} ogImage={pageImage} desc={pageDesc} />
      <HeadLine
        imgUrl={pageImage}
        title={pageTitle}
        desc={pageDesc}
        btnText="Contact Us"
        btnLink={paths.formLinks.contactUs}
        height="28.125rem"
      />
      <ConnectContainer>
        <div className="desc">
          <h2>The Care Centre Services</h2>
          <p>
            The Care Centre team is the central hub of our ministry. They are the "one-stop destination" for all of our
            member and staff needs. From arranging a baby dedication for your child or grandchild to requesting a visit
            from our church family for a loved one that is ill, to enquiring about water baptism, and a whole lot more,
            the Care Centre team is here to serve you with excellence. Be sure to let us know how we have performed.
          </p>
        </div>
        <div className="services">
          {services.map((service) => (
            <div className="service" id={service.slug} key={service.title}>
              <ImgWrapper>
                <Image
                  src={service.featuredImage.node.sourceUrl}
                  alt={service.title}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ImgWrapper>
              {service.formLink.formLink.includes("https://rhemachristianministries.churchcenter.com/people/forms/") ? (
                <div className="text-wrapper">
                  <h3>{service.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
                  <a href={service.formLink.formLink} data-open-in-church-center-modal="true">
                    <span>{service.formLink.linkText}</span>
                  </a>
                </div>
              ) : (
                <Link href={service.formLink.formLink}>
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
    width: 32.5rem;
    max-width: 90vw;
    margin: 1rem 2rem 2rem;
    position: relative;
    ${ImgWrapper} {
      height: 15.63rem;
      @media screen and (max-width: 40rem) {
        height: 37.5rem;
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
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getServices {
        services(where: { orderby: { field: SLUG, order: ASC } }) {
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
    `,
  });

  return {
    props: {
      services: data?.services?.nodes,
    },
    revalidate: 10,
  };
}
