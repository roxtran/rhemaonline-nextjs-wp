import Meta from "components/common/meta";
import PostType from "types/post";
import HeadLine from "components/common/HeadLine";
import Sidebar from "components/lessons/Sidebar";
import LessonsList from "components/lessons/LessonList";
import styled from "styled-components";
import { def } from "styles/GlobalStyle";
import { getPosts } from "lib/wordpress";

interface Props {
  posts: PostType[];
}

export default function Lessons({ posts }: Props) {
  // console.log(posts);
  const notes = posts.slice(0, 3);
  const list = posts.slice(0, 9);
  return (
    <>
      <Meta title="Sermon Notes - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/sermons-img.jpg" title="Sermon Notes" />
      <LessonsContainer>
        <LessonsList title="Lessons" posts={notes} type="notes" />
        <Sidebar title="Recent Notes" notes={list} />
      </LessonsContainer>
    </>
  );
}

export const LessonsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${def.wrapper.width};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export async function getStaticProps() {
  const posts = await getPosts("sermon_notes");
  return {
    props: {
      posts
    },
    revalidate: 10 // In seconds
  };
}
