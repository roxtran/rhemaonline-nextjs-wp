import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import HeadLine from "components/common/HeadLine";
import LeaderModal from "components/common/Modals/LeaderModal";
import { Container, ImgWrapper, def } from "styles/GlobalStyle";
// import leaders from 'data/leaders'
import Meta from "components/common/meta";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import LeaderType from "types/leader";

interface Props {
  leaders: LeaderType[];
}

export default function Leadership({ leaders }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  return (
    <>
      <Meta title="Leadership - Rhema - Changing & Affecting Lives!" />
      <HeadLine
        imgUrl="/img/leadership-pastor-meikle-img.webp"
        title="Leadership"
        height="550px"
        // blur='blur(5px)'
      />
      <LeaderModal openModal={openModal} setOpenModal={setOpenModal} leader={selectedLeader} />
      <LeadershipContainer>
        <div className="content-wrapper">
          <div className="desc">
            <h2>Our Leadership</h2>
            <p>
              With a warm smile, a caring touch and a shepherd’s heart the leaders of Rhema
              Christian Ministries are tasked with operational and ecclesiastical excellence.
            </p>
          </div>
          <div className="leaders">
            {leaders.map((leader) => (
              <a
                className="leader"
                key={leader.title}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedLeader(leader);
                }}
              >
                <ImgWrapper>
                  <Image
                    className="img"
                    src={leader.leaderFields.smallImage.sourceUrl}
                    alt={leader.title}
                    width={250}
                    height={250}
                  />
                </ImgWrapper>
                <h3>{leader.title}</h3>
                <p>{leader.leaderFields.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </LeadershipContainer>
    </>
  );
}
const LeadershipContainer = styled(Container)`
  .content-wrapper {
    width: ${def.wrapper.width};
    max-width: 90vw;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: var(--blue);
    }
    p {
      margin-top: 1rem;
      text-align: center;
      width: 720px;
      max-width: 90vw;
    }
  }
  .leaders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0;
  }
  .leader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    ${ImgWrapper} {
      border-radius: 50%;
    }
    &:hover img {
      transform: scale(1.1);
    }
    h3 {
      padding-top: 1rem;
      font-size: 1.25rem;
      max-width: 280px;
      text-align: center;
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
      query getLeaders {
        leaders(where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            title
            leaderFields {
              subtitle
              smallImage {
                sourceUrl
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
          }
        }
      }
    `
  });

  return {
    props: {
      leaders: data?.leaders?.nodes
    },
    revalidate: 10
  };
}
