import Meta from "components/common/meta";
import PostType from "types/post";
import HeadLine from "components/common/HeadLine";
import Sidebar from "components/lessons/Sidebar";
import LessonList from "components/lessons/LessonList";
import { LessonsContainer } from "../notes";
import { getPosts } from "lib/wordpress";

interface Props {
  posts: PostType[];
}

export default function Lessons({ posts }: Props) {
  // console.log(posts);
  const studies = posts.slice(0, 3);
  const list = posts.slice(0, 9);
  return (
    <>
      <Meta title="Bible Studies - Rhema - Changing & Affecting Lives!" />
      <HeadLine imgUrl="/img/sermons-img.jpg" title="Bible Studies" />
      <LessonsContainer>
        <LessonList title="Lessons" posts={studies} type="studies" />
        <Sidebar title="Recent Studies" notes={list} />
      </LessonsContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts("bible_studies");
  return {
    props: {
      posts
    },
    revalidate: 10 // In seconds
  };
}
