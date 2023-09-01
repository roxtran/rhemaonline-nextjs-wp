import styled from "styled-components";
import ItemDetail from "./ItemDetail";
import NoteType from "types/note";

interface Props {
  title: string;
  items: NoteType[];
  url: string;
}

export default function ItemList({ title, items, url }: Props) {
  return (
    <ListWrapper>
      <h2>{title}</h2>
      {items?.map((item) => (
        <div key={item.slug} className="item-detail">
          <ItemDetail item={item} url={url} />
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
  .item-detail:not(:last-child) {
    border-bottom: 1px double var(--mint);
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
