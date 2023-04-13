import styled from "styled-components";
import LessonDetail from "./LessonDetail";
import PostType from "types/post";

interface Props {
  title: string;
  posts: PostType[];
  type: string;
}

export default function LessonList({ title, posts, type }: Props) {
  return (
    <ListWrapper>
      <h2>{title}</h2>
      {posts?.map((post) => (
        <div key={post.slug} className="post-detail">
          <LessonDetail post={post} type={type} />
        </div>
      ))}
    </ListWrapper>
  );
}
const ListWrapper = styled.div`
  padding: 2rem 0;
  h2 {
    /* color: var(--blue); */
    padding-bottom: 1rem;
    border-bottom: 4px dashed var(--mint);
  }
  .post-detail:not(:last-child) {
    border-bottom: 1px double var(--mint);
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
